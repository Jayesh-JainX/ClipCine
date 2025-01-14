import { metaKeywords } from "./keywords";
import type { Metadata } from "next";

export const defaultMetadata = {
  metadataBase: new URL("https://clipcine.vercel.app"),
  title: {
    default: "ClipCine - Explore & Watch Movie Clips Anytime",
    template: "ClipCine | %s",
  },
  description:
    "ClipCine is your go-to platform for discovering and watching movie clips from your favorite films. Whether you're looking for iconic scenes, unforgettable moments, or just want to revisit the best parts of a movie, ClipCine has it all. Browse, search, and enjoy clips from a wide variety of genres and movies, all in one place. Stay up-to-date with the latest film highlights and relive the magic of cinema!",
  keywords: metaKeywords.join(", "),
  creator: "Jayesh Jain",
  publisher: "Jayesh Jain",
  applicationName: "ClipCine",
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme: "light",
  category: "Movie Clips & Entertainment - ClipCine",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 400,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  authors: [
    {
      name: "Jayesh Jain",
      url: "https://jayeshjain.vercel.app",
    },
  ],
  themeColor: "#ffffff",
  appLinks: {
    web: {
      url: "https://clipcine.vercel.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clipcine.vercel.app",
    siteName: "ClipCine",
    title: "ClipCine - Explore & Watch Movie Clips Anytime",
    description:
      "ClipCine is your go-to platform for discovering and watching movie clips from your favorite films. Whether you're looking for iconic scenes, unforgettable moments, or just want to revisit the best parts of a movie, ClipCine has it all. Browse, search, and enjoy clips from a wide variety of genres and movies, all in one place. Stay up-to-date with the latest film highlights and relive the magic of cinema!",
    images: [
      {
        url: "https://clipcine.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "ClipCine - Movie Clips & Cinema Moments",
      },
    ],
  },
  twitter: {
    creator: "@jayeshjain",
    site: "https://clipcine.vercel.app",
    card: "summary_large_image",
    title: "ClipCine - Explore & Watch Movie Clips Anytime",
    description:
      "ClipCine is your go-to platform for discovering and watching movie clips from your favorite films. Whether you're looking for iconic scenes, unforgettable moments, or just want to revisit the best parts of a movie, ClipCine has it all. Browse, search, and enjoy clips from a wide variety of genres and movies, all in one place. Stay up-to-date with the latest film highlights and relive the magic of cinema!",
    images: [
      {
        url: "https://clipcine.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "ClipCine - Movie Clips & Cinema Moments",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-icon.png",
  },
} as Metadata;
