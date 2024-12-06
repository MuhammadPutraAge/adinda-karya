import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  weight: "400 500 700 900",
});

export const metadata: Metadata = {
  title: "Adinda Karya",
  description:
    "Discover elegant and comfortable furniture at Adinda Karya. Shop our collection of premium armchairs, cozy bean bags, and stylish sofas, perfect for enhancing your home. Quality craftsmanship and modern designs at great prices. ",
  keywords: [
    "Adinda Karya",
    "furniture ecommerce",
    "armchair",
    "bean bag",
    "sofa",
    "home furniture",
    "quality furniture",
    "modern designs",
    "cozy seating",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body className={`${roboto.variable} bg-light text-dark antialiased`}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
