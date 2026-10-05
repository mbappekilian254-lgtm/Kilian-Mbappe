import React from 'react';
import { Clock, Eye, ArrowRight, User } from 'lucide-react';
import { NewsArticle } from '../types/news';
import { ImageWithFallback } from './ImageWithFallback';

interface LeadArticleProps {
  article: NewsArticle;
  onReadMore: (article: NewsArticle) => void;
}

export const LeadArticle: React.FC<LeadArticleProps> = ({ article, onReadMore }) => {
  return (
    <section aria-label="Bugungi asosiy yangilik" className="mb-10">
      <div 
        onClick={() => onReadMore(article)}
        className="group cursor-pointer bg-white dark:bg-[#111C38] rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Katta rasm qismi (16:9 yoki moslashuvchan) */}
          <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
            <ImageWithFallback
              src={article.imageUrl}
              alt={article.title}
              fallbackCategory={article.category}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Rasm ustidagi nozik qoraytirish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            
            {/* Mobil ekranlarda rasm ustida ko'rinuvchi kategoriya belgisi */}
            <div className="absolute top-4 left-4 lg:hidden">
              <span className="bg-[#D62828] text-white text-xs font-semibold px-2.5 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>

          {/* Matn va tahririy ma'lumotlar */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Kategoriya va Asosiy belgi (Zero-pill text styling) */}
              <div className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="text-[#D62828] font-bold">
                  Bosh mavzu
                </span>
                <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {article.category}
                </span>
              </div>

              {/* Sarlavha (Playfair Display serif) */}
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[28px] xl:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-[#0B3C5D] dark:group-hover:text-sky-400 transition-colors">
                {article.title}
              </h2>

              {/* Qisqacha tavsif */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 sm:line-clamp-4">
                {article.summary}
              </p>
            </div>

            {/* Metama'lumotlar va Tugma */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center justify-between gap-y-3">
                {/* Vaqt, o'qish vaqti, muallif */}
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.publishedAt}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true" className="hidden sm:inline">·</span>
                  <div className="hidden sm:flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="tabular-nums font-mono">{article.views.toLocaleString('uz-UZ')}</span>
                  </div>
                </div>

                {/* To'liq o'qish havolasi */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3C5D] dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                  <span>To‘liq o‘qish</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
