import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kajal.love"),
  title: "Happy Birthday Kajal 🎂✨ | A Little Universe Made For You",
  description:
    "A magical birthday present and digital keepsake crafted especially for Kajal — filled with memories, 64 cherished photographs, videos, sweet Hindi & English shayaris, and endless love.",
  openGraph: {
    title: "Happy Birthday Kajal 🎂✨ | A Little Universe Made For You",
    description:
      "A magical birthday present and digital keepsake crafted especially for Kajal — filled with memories, 64 cherished photographs, videos, sweet Hindi & English shayaris, and endless love.",
    images: [
      {
        url: "/images/kajal/photos/kajal-01.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Kajal",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎂</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased min-h-screen bg-[#FFFDFB] text-[#2A121A] selection:bg-[#FFB3C1] selection:text-[#3D0C1A]">
        {children}
      </body>
    </html>
  );
}
