import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Compass Visas - Expert Immigration Services",
  description: "Professional immigration and visa services to help you navigate your journey to a new country. Expert guidance for all visa types and immigration processes.",
  keywords: "immigration, visa services, visa consultation, immigration lawyer, visa application, immigration help",
  authors: [{ name: "Compass Visas" }],
  openGraph: {
    title: "Compass Visas - Expert Immigration Services",
    description: "Professional immigration and visa services to help you navigate your journey to a new country.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compass Visas - Expert Immigration Services",
    description: "Professional immigration and visa services to help you navigate your journey to a new country.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
