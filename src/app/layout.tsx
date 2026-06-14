import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saraswati Kala Kendra | Premier Dance & Cultural Academy",
  description: "Nurturing talent, preserving culture, and inspiring confidence through the art of dance. Located in Muzaffarpur, Bihar.",
  keywords: ["dance academy", "Saraswati Kala Kendra", "cultural arts", "Muzaffarpur", "classical dance", "Bollywood dance"],
  openGraph: {
    title: "Saraswati Kala Kendra | Premier Dance & Cultural Academy",
    description: "Nurturing talent, preserving culture, and inspiring confidence through the art of dance. Located in Muzaffarpur, Bihar.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
