import React from 'react';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

interface ArticlesProps {
  articles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="py-24 bg-cdf-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">INTELLIGENCE</h2>
            <p className="text-gray-400">Latest market trends and collector insights.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-cdf-red hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
            View Archive <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 rounded-sm relative">
                <div className="absolute inset-0 bg-cdf-red/0 group-hover:bg-cdf-red/10 transition-colors z-10"></div>
                <img 
                  src={`https://picsum.photos/600/400?random=${idx}`} 
                  alt={article.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-xs text-cdf-blue font-mono">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span>MARKET WATCH</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cdf-red transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;