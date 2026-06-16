// Shared types for all apps in the monorepo

export interface MetaDataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  locale?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  quote: string;
  rating?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link: string;
  github?: string;
  category: string;
  featured?: boolean;
  completionDate?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  coverImage: string;
  author: TeamMember;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  category: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: {
    label: string;
    href: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface DonationFormData {
  amount: number;
  frequency: "one-time" | "monthly" | "yearly";
  name: string;
  email: string;
  phone?: string;
  panNumber?: string;
  message?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  doctor?: string;
  date: string;
  time: string;
  reason: string;
}

export interface ProfileCard {
  id: string;
  name: string;
  age: number;
  occupation: string;
  education: string;
  location: string;
  religion: string;
  motherTongue: string;
  height: string;
  image: string;
  about: string;
  compatibility?: number;
  verified?: boolean;
  premium?: boolean;
}

export type Theme = "light" | "dark" | "system";

export type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideInBottom"
  | "slideInTop";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  registrationLink?: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  tests: string[];
  duration: string;
  recommendedFor: string[];
  image?: string;
}