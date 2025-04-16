
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';
import { ArrowLeft, Calendar, MapPin, Building } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectId = Number(id);
  
  // Find the project with the matching ID
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for animation
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
  }, []);

  // If project not found, show error or redirect
  if (!project) {
    // Log error for debugging
    console.error(`404 Error: User attempted to access non-existent route: /projects/${id}`);
    
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 pb-16 bg-oea-gray flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="text-3xl font-bold text-oea-black mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <button 
              onClick={() => navigate('/projects')}
              className="btn-primary"
            >
              Back to Projects
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Create a more detailed description for the project detail page
  const fullDescription = `${project.description} Our team utilized advanced drone technology and GIS analysis to deliver high-precision spatial data for this project. The work included comprehensive mapping, data processing, and detailed analysis to provide actionable insights for the client.`;

  return (
    <>
      <Navbar />
      
      {/* Project Hero Section */}
      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-40">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-oea-black/80 to-oea-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center text-white mb-8 hover:text-oea-blue transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">{project.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Building className="h-5 w-5 mr-2 text-oea-blue" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <MapPin className="h-5 w-5 mr-2 text-oea-blue" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Calendar className="h-5 w-5 mr-2 text-oea-blue" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-8 animate-on-scroll">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="prose max-w-none animate-on-scroll">
                <h2 className="text-2xl font-bold mb-4 text-oea-black">Project Overview</h2>
                <p className="text-gray-700 mb-6">{fullDescription}</p>
                
                <h3 className="text-xl font-bold mb-3 text-oea-black">Objectives</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Capture high-resolution aerial imagery of the entire project area</li>
                  <li>Create precise digital elevation models for terrain analysis</li>
                  <li>Develop comprehensive GIS datasets for spatial analysis</li>
                  <li>Provide actionable insights and recommendations based on the collected data</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-oea-black">Methodology</h3>
                <p className="text-gray-700 mb-6">
                  Our team deployed advanced drone technology equipped with high-resolution cameras and LiDAR sensors to capture detailed spatial data. The collected data was processed using specialized photogrammetry software to create accurate 3D models and orthomosaics. Our GIS specialists then analyzed the processed data to extract valuable insights and create comprehensive reports for the client.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-oea-black">Results</h3>
                <p className="text-gray-700">
                  The project was successfully completed within the scheduled timeframe, delivering all required deliverables to the client's satisfaction. The high-quality spatial data and analysis provided valuable insights that informed the client's decision-making process, resulting in significant cost savings and improved efficiency in their operations.
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-oea-gray rounded-xl p-6 sticky top-24 animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-oea-black">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">CLIENT</h4>
                    <p className="text-oea-black">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h4>
                    <p className="text-oea-black">{project.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">COMPLETION DATE</h4>
                    <p className="text-oea-black">{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">PROJECT TYPE</h4>
                    <p className="text-oea-black">Drone Mapping & GIS Analysis</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-oea-blue/10 text-oea-blue text-xs px-2 py-1 rounded-full">Drone Mapping</span>
                      <span className="bg-oea-blue/10 text-oea-blue text-xs px-2 py-1 rounded-full">GIS Analysis</span>
                      <span className="bg-oea-blue/10 text-oea-blue text-xs px-2 py-1 rounded-full">LiDAR</span>
                      <span className="bg-oea-blue/10 text-oea-blue text-xs px-2 py-1 rounded-full">Remote Sensing</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">RELATED PROJECTS</h4>
                  
                  <div className="space-y-4">
                    {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
                      <div key={relatedProject.id} className="group">
                        <a 
                          href={`/projects/${relatedProject.id}`}
                          className="flex items-start hover:text-oea-blue transition-colors"
                        >
                          <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden mr-3">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h5 className="font-medium text-oea-black group-hover:text-oea-blue transition-colors">{relatedProject.title}</h5>
                            <p className="text-sm text-gray-500">{relatedProject.location}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-oea-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-oea-black animate-on-scroll">Interested in a Similar Project?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto animate-on-scroll">
            Let's discuss how OEA Consult can help with your geospatial needs, from drone mapping to GIS analysis.
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-block animate-on-scroll"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;
