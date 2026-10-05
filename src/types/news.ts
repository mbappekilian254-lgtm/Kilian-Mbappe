export type NewsCategory = 
  | 'Barchasi'
  | 'O‘zbekiston'
  | 'Dunyo'
  | 'Iqtisodiyot'
  | 'Sport'
  | 'Texnologiya'
  | 'Madaniyat'
  | 'Salomatlik';

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
  keyPoints?: string[];
  category: Exclude<NewsCategory, 'Barchasi'>;
  imageUrl: string;
  imageCaption?: string;
  publishedAt: string;
  date: string;
  readTime: string;
  author: string;
  views: number;
  isLead?: boolean;
  isTop?: boolean;
  topRank?: number;
  tags: string[];
}

export interface CurrencyRate {
  code: 'USD' | 'EUR' | 'RUB';
  name: string;
  rate: number;
  diff: number;
  symbol: string;
}

export interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}
