import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surakshith — Developer & Designer",
  description: "Modern, animated portfolio.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Surakshith — Portfolio", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
