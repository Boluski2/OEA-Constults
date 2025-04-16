
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects, services } from '@/lib/data';
import { Search, Filter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Get service parameter from URL
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam) {
      setSelectedService(parseInt(serviceParam));
    }
  }, [location]);

  useEffect(() => {
    // Filter projects based on search term and selected service
    let results = projects;
    
    if (selectedService) {
      results = results.filter(project => project.serviceId === selectedService);
    }
    
    if (searchTerm) {
      results = results.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProjects(results);
  }, [searchTerm, selectedService]);

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [filteredProjects]);

  // Reset filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedService(null);
    // Remove service parameter from URL
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Projects</h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Explore our portfolio of geospatial projects, showcasing innovation and precision across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6 animate-fade-in">
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue shadow-sm"
                  placeholder="Search projects by name, client, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Service Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {selectedService && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-oea-blue text-white rounded-full hover:bg-oea-blue/90 transition-colors"
                >
                  <Filter size={16} /> Clear Filters
                </button>
              )}
              
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedService === service.id 
                      ? 'bg-oea-blue text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Category Header (if filtered) */}
          {selectedService && (
            <div className="mb-8 text-center animate-fade-in">
              <h2 className="text-2xl font-bold text-oea-blue">
                {services.find(s => s.id === selectedService)?.title} Projects
              </h2>
              <p className="text-gray-600 mt-2">
                Exploring our specialized work in {services.find(s => s.id === selectedService)?.title.toLowerCase()}
              </p>
            </div>
          )}
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  client={project.client}
                  location={project.location}
                  year={project.year}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-xl text-gray-600">No projects found matching your search criteria.</p>
              <button 
                className="mt-4 text-oea-blue font-medium"
                onClick={clearFilters}
              >
                Clear search and show all projects
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;