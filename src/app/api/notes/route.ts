import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const CUTE_NOTE_PHOTOS = [
  "/images/kajal/photos/kajal-01.jpg",
  "/images/kajal/photos/kajal-02.jpg",
  "/images/kajal/photos/kajal-03.jpg",
  "/images/kajal/photos/kajal-04.jpg",
  "/images/kajal/photos/kajal-05.jpg",
  "/images/kajal/photos/kajal-06.jpg",
];

const DEFAULT_NOTES = [
  {
    sender: "Adarsh",
    message: "Happy Birthday, Kajal! You make every ordinary day feel like a magical celebration. Thank you for being the sweetest part of my life! 🎂💖",
    tag: "Heartfelt",
    imageUrl: "/images/kajal/photos/kajal-01.jpg",
    createdAt: new Date().toISOString(),
    likes: 24,
  },
  {
    sender: "Forever Yours",
    message: "Celebrating your special day, Kajal! Wishing you laughter, boundless happiness, and dreams fulfilled. ✨🎂",
    tag: "Romantic",
    imageUrl: "/images/kajal/photos/kajal-02.jpg",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    likes: 31,
  },
  {
    sender: "Adarsh",
    message: "Tere chehre ki muskaan hi meri duniya hai, Kajal. Always keep blooming and smiling! 🌸🎂",
    tag: "Shayari",
    imageUrl: "/images/kajal/photos/kajal-03.jpg",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    likes: 42,
  },
];

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection("notes");

    // Automatically update any notes with empty or broken imageUrl in database
    await collection.updateMany(
      {
        $or: [
          { imageUrl: "" },
          { imageUrl: { $exists: false } },
          { imageUrl: null },
          { imageUrl: { $regex: "polaroid1\\.jpg" } },
          { imageUrl: { $regex: "meghna" } },
          { imageUrl: { $regex: "rose" } },
        ],
      },
      { $set: { imageUrl: "/images/kajal/photos/kajal-01.jpg" } }
    ).catch(() => {});

    // Ensure notes point to Kajal images
    await collection.updateOne(
      { sender: "Adarsh", tag: "Heartfelt" },
      { $set: { imageUrl: "/images/kajal/photos/kajal-01.jpg" } }
    ).catch(() => {});

    await collection.updateOne(
      { sender: "Forever Yours" },
      { $set: { imageUrl: "/images/kajal/photos/kajal-02.jpg" } }
    ).catch(() => {});

    let notes = await collection.find({}).sort({ createdAt: -1 }).limit(50).toArray();

    // If no notes yet in DB, populate initial seeds
    if (notes.length === 0) {
      await collection.insertMany(
        DEFAULT_NOTES.map((n) => ({
          ...n,
          createdAt: new Date(),
        }))
      );
      notes = await collection.find({}).sort({ createdAt: -1 }).toArray();
    }

    return NextResponse.json({
      success: true,
      notes: notes.map((n, idx) => ({
        id: n._id.toString(),
        sender: n.sender,
        message: n.message,
        tag: n.tag || "Love",
        imageUrl:
          n.imageUrl && !n.imageUrl.includes("polaroid1.jpg") && n.imageUrl.trim() !== ""
            ? n.imageUrl
            : CUTE_NOTE_PHOTOS[idx % CUTE_NOTE_PHOTOS.length],
        createdAt: n.createdAt,
        likes: n.likes || 0,
      })),
    });
  } catch (error: any) {
    console.error("MongoDB GET notes error:", error);
    // Fallback to default notes if DB connection fails temporarily
    return NextResponse.json({
      success: true,
      fallback: true,
      notes: DEFAULT_NOTES.map((n, i) => ({ id: `fallback-${i}`, ...n })),
      error: error?.message,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sender, message, tag, imageUrl } = body;

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "Message cannot be empty" }, { status: 400 });
    }

    const db = await getDatabase();
    const collection = db.collection("notes");

    const newNote = {
      sender: (sender && sender.trim()) || "Secret Admirer",
      message: message.trim(),
      tag: (tag && tag.trim()) || "Love",
      imageUrl: (imageUrl && imageUrl.trim()) || "",
      createdAt: new Date(),
      likes: 1,
    };

    const result = await collection.insertOne(newNote);

    return NextResponse.json({
      success: true,
      note: {
        id: result.insertedId.toString(),
        ...newNote,
      },
    });
  } catch (error: any) {
    console.error("MongoDB POST notes error:", error);
    return NextResponse.json(
      { error: "Failed to save note to MongoDB Atlas", details: error?.message },
      { status: 500 }
    );
  }
}
