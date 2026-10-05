import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  User, 
  Share2, 
  Send, 
  Facebook, 
  Copy, 
  Check, 
  BookOpen, 
  Tag,
  ChevronRight
} from 'lucide-react';
import { NewsArticle } from '../types/news';
import { ImageWithFallback } from './ImageWithFallback';
import { NewsCard } from './NewsCard';

interface ArticleDetailProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
  onBack: () => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  relatedArticles,
  onBack,
  onSelectArticle
}) => {
  const [copied, setCopied] = useState(false);

  // Sahifa ochilganda yuqoriga aylantirish
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  // Ulashish amallari
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(`${article.title} - Kun yangiliklari`);
  const shareUrl = encodeURIComponent(window.location.href);

  const telegramShareUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  return (
    <article className="max-w-4xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      
      {/* 1. Breadcrumbs va Orqaga qaytish */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B3C5D] dark:text-sky-400 hover:underline cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Bosh sahifaga qaytish</span>
        </button>

        {/* Breadcrumb izi */}
        <nav aria-label="Non ushoqlari (Breadcrumb)" className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>Bosh sahifa</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span>{article.category}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[200px]">
            {article.title}
          </span>
        </nav>
      </div>

      {/* 2. Kategoriya belgisi */}
      <div className="mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#D62828] bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-sm">
          {article.category}
        </span>
      </div>

      {/* 3. Sarlavha (Editorial serif Playfair Display) */}
      <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight sm:leading-[1.2] mb-6">
        {article.title}
      </h1>

      {/* 4. Metama'lumotlar paneli */}
      <div className="flex flex-wrap items-center justify-between gap-y-3 py-3 border-y border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 mb-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-1 font-medium text-slate-800 dark:text-slate-200">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.author}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.publishedAt}, {article.date}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <div className="flex items-center gap-1 font-mono tabular-nums">
            <Eye className="w-3.5 h-3.5" />
            <span>{article.views.toLocaleString('uz-UZ')} marta o‘qildi</span>
          </div>
        </div>

        {/* Tezkor ulashish ikonkalari */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">Ulashish:</span>
          <a
            href={telegramShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 hover:bg-sky-100 transition-colors"
            title="Telegramda ulashish"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors"
            title="Facebookda ulashish"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors relative"
            title="Havolani nusxalash"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 5. Katta asosiy rasm va izohi */}
      <figure className="mb-8">
        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-800">
          <ImageWithFallback
            src={article.imageUrl}
            alt={article.title}
            fallbackCategory={article.category}
            className="w-full h-full object-cover"
          />
        </div>
        {article.imageCaption && (
          <figcaption className="text-xs font-serif italic text-slate-500 dark:text-slate-400 mt-2 text-center">
            {article.imageCaption}
          </figcaption>
        )}
      </figure>

      {/* 6. Asosiy maqola matni (Editorial reading column) */}
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed space-y-6">
        
        {/* Qisqacha kirish qismi (Lid) */}
        <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed border-l-4 border-[#0B3C5D] dark:border-sky-500 pl-4 py-1">
          {article.summary}
        </p>

        {/* Paragraflar */}
        {article.content.map((paragraph, idx) => (
          <p 
            key={idx} 
            className={idx === 0 ? "first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0B3C5D] dark:first-letter:text-sky-400" : ""}
          >
            {paragraph}
          </p>
        ))}

        {/* Tahririy iqtibos (Pull quote) agar mavjud bo'lsa */}
        {article.quote && (
          <blockquote className="my-8 p-6 bg-slate-50 dark:bg-slate-900/60 border-l-4 border-[#D62828] rounded-r-lg">
            <p className="font-editorial italic text-xl sm:text-2xl text-slate-800 dark:text-slate-100 leading-snug mb-3">
              "{article.quote.text}"
            </p>
            <footer className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              — {article.quote.author}
            </footer>
          </blockquote>
        )}

        {/* Asosiy faktlar ro'yxati agar mavjud bo'lsa */}
        {article.keyPoints && article.keyPoints.length > 0 && (
          <div className="my-8 p-5 bg-sky-50/70 dark:bg-slate-900/80 border border-sky-100 dark:border-slate-800 rounded-xl">
            <h4 className="font-bold text-sm uppercase tracking-wider text-[#0B3C5D] dark:text-sky-300 mb-3">
              Asosiy fakt va raqamlar:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
              {article.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* 7. Teglar (Unboxed clean tags) */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mr-2">
            <Tag className="w-3.5 h-3.5" />
            <span>Mavzuga oid teglar:</span>
          </div>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* 8. Ulashish va Muvaffaqiyat xabari */}
      <div className="mt-8 p-6 bg-slate-50 dark:bg-[#111C38] rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-4">
        <h3 className="font-editorial text-lg font-bold text-slate-900 dark:text-white">
          Ushbu yangilikni do‘stlaringiz bilan ulashing
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={telegramShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Telegramda ulashish</span>
          </a>
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Facebook className="w-4 h-4" />
            <span>Facebook</span>
          </a>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold rounded-lg shadow-xs hover:bg-slate-100 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Havola nusxalandi!" : "Havolani nusxalash"}</span>
          </button>
        </div>
        {copied && (
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in">
            Havola xotiraga nusxalandi. Istalgan messenjerda jo‘natishingiz mumkin!
          </p>
        )}
      </div>

      {/* 9. "O‘xshash yangiliklar" bloki */}
      {relatedArticles.length > 0 && (
        <section className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h2 className="font-editorial text-2xl font-bold text-slate-900 dark:text-white mb-6">
            O‘xshash yangiliklar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <NewsCard 
                key={rel.id} 
                article={rel} 
                onReadMore={onSelectArticle} 
              />
            ))}
          </div>
        </section>
      )}

      {/* Pastki Orqaga qaytish */}
      <div className="mt-10 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B3C5D] hover:bg-[#082b43] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Barcha yangiliklarga qaytish</span>
        </button>
      </div>

    </article>
  );
};
