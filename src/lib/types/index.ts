// src/lib/types/index.ts
export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'weddings' | 'portraits' | 'lifestyle' | 'studio' | 'events';
  title?: string;
  description?: string;
  featured?: boolean;
}

export interface PortfolioCategory {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  count: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price?: string;
  features: string[];
  recommended?: boolean;
}

// Add this ContactFormData interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceType?: string;
  eventDate?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}