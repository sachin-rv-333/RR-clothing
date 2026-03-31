import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RR Clothing | Premium Men's Fashion in Chitradurga",
  description:
    "RR Clothing is Chitradurga's leading menswear store offering stylish readymade garments — jeans, T-shirts, and shirts. Serving at Chitradurga Fort.",
  keywords: ["Mens Fashion", "Clothing Store", "Chitradurga", "Jeans", "T-Shirts", "Shirts", "RR Clothing", "Karnataka", "Menswear"],
  openGraph: {
    title: "RR Clothing | Premium Men's Fashion in Chitradurga",
    description: "Chitradurga's trusted menswear store. Shop jeans, shirts and T-shirts at unbeatable prices. Call +91 91481 61724.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <FloatingButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
