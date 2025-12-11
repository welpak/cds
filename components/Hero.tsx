import React, { useState } from 'react';
import { generateVeoVideo } from '../services/geminiService';
import { Play, Sparkles, Zap, Shield, Cpu } from 'lucide-react';

interface HeroProps {
  heroBlurb: string;
}

const Hero: React.FC<HeroProps> = ({ heroBlurb }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleGenerateVideo = async () => {
    setLoading(true);
    setStatus("Initiating launch sequence...");
    try {
      const url = await generateVeoVideo((msg) => setStatus(msg));
      setVideoUrl(url);
    } catch (err) {
      setStatus("Launch aborted. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614728853913-1e23869f635c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center animate-pan">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
            {/* Red accent glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cdf-red/20 blur-[150px] rounded-full mix-blend-screen"></div>
            {/* Blue accent glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cdf-blue/10 blur-[150px] rounded-full mix-blend-screen"></div>
          </div>
        )}
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0"></div>

      {/* HUD Elements */}
      <div className="absolute top-24 right-6 md:right-12 hidden md:flex flex-col items-end gap-2 text-[10px] font-mono text-cdf-blue/70 z-10 select-none">
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           <span>SYS.STATUS: ONLINE</span>
        </div>
        <div>COORDS: 35.7796° N, 78.6382° W</div>
        <div>VISUAL: 4K_HDR_ENHANCED</div>
        <div className="w-32 h-[1px] bg-cdf-blue/30 mt-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 w-full pt-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          {/* Main Text Area */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cdf-red/50 rounded-full bg-cdf-red/10 backdrop-blur-md mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-red-200 tracking-widest uppercase">New Arrivals In Stock</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tighter">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cdf-red via-red-500 to-orange-500 animate-gradient-x">ADRENALINE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-xl leading-relaxed border-l-2 border-cdf-blue pl-6 bg-gradient-to-r from-cdf-blue/10 to-transparent py-2">
              {heroBlurb || "The galaxy's premier destination for high-end diecast models and exclusive figures. Curated for the obsessed."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#models"
                className="group relative px-8 py-4 bg-cdf-red overflow-hidden clip-path-slant"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative text-white font-bold tracking-widest text-sm flex items-center justify-center gap-2">
                  EXPLORE INVENTORY <Zap className="w-4 h-4" />
                </span>
              </a>
              
              <button 
                onClick={handleGenerateVideo}
                disabled={loading || !!videoUrl}
                className={`px-8 py-4 border border-white/30 text-white font-bold tracking-widest text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cdf-blue rounded-full animate-ping"></span>
                    {status}
                  </span>
                ) : videoUrl ? (
                   <span className="flex items-center gap-2 text-green-400">
                      <Play className="w-4 h-4" /> REPLAY SIMULATION
                   </span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cdf-blue" /> GENERATE VEO VIDEO
                  </>
                )}
              </button>
            </div>
            
            {!videoUrl && !loading && (
               <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest opacity-60">
                 * AI Simulation Powered by Veo 3.1
               </p>
            )}
          </div>

          {/* Glass Feature Card - Right Side */}
          <div className="hidden md:block w-72 glass-panel p-6 rounded-sm border-t-2 border-cdf-blue transform translate-y-8 animate-fade-in-up delay-300 hover:translate-y-6 transition-transform duration-500">
            <h3 className="text-white font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-cdf-blue" />
              QUALITY ASSURED
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-cdf-red">
                  <span className="font-bold text-xs">1:18</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Resin & Diecast</p>
                  <p className="text-gray-500 text-[10px]">Premium Materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-cdf-blue">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Authentic Detail</p>
                  <p className="text-gray-500 text-[10px]">Laser Scanned</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-[10px] text-gray-400 leading-tight">
                Official distributor for AutoArt, Minichamps, and Hot Toys.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] text-gray-500 animate-pulse">INITIATE</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cdf-red via-cdf-blue to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;