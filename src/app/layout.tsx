import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "꿈해몽",
  description: "해몽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
    </html>
  );
}
