import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-cdf-red rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="text-white font-display font-bold tracking-wider">CAROLINA DIECAST</span>
             </div>
             <p className="text-gray-500 text-sm max-w-sm">
               The premier destination for elite collectors. Specializing in rare, discontinued, and high-fidelity diecast models and figures.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm">CATEGORIES</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cdf-blue transition-colors">Exotic Cars</a></li>
              <li><a href="#" className="hover:text-cdf-blue transition-colors">Muscle Cars</a></li>
              <li><a href="#" className="hover:text-cdf-blue transition-colors">Movie Icons</a></li>
              <li><a href="#" className="hover:text-cdf-blue transition-colors">Action Figures</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm">CONNECT</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.ebay.com/str/carolinasdiecast" className="hover:text-cdf-red transition-colors">eBay Store</a></li>
              <li><a href="#" className="hover:text-cdf-red transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cdf-red transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Carolina Diecast & Figures. All rights reserved.</p>
          <p>Designed with Gemini & React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;