import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Ghostbusters: React.FC = () => {
  return (
    <section id="ghostbusters" className="py-24 bg-black relative overflow-hidden">
      {/* Slime Graphic Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 space-y-8">
             <div className="inline-block px-3 py-1 border border-green-500/50 text-green-400 text-xs tracking-widest mb-4">
               FEATURED COLLECTION
             </div>
             <h2 className="text-5xl md:text-7xl font-display font-bold text-white">
               ECTO-1 <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">LEGACY</span>
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               The iconic 1959 Cadillac Miller-Meteor ambulance. We stock the highest quality diecast replicas from AutoArt, Hot Wheels Elite, and Blitzway. Featuring opening doors, detailed engine bays, and screen-accurate ghost-hunting equipment.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="glass-panel p-6 rounded-sm border-l-2 border-green-500">
                 <h4 className="text-2xl font-bold text-white">1:18</h4>
                 <p className="text-gray-400 text-sm">Museum Scale</p>
               </div>
               <div className="glass-panel p-6 rounded-sm border-l-2 border-green-500">
                 <h4 className="text-2xl font-bold text-white">Metal</h4>
                 <p className="text-gray-400 text-sm">Diecast Chassis</p>
               </div>
             </div>

             <a href="https://www.ebay.com/str/carolinasdiecast" target="_blank" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold hover:bg-green-400 transition-colors duration-300">
               SHOP GHOSTBUSTERS <ShoppingCart className="w-4 h-4"/>
             </a>
          </div>

          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-700"></div>
             <img 
               src="https://theclearancebin.weebly.com/uploads/1/2/3/0/1230872/9868099.jpg?568" 
               alt="Ghostbusters Ecto-1" 
               className="relative z-10 w-full object-cover rounded-lg shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur text-white px-4 py-2 border border-green-500/50">
               <span className="text-green-400 font-bold">$199.99</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ghostbusters;