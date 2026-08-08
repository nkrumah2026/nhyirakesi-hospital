import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nhyirakesiwellnesshospital.com"),
  title: "Nhyirakesi Wellness Hospital | Takoradi, Ghana | 24/7 Natural & Scientific Healthcare",
  description:
    "Nhyirakesi Wellness Hospital - HOME of Natural, Scientific Health, Wellness, Beauty & Longevity. Located on Adientem Road, Takoradi, Ghana. 24/7 Consultation, Spine & Joint Care.",
  keywords: [
    "Nhyirakesi Wellness Hospital",
    "Hospital in Takoradi",
    "Natural medicine Ghana",
    "Scientific wellness hospital",
    "Spine and joint therapy Takoradi",
    "Holistic health Ghana",
    "Adientem road hospital",
  ],
  authors: [{ name: "Nhyirakesi Wellness Hospital" }],
  openGraph: {
    title: "Nhyirakesi Wellness Hospital | Natural & Scientific Healthcare",
    description:
      "HOME of Natural, Scientific Health, Wellness, Beauty & Longevity in Takoradi, Ghana. Open 24/7.",
    url: "https://nhyirakesiwellnesshospital.com",
    siteName: "Nhyirakesi Wellness Hospital",
    images: [
      {
        url: "/images/logo-signboard.jpeg",
        width: 1200,
        height: 630,
        alt: "Nhyirakesi Wellness Hospital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
