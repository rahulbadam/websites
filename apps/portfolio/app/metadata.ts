import { Metadata } from "next";

export const siteConfig = {
  name: "Rahul Badam",
  title: "Rahul Badam | Full-Stack Engineer & Creative Developer",
  description:
    "Rahul Badam is a principal software engineer specializing in building premium, world-class web applications. Expert in React, Next.js, TypeScript, and modern frontend architecture.",
  url: "https://rahulbadam.dev",
  ogImage: "https://rahulbadam.dev/og.jpg",
  twitterHandle: "@rahulbadam",
  links: {
    github: "https://github.com/rahulbadam",
    linkedin: "https://linkedin.com/in/rahulbadam",
    twitter: "https://twitter.com/rahulbadam",
    email: "hello@rahulbadam.dev",
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Rahul Badam",
    "Full Stack Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "Software Engineer",
    "UI/UX Developer",
  ],
  authors: [{ name: "Rahul Badam" }],
  creator: "Rahul Badam",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};