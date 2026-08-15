import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon 3D Media Co. (H3D) — Transforming Public Spaces with Smart Advertising",
  description:
    "Horizon 3D Media Co. (H3D) is a premier out-of-home media company operating large billboards, LED screens, transit advertising, bus-stop shelter branding, and smart public-space media across Guruvayur Municipality.",
  keywords: [
    "Horizon 3D Media",
    "H3D",
    "OOH Media",
    "Outdoor Advertising",
    "Guruvayur Municipality Billboard",
    "LED Screen Billboards",
    "Transit Advertising",
    "Bus Shelter Branding",
    "Smart City Wayfinding",
    "Kerala Outdoor Media",
  ],
  authors: [{ name: "Horizon 3D Media Co." }],
  openGraph: {
    title: "Horizon 3D Media Co. (H3D) — Transforming Public Spaces with Smart Advertising",
    description:
      "Premier out-of-home advertising infrastructure, transit shelters, and high-brightness LED screen billboards in Guruvayur Municipality.",
    url: "https://horizon3dmedia.com",
    siteName: "Horizon 3D Media Co.",
    images: [
      {
        url: "/images/hero-billboard.jpg",
        width: 1200,
        height: 675,
        alt: "Horizon 3D Media Outdoor Advertising Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon 3D Media Co. (H3D)",
    description: "Transforming public spaces with smart advertising infrastructure.",
    images: ["/images/hero-billboard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF9F5] text-[#0A0B0E] antialiased selection:bg-h3d-blue selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
