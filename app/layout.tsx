import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bangsar South | Riana Tree",
  description: "Pantai Sentral Park Property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">{children}</body>
    </html>
  );
}
