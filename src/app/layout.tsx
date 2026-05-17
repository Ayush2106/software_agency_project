import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PrimeAxis Solutions | Custom Software Studio",
  description:
    "PrimeAxis Solutions builds production web platforms in Australia and India — including Apply For Me, national education systems, and enterprise finance tools. Freelance & contract software development.",
  keywords: [
    "software agency",
    "custom software",
    "Australia",
    "India",
    "web development",
    "Apply For Me",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased mesh-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
