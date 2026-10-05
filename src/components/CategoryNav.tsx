import React from 'react';
import { NewsCategory } from '../types/news';

interface CategoryNavProps {
  categories: NewsCategory[];
  activeCategory: NewsCategory;
  onSelectCategory: (category: NewsCategory) => void;
  newsCountByCategory?: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  return (
    <nav 
      aria-label="Yangiliklar kategoriyalari"
      className="bg-white dark:bg-[#0B1325] border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none py-2.5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all duration-150 shrink-0 ${
                  isActive
                    ? 'bg-[#0B3C5D] text-white shadow-xs font-semibold dark:bg-sky-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
