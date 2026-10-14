import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://shine-wine.vercel.app"),
  title: "Happy Birthday Angel 🎂✨ | A Little Universe Made For You",
  description:
    "A magical birthday present and digital keepsake crafted especially for Angel — filled with memories, cherished photographs, sweet Hindi & English shayaris, and endless love.",
  openGraph: {
    title: "Happy Birthday Angel 🎂✨ | A Little Universe Made For You",
    description:
      "A magical birthday present and digital keepsake crafted especially for Angel — filled with memories, cherished photographs, sweet Hindi & English shayaris, and endless love.",
    images: [
      {
        url: "/images/angel/angel-01.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Angel",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎂</text></svg>",
  },
};

export default function AngelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
