
import React from 'react';

interface InsuranceSectionProps {
  onEmergencyClick: () => void;
}

const InsuranceSection: React.FC<InsuranceSectionProps> = ({ onEmergencyClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

          <div className="relative flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Don't Stress Over The Claims. <br />
                <span className="text-red-600 italic">We Handle Everything.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Dealing with damage is hard enough. Our expert claim specialists work directly with your insurance adjuster to ensure you get every penny of your coverage.
              </p>
              
              <ul className="space-y-4">
                {['Direct Billing to All Major Insurance', 'Zero Upfront Costs for Covered Loss', 'Expert Documentation & Photo Logs', 'Licensed Adjuster Assistance'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                 <button 
                  onClick={onEmergencyClick}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center space-x-2"
                >
                  <span>Start My Claim Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center space-y-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/State_Farm_logo.svg" className="h-12 brightness-0 invert opacity-50" alt="State Farm" />
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center space-y-4">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Allstate_logo.svg/1200px-Allstate_logo.svg.png" className="h-10 brightness-0 invert opacity-50" alt="Allstate" />
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center space-y-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Liberty_Mutual_logo.svg/2560px-Liberty_Mutual_logo.svg.png" className="h-12 brightness-0 invert opacity-50" alt="Liberty Mutual" />
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center space-y-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Geico_logo.svg/2560px-Geico_logo.svg.png" className="h-12 brightness-0 invert opacity-50" alt="Geico" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
