import React from 'react';

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-[85vh] bg-black relative overflow-hidden flex items-center justify-center group z-10">
      
      {/* Inset Shadow / "Card" Effect Overlays */}
      {/* Top Shadow - simulates the Hero section passing over */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/90 to-transparent z-40 pointer-events-none"></div>
      
      {/* Bottom Shadow - simulates the next section passing over */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none"></div>
      
      {/* Side Vignettes for depth */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none"></div>

      {/* Large Background Typography (Subtle Texture) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
         <h2 className="text-[15vw] font-display font-bold text-white opacity-[0.02] tracking-tighter leading-none transform scale-150">
           COLLECTIBLE
         </h2>
      </div>

      {/* Static Container */}
      <div className="relative w-full h-full">
        <img 
          src="https://creations.mattel.com/cdn/shop/files/paqnu1jylffwnkse9mk8_1600x1600.jpg" 
          alt="Ford GT Mk IV Diecast" 
          className="w-full h-full object-cover object-center relative z-20"
        />
        
        {/* Diecast Feature Hotspots */}
        
        {/* Hotspot 1: Rear/Engine */}
        <div className="absolute top-[40%] right-[20%] group/spot z-30">
          <div className="w-6 h-6 bg-cdf-red rounded-full animate-pulse opacity-50 absolute inset-0"></div>
          <div className="relative w-6 h-6 bg-cdf-red/20 rounded-full border border-cdf-red/80 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center backdrop-blur-md">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-x-4 group-hover/spot:translate-x-0 bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-sm text-right shadow-2xl pointer-events-none group-hover/spot:pointer-events-auto">
            <h4 className="text-white font-display font-bold text-sm mb-1 text-cdf-red">OPENING CLAMSHELL</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Features a fully removable rear body panel revealing the precision-molded EcoBoost V6 engine and complex exhaust piping.
            </p>
          </div>
        </div>
        
        {/* Hotspot 2: Cockpit */}
        <div className="absolute top-[45%] left-[45%] group/spot z-30">
          <div className="w-6 h-6 bg-cdf-blue rounded-full animate-pulse opacity-50 absolute inset-0"></div>
          <div className="relative w-6 h-6 bg-cdf-blue/20 rounded-full border border-cdf-blue/80 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center backdrop-blur-md">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
           {/* Tooltip */}
           <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-64 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-4 group-hover/spot:translate-y-0 bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-sm text-center shadow-2xl pointer-events-none group-hover/spot:pointer-events-auto">
            <h4 className="text-white font-display font-bold text-sm mb-1 text-cdf-blue">INTERIOR FIDELITY</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              1:18 scale dashboard accuracy with readable gauges, fabric seatbelts, and a textured Alcantara-finish steering wheel.
            </p>
          </div>
        </div>

        {/* Hotspot 3: Front/Wheels */}
        <div className="absolute bottom-[25%] left-[20%] group/spot z-30">
          <div className="w-6 h-6 bg-white rounded-full animate-pulse opacity-50 absolute inset-0"></div>
          <div className="relative w-6 h-6 bg-white/10 rounded-full border border-white/80 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center backdrop-blur-md">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
           {/* Tooltip */}
           <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 -translate-x-4 group-hover/spot:translate-x-0 bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-sm text-left shadow-2xl pointer-events-none group-hover/spot:pointer-events-auto">
            <h4 className="text-white font-display font-bold text-sm mb-1">ROLLING STOCK</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Real rubber slick tires mounted on aerodynamic turbofan wheels with visible brake caliper detail and functional steering.
            </p>
          </div>
        </div>

      </div>
      
      {/* Specs Overlay - Bottom Right - Floating above the bottom inset shadow */}
      <div className="absolute bottom-12 right-6 md:right-12 z-50 pointer-events-none">
        <div className="flex flex-col items-end gap-1">
           <div className="flex items-center gap-2 mb-2">
             <span className="w-1.5 h-1.5 bg-cdf-red rounded-full animate-pulse"></span>
             <p className="text-white/50 text-[10px] font-mono tracking-widest uppercase">ITEM # HGW-18-99</p>
           </div>
           <h3 className="text-white font-display font-bold text-3xl">MATTEL CREATIONS</h3>
           <p className="text-cdf-blue font-bold tracking-wider">EXCLUSIVE RELEASE</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeScene;