import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { LeadArticle } from './components/LeadArticle';
import { NewsGrid } from './components/NewsGrid';
import { Sidebar } from './components/Sidebar';
import { ArticleDetail } from './components/ArticleDetail';
import { Footer } from './components/Footer';
import { newsService } from './services/newsService';
import { NewsArticle, NewsCategory } from './types/news';

const CATEGORIES: NewsCategory[] = [
  'Barchasi',
  'O‘zbekiston',
  'Dunyo',
  'Iqtisodiyot',
  'Sport',
  'Texnologiya',
  'Madaniyat',
  'Salomatlik'
];

export default function App() {
  // 1. Rejim holati (Dark/Light mode) - localStorage orqali saqlanadi
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('kun_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Rejim o'zgarganda html tegiga dark klassini qo'shish
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kun_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kun_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 2. Kategoriya, qidiruv va sahifalash holati
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('Barchasi');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pageSize = 6;

  // 3. Tanlangan batafsil maqola
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  // Ma'lumotlarni newsService orqali olish
  const leadArticle = newsService.getLeadArticle();
  const topArticles = newsService.getTopArticles(5);
  const currencies = newsService.getCurrencies();
  const weather = newsService.getWeather();

  // Kategoriya yoki qidiruv o'zgarganda sahifani 1 ga qaytarish
  const handleSelectCategory = (cat: NewsCategory) => {
    setSelectedCategory(cat);
    setActiveArticle(null);
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setActiveArticle(null);
    setPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory('Barchasi');
    setSearchQuery('');
    setActiveArticle(null);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenArticle = (article: NewsArticle) => {
    setActiveArticle(article);
  };

  const handleBackToHome = () => {
    setActiveArticle(null);
  };

  // Hozirgi filtrlar bo'yicha maqolalar ro'yxati
  const articlesResponse = newsService.getArticles({
    category: selectedCategory,
    searchQuery,
    page,
    pageSize
  });

  // O'xshash maqolalar (batafsil ko'rinishda)
  const relatedArticles = activeArticle 
    ? newsService.getRelatedArticles(activeArticle.id, activeArticle.category, 3)
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B1325] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. Header (Top bar + Brand + Search + Dark Mode + Telegram) */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        currencies={currencies}
        weather={weather}
        onLogoClick={handleResetFilters}
      />

      {/* 2. Kategoriya menyusi */}
      <CategoryNav
        categories={CATEGORIES}
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. Asosiy sahifa tanasi */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {activeArticle ? (
          /* Maqolani ochganda: To'liq batafsil sahifa */
          <ArticleDetail
            article={activeArticle}
            relatedArticles={relatedArticles}
            onBack={handleBackToHome}
            onSelectArticle={handleOpenArticle}
          />
        ) : (
          /* Bosh sahifa ko'rinishi */
          <div className="space-y-8">
            
            {/* Faqat Barchasi tanlanganida va qidiruv bo'lmaganda Bugungi asosiy yangilikni ko'rsatish */}
            {selectedCategory === 'Barchasi' && !searchQuery && (
              <LeadArticle
                article={leadArticle}
                onReadMore={handleOpenArticle}
              />
            )}

            {/* Asosiy 2 ustunli tuzilma (Chapda yangiliklar ro'yxati, O'ngda Top 5 va Vidjetlar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Chap ustun: So'nggi yangiliklar kartochkalari tarmog'i */}
              <div className="lg:col-span-8">
                <NewsGrid
                  articles={articlesResponse.articles}
                  selectedCategory={selectedCategory}
                  searchQuery={searchQuery}
                  hasMore={articlesResponse.hasMore}
                  totalArticles={articlesResponse.total}
                  onLoadMore={handleLoadMore}
                  onReadMore={handleOpenArticle}
                  onResetFilters={handleResetFilters}
                />
              </div>

              {/* O'ng ustun: Ko'p o'qilganlar TOP 5, Valyuta kalkulyatori, Ob-havo, Telegram */}
              <div className="lg:col-span-4 sticky top-24">
                <Sidebar
                  topArticles={topArticles}
                  currencies={currencies}
                  weather={weather}
                  onSelectArticle={handleOpenArticle}
                />
              </div>

            </div>

          </div>
        )}

      </main>

      {/* 4. Footer */}
      <Footer
        categories={CATEGORIES}
        onSelectCategory={handleSelectCategory}
      />

    </div>
  );
}
