
import React from 'react';

interface HeroProps {
  onEmergencyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEmergencyClick }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30" 
          alt="Restoration background" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/30">
            <span className="flex h-2 w-2 rounded-full bg-red-600 emergency-pulse"></span>
            <span>24/7 Dispatch Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Restoring Homes. <br />
            <span className="text-red-600">Rebuilding Peace.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            Water, fire, or mold damage? Don't wait. We arrive in <span className="text-white font-bold underline decoration-red-600">60 minutes or less</span> to stop the damage and start the recovery.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onEmergencyClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-red-600/30 flex items-center justify-center space-x-3"
            >
              <span>EMERGENCY HELP NOW</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-5 rounded-xl font-bold text-lg transition-all border border-white/20"
            >
              Get Free Inspection
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-slate-400">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">4.9/5</span>
              <span className="text-[10px] uppercase tracking-wider font-bold">Google Reviews</span>
            </div>
            <div className="h-10 w-px bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">60min</span>
              <span className="text-[10px] uppercase tracking-wider font-bold">Avg Response</span>
            </div>
            <div className="h-10 w-px bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">100%</span>
              <span className="text-[10px] uppercase tracking-wider font-bold">Insurance Claims</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
