import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KMR Polymers Pvt Ltd",
  description:
    "Manufacturer of high-performance uPVC, Casing, SWR, and UGD pipes under brand KMR SUDHA GOLD®. IS 4985:2000 certified manufacturing facility in Kamareddy, Telangana.",
  keywords: [
    "KMR Polymers",
    "KMR Sudha Gold",
    "uPVC Pipes manufacturer Telangana",
    "Kamareddy pipe factory",
    "UGD pipes Hyderabad",
    "Casing pipes manufacturer",
    "BIS certified PVC pipes",
  ],
  openGraph: {
    title: "KMR Polymers Pvt Ltd",
    description:
      "BIS Certified (IS 4985:2000) manufacturer of uPVC, Casing, SWR & UGD Pipes in Kamareddy & Hyderabad.",
    url: "https://kmr-polymers.vercel.app",
    siteName: "KMR Polymers",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}