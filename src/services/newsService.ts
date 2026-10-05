import { CURRENCY_RATES, INITIAL_NEWS, TASHKENT_WEATHER } from '../data/newsData';
import { CurrencyRate, NewsArticle, NewsCategory, WeatherData } from '../types/news';

export interface GetArticlesParams {
  category?: NewsCategory;
  searchQuery?: string;
  page?: number;
  pageSize?: number;
}

export interface ArticlesResponse {
  articles: NewsArticle[];
  total: number;
  hasMore: boolean;
  page: number;
}

/**
 * Yangiliklar xizmati (News Service)
 * Kelajakda tashqi REST API yoki backend bilan almashtirish uchun modulli tuzilma
 */
export const newsService = {
  /**
   * Maqolalarni filtrlash, qidirish va sahifalab olish
   */
  getArticles(params: GetArticlesParams = {}): ArticlesResponse {
    const { category = 'Barchasi', searchQuery = '', page = 1, pageSize = 6 } = params;

    let filtered = [...INITIAL_NEWS];

    // Kategoriya bo'yicha filtrlash
    if (category && category !== 'Barchasi') {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Qidiruv so'zi bo'yicha filtrlash (sarlavha, qisqacha tavsif yoki teglar bo'yicha)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    const startIndex = 0;
    const endIndex = page * pageSize;
    const paginatedArticles = filtered.slice(startIndex, endIndex);

    return {
      articles: paginatedArticles,
      total: filtered.length,
      hasMore: endIndex < filtered.length,
      page
    };
  },

  /**
   * Asosiy bosh yangilikni olish (Lead story)
   */
  getLeadArticle(): NewsArticle {
    return INITIAL_NEWS.find((item) => item.isLead) || INITIAL_NEWS[0];
  },

  /**
   * Ko'p o'qilgan TOP 5 yangiliklarni olish
   */
  getTopArticles(limit = 5): NewsArticle[] {
    return [...INITIAL_NEWS]
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  },

  /**
   * Muayyan ID bo'yicha yangilikni olish
   */
  getArticleById(id: string): NewsArticle | undefined {
    return INITIAL_NEWS.find((item) => item.id === id);
  },

  /**
   * O'xshash yangiliklarni olish (bir xil kategoriya bo'yicha, o'zidan tashqari)
   */
  getRelatedArticles(currentId: string, category: string, limit = 3): NewsArticle[] {
    return INITIAL_NEWS
      .filter((item) => item.id !== currentId && item.category === category)
      .slice(0, limit);
  },

  /**
   * Valyuta kurslarini olish
   */
  getCurrencies(): CurrencyRate[] {
    return CURRENCY_RATES;
  },

  /**
   * Toshkent ob-havo ma'lumotlarini olish
   */
  getWeather(): WeatherData {
    return TASHKENT_WEATHER;
  }
};
