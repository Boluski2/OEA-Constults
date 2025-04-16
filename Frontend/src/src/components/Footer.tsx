
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-oea-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
 <Link to="/" className="flex items-center gap-2">
         <img 
          src="./Oea_logo.png" 
          alt="OEA Logo" 
          className="w-10 h-10 object-contain"
        />
          <span>
           OEA<span className="text-oea-blue">Consults</span>
          </span>
        </Link>
            <p className="text-gray-300 mb-6 pr-4">
            Enabling data-driven decision-making using geospatial tools and technology 
            for collecting, analyzing, and unlocking new insights for potential growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/${companyInfo.contact.social.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-oea-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={`https://linkedin.com/company/${companyInfo.contact.social.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-oea-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`https://instagram.com/${companyInfo.contact.social.instagram}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-oea-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-oea-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-oea-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-oea-blue transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-oea-blue transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-oea-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-oea-blue transition-colors">
                  Drone Mapping
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-oea-blue transition-colors">
                  Surveying
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-oea-blue transition-colors">
                  GIS Analysis
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-oea-blue transition-colors">
                  Urban Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].address},{' '}
                  {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].city},{' '}
                  {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].country}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-oea-blue flex-shrink-0" />
                <a href={`tel:${companyInfo.contact.phone}`} className="text-gray-300 hover:text-oea-blue transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-oea-blue flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-gray-300 hover:text-oea-blue transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} OEA Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
