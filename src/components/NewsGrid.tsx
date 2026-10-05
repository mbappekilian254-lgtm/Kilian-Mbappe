import React from 'react';
import { Newspaper, RefreshCw, SearchX } from 'lucide-react';
import { NewsArticle, NewsCategory } from '../types/news';
import { NewsCard } from './NewsCard';

interface NewsGridProps {
  articles: NewsArticle[];
  selectedCategory: NewsCategory;
  searchQuery: string;
  hasMore: boolean;
  totalArticles: number;
  onLoadMore: () => void;
  onReadMore: (article: NewsArticle) => void;
  onResetFilters: () => void;
}

export const NewsGrid: React.FC<NewsGridProps> = ({
  articles,
  selectedCategory,
  searchQuery,
  hasMore,
  totalArticles,
  onLoadMore,
  onReadMore,
  onResetFilters
}) => {
  return (
    <section aria-label="So‘nggi yangiliklar ro‘yxati" className="space-y-6">
      
      {/* Bo'lim sarlavhasi va filtrlash ko'rsatkichi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>
              {searchQuery 
                ? `Qidiruv natijalari: "${searchQuery}"`
                : selectedCategory === 'Barchasi' 
                  ? 'So‘nggi yangiliklar' 
                  : `${selectedCategory} yangiliklari`}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Jami {totalArticles} ta material topildi
          </p>
        </div>

        {(searchQuery || selectedCategory !== 'Barchasi') && (
          <button
            onClick={onResetFilters}
            className="self-start sm:self-auto text-xs font-medium text-[#D62828] hover:underline cursor-pointer"
          >
            Filtrlarni bekor qilish
          </button>
        )}
      </div>

      {/* Agar natijalar bo'lmasa (Empty state) */}
      {articles.length === 0 ? (
        <div className="bg-white dark:bg-[#111C38] rounded-xl border border-slate-200/80 dark:border-slate-800/80 p-10 text-center space-y-4 my-6">
          <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <SearchX className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-editorial text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
              Hech qanday yangilik topilmadi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Qidiruv so‘zini o‘zgartirib ko‘ring yoki barcha kategoriyalar bo‘yicha yangiliklar ro‘yxatiga qayting.
            </p>
          </div>
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B3C5D] hover:bg-[#082b43] rounded-lg shadow-xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Barcha yangiliklarni ko‘rish</span>
          </button>
        </div>
      ) : (
        /* Yangiliklar kartochkalari tarmog'i */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {articles.map((article) => (
            <NewsCard 
              key={article.id} 
              article={article} 
              onReadMore={onReadMore} 
            />
          ))}
        </div>
      )}

      {/* "Ko‘proq yuklash" tugmasi */}
      {hasMore && (
        <div className="text-center pt-6 pb-2">
          <button
            onClick={onLoadMore}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B3C5D] dark:text-sky-300 bg-white dark:bg-[#111C38] border border-slate-300 dark:border-slate-700 hover:border-[#0B3C5D] dark:hover:border-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-lg shadow-xs transition-all duration-200 group"
          >
            <span>Ko‘proq yangiliklarni yuklash</span>
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      )}

    </section>
  );
};
