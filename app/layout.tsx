import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harbor House | Student living",
  description: "A comfortable, connected PG accommodation for students.",
};

/**
 * The root layout owns the persistent site chrome so every future route gets
 * the same navigation, footer, metadata, and global design system.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
