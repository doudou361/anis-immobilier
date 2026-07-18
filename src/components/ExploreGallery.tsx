import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import luxuryVilla from '../assets/images/luxury-villa.png';
import villaRow from '../assets/images/villa-row.png';
import buildingExterior from '../assets/images/building-exterior.png';
import officeInterior from '../assets/images/office-interior.png';

const ExploreGallery = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--color-bg-base)]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column - 45% */}
        <div className="flex flex-col w-full lg:w-[45%] gap-8 lg:gap-12">
          {/* Top Text Block */}
          <div className="flex flex-col items-start gap-6 pt-4">
            <span className="uppercase tracking-widest text-xs font-semibold text-[var(--color-text-primary)]">
              Categories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[var(--color-text-primary)] leading-tight font-['General_Sans'] tracking-tight">
              Explore best properties with expert services.
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] font-['Inter'] leading-relaxed max-w-md">
              Discover a wide range of premium properties tailored to your lifestyle. Our expert team is here to guide you every step of the way.
            </p>
            <button className="mt-4 flex items-center gap-3 bg-[var(--color-surface-dark)] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors duration-300">
              View properties
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Bottom Image */}
          <div className="relative rounded-[32px] overflow-hidden group h-[300px] lg:h-[400px] w-full">
            <img 
              src={luxuryVilla} 
              alt="Luxury villas" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white font-['General_Sans']">Luxury villas</h3>
            </div>
          </div>
        </div>

        {/* Right Column - 55% */}
        <div className="flex flex-col w-full lg:w-[55%] gap-8 lg:gap-12">
          {/* Top Image */}
          <div className="rounded-[32px] overflow-hidden h-[300px] lg:h-[400px] w-full">
            <img 
              src={villaRow} 
              alt="Property view" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Bottom Two Images */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 h-auto sm:h-[400px]">
            <div className="w-full sm:w-1/2 rounded-[32px] overflow-hidden">
              <img 
                src={buildingExterior} 
                alt="Building exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 aspect-[3/4] sm:aspect-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 rounded-[32px] overflow-hidden">
              <img 
                src={officeInterior} 
                alt="Office interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 aspect-[3/4] sm:aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreGallery;
