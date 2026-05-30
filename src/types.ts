export interface Property {
  id: string;
  title: string;
  type: 'Food Factory' | 'Cold Storage' | 'Central Kitchen';
  transaction: 'For Sale' | 'For Lease';
  price: number; // For sorting and range
  priceFormatted: string;
  power: number; // e.g., 100, 150, 200, 400
  powerFormatted: string;
  ceiling?: string;
  loading?: string;
  temp?: string;
  region: string;
  sfaApproved: boolean;
  loadingBay: boolean;
  tags: string[];
  image: string;
  badge?: string; // e.g., "Sole Agent", "Off-Market", "For Sale", etc.
  specificationNotes?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  summary: string;
  category: 'Regulation Updates' | 'Market Trends' | 'Technical Specs' | 'Case Studies';
  tag: 'REGULATORY' | 'TRENDS' | 'TECHNICAL' | 'MARKET';
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content: string; // Detail reading support!
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
