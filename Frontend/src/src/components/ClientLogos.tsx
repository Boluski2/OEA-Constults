
import React from 'react';

// Array of client logos
const logos = [
  "image/Laswa.png",
  "image/CSL.png",
  "image/AISL.png",
  "image/Badagry Sea port.png",
  "image/cityscape services.png",
  "image/dar.png",
  "image/Eko Electric.png",
  "image/Favicon_header-60x31.png",
  // "image/Google.png",
  "image/Kuvarick consult.jpg",
  "image/Lagos state government.png",
  "image/Lamata.png",
  "image/LASBCA.png",
  "image/NIS.png",
  "image/nitp.png",
  "image/NTDA.png",
  "image/Ogun state government.png",
  "image/Petrol agency.png",
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-gray-600 mb-8 animate-on-scroll">
          Trusted by Leading Organizations
        </h3>
        
        <div className="relative">
          {/* Single row of logos */}
          <div className="flex space-x-12 animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div key={`logo-${index}`} className="flex min-w-[150px] h-16 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
