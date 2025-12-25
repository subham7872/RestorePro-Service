
import React from 'react';

const SERVICES = [
  {
    title: "Water Damage Restoration",
    desc: "Rapid structural drying, water extraction, and flood cleanup to prevent rot.",
    icon: "💧",
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fire & Smoke Damage",
    desc: "Complete soot removal, deodorization, and structural repair after fire loss.",
    icon: "🔥",
    img: "https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mold Remediation",
    desc: "Professional mold testing, containment, and removal using eco-safe methods.",
    icon: "🍄",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Storm & Flood Recovery",
    desc: "Emergency boarding, tarping, and cleanup after severe weather events.",
    icon: "🌪️",
    img: "https://images.unsplash.com/photo-1511252810826-a6e60c047cc0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sewage Cleanup",
    desc: "Safe, hygienic decontamination and sanitation for hazardous waste backups.",
    icon: "☣️",
    img: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Structural Drying",
    desc: "Advanced industrial air movers and dehumidifiers to save your property.",
    icon: "🌬️",
    img: "https://images.unsplash.com/photo-1531315630201-bb15b9766a9d?auto=format&fit=crop&q=80&w=800"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Our Expertise</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">Complete Restoration Solutions</p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="text-red-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
