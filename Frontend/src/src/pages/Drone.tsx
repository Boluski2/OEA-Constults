
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Drone = () => {
  return (
    <>
      <Navbar />
      <div className="bg-oea-gray py-24  md:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-oea-black">Drone Mapping Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-precision aerial mapping using advanced drone technology to capture detailed topographic data for various applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-oea-black">Advanced Drone Technology</h2>
              <p className="text-gray-600 mb-6">
                Our fleet of professional-grade drones is equipped with high-resolution cameras, LiDAR scanners, and multispectral sensors to capture precise data for various mapping needs. We utilize the latest drone technology to ensure the highest quality data collection for your projects.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-oea-blue flex items-center justify-center text-white font-semibold">
                    1
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-oea-black">High-Resolution Imagery</h3>
                    <p className="mt-1 text-gray-600">Capture aerial photos with up to 0.5cm/pixel resolution for detailed site analysis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-oea-blue flex items-center justify-center text-white font-semibold">
                    2
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-oea-black">3D Modeling & LiDAR</h3>
                    <p className="mt-1 text-gray-600">Create accurate 3D terrain models and point clouds with our specialized LiDAR-equipped drones.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-oea-blue flex items-center justify-center text-white font-semibold">
                    3
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-oea-black">Multispectral Analysis</h3>
                    <p className="mt-1 text-gray-600">Conduct vegetation health assessment, water quality monitoring, and other specialized analyses.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/Drone/DroneCatalog/M30 side.png"
                  alt="Drone mapping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
            <div className="order-2 lg:order-1 relative animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/Drone/DroneCatalog/M30.png"
                  alt="Drone surveying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-oea-black">Applications & Use Cases</h2>
              <p className="text-gray-600 mb-6">
                Our drone mapping services are utilized across various industries and applications. From urban planning to agriculture, our solutions provide valuable insights for your projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                  <span className="ml-2 text-gray-700">Urban development monitoring and planning</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                  <span className="ml-2 text-gray-700">Agricultural land analysis and crop health assessment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                  <span className="ml-2 text-gray-700">Construction progress monitoring and site analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                  <span className="ml-2 text-gray-700">Environmental monitoring and conservation projects</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                  <span className="ml-2 text-gray-700">Infrastructure inspection and assessment</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your drone mapping project requirements and how we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Drone;
