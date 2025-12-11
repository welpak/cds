import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ThreeScene from './components/ThreeScene';
import Ghostbusters from './components/Ghostbusters';
import Articles from './components/Articles';
import Footer from './components/Footer';
import { generateSiteContent } from './services/geminiService';
import { Article } from './types';

const App: React.FC = () => {
  const [content, setContent] = useState<{ articles: Article[], heroBlurb: string }>({
    articles: [],
    heroBlurb: ''
  });

  useEffect(() => {
    const initContent = async () => {
      // Load initial content using Gemini Text Generation
      const data = await generateSiteContent();
      setContent(data);
    };
    initContent();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-cdf-red selection:text-white">
      <Navigation />
      
      <main>
        {/* Section 1: Hero Video Background */}
        <Hero heroBlurb={content.heroBlurb} />
        
        {/* Section 2: 3D Car Showcase */}
        <div className="relative z-20 -mt-20">
          <div className="max-w-7xl mx-auto px-6 mb-8 text-right">
             <h3 className="text-xl font-bold tracking-widest text-white">THE SHOWROOM</h3>
             <div className="h-1 w-24 bg-cdf-red ml-auto mt-2"></div>
          </div>
          <ThreeScene />
        </div>

        {/* Section 3: Ghostbusters Feature */}
        <Ghostbusters />

        {/* Section 4: AI Articles */}
        <Articles articles={content.articles} />
      </main>

      <Footer />
    </div>
  );
};

export default App;