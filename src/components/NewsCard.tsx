import React from 'react';
import { Clock, Eye, BookOpen } from 'lucide-react';
import { NewsArticle } from '../types/news';
import { ImageWithFallback } from './ImageWithFallback';

interface NewsCardProps {
  article: NewsArticle;
  onReadMore: (article: NewsArticle) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, onReadMore }) => {
  return (
    <article 
      onClick={() => onReadMore(article)}
      className="group cursor-pointer flex flex-col bg-white dark:bg-[#111C38] rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden"
    >
      {/* 4:3 Rasm bloki */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <ImageWithFallback
          src={article.imageUrl}
          alt={article.title}
          fallbackCategory={article.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-sm bg-white/95 dark:bg-slate-900/90 text-[#0B3C5D] dark:text-sky-300 shadow-xs backdrop-blur-xs">
            {article.category}
          </span>
        </div>
      </div>

      {/* Kartochka kontenti */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metama'lumot: Vaqt va o'qish muddati */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.publishedAt}</span>
            </div>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Sarlavha (2 qatorli cheklov) */}
          <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-[#0B3C5D] dark:group-hover:text-sky-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* 2 qatorli tavsif */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
            {article.summary}
          </p>
        </div>

        {/* Kartochka furi: Muallif va ko'rishlar soni */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium truncate max-w-[150px]">{article.author}</span>
          <div className="flex items-center gap-1 shrink-0 font-mono tabular-nums">
            <Eye className="w-3.5 h-3.5" />
            <span>{article.views.toLocaleString('uz-UZ')}</span>
          </div>
        </div>

      </div>
    </article>
  );
};
