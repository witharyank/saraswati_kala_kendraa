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
  title: "Saraswati Kala Kendra | Dance & Drawing Classes in Muzaffarpur",
  description: "Join Saraswati Kala Kendra in Muzaffarpur for Dance Classes, Drawing & Art Education, Cultural Activities, and Creative Development for children and students.",
  keywords: ["dance academy", "Saraswati Kala Kendra", "cultural arts", "Muzaffarpur", "classical dance", "Bollywood dance", "drawing classes", "art education"],
  verification: {
    google: "gY5g1qm8z9kqntYSZsIuSiEkptjhW4km1ssxBqDTQ10",
  },
  openGraph: {
    title: "Saraswati Kala Kendra | Dance & Drawing Classes in Muzaffarpur",
    description: "Join Saraswati Kala Kendra in Muzaffarpur for Dance Classes, Drawing & Art Education, Cultural Activities, and Creative Development for children and students.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to public/
        width: 1200,
        height: 630,
        alt: "Saraswati Kala Kendra Academy",
      },
    ],
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
