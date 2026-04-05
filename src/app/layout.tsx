import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://surakshith-portfolio.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
