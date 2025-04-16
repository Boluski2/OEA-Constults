import { ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-oea-black/70 z-1"></div>
        <video
        // src='Drone/Drone Catalog/dronevideo.webm'
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover hero-mask"
        >
          <source src="Drone/DroneCatalog/oea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content remains the same */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-white bg-oea-blue/80 backdrop-blur-sm rounded-full">
            GEOSPATIAL EXCELLENCE
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Transforming the way we study the environment,  <span className="text-oea-blue">one flight at a time!</span>
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-md">
          Enabling data-driven decision-making using geospatial tools and 
          technology for collecting, analyzing, and unlocking new insights for potential growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/projects" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-oea-black min-w-[180px]">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;