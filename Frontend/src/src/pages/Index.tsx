
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services, projects } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ClientLogos from '@/components/ClientLogos';
import SEO from '@/components/SEO';


// Define the FAQ item type
interface FAQItem {
  question: string;
  answer: string;
}
const Index = () => {

  // FAQ items
  const faqItems: FAQItem[] = [
    {
      question: "What areas of West Africa do you operate in?",
      answer: "We currently operate in five West African countries: Nigeria, Ghana, Côte d'Ivoire, Senegal, and Benin Republic. Our headquarters is in Lagos, Nigeria, with satellite offices in Abuja, Accra, and other major cities."
    },
    {
      question: "What types of projects do you typically handle?",
      answer: "We specialize in urban planning, infrastructure development, environmental assessments, agricultural mapping, and land surveying projects. Our expertise spans both public sector initiatives and private commercial developments."
    },
    {
      question: "How accurate are your drone mapping services?",
      answer: "Our drone mapping services provide accuracy levels of up to 2-5cm, depending on flight altitude and environmental conditions. We use state-of-the-art equipment and post-processing techniques to ensure the highest possible accuracy for all our clients' needs."
    },
    {
      question: "Do you provide training for client organizations?",
      answer: "Yes, we offer comprehensive training programs for organizations looking to build internal capacity in GIS, drone operations, and spatial data management. These programs can be customized to meet your specific organizational needs and technical capabilities."
    },
    {
      question: "What makes OEA Consult different from other geospatial firms?",
      answer: "Our deep understanding of the West African context, combined with our cutting-edge technical expertise and commitment to sustainability, sets us apart. We don't just provide data—we offer actionable insights that drive meaningful impact for our clients and communities."
    }
  ];





  useEffect(() => {
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

    // Target all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
    <SEO 
        title="OEA Consults | Geospatial Solutions & Mapping Services"
        description="OEA Consult provides comprehensive geospatial solutions including drone mapping, GIS analysis, and remote sensing throughout Africa and Beyond."
        keywords="geospatial, drone mapping, GIS analysis, remote sensing, Africa, surveying, mapping services, GIS Company in Nigeria"
        canonicalUrl="/"
      />

      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services" className="section-padding bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              We provide comprehensive geospatial solutions to meet the diverse needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
                id={service.id}
              />
            ))}
          </div>
          
          {/* Read More Button */}
          <div className="mt-12 text-center animate-on-scroll">
            <Link to="/services/drone" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-oea-blue hover:bg-oea-blue/90 transition-all duration-300">
             Explore our Drone Libery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


       {/* Client Logos Section */}
       <ClientLogos />

      {/* About Preview Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="animate-on-scroll">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
                  ABOUT OEA CONSULT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-oea-black">Transforming Landscapes Through Innovation</h2>
                <p className="text-gray-600 mb-6">
                Incorporated in Nigeria in 2018, OEA Consults Limited (Observatory Earth Analytics) 
                was founded to address the data gap in solving development and environmental issues. 
                The co-founders recognized the need for actionable and replicable data in planning, environment, 
                and development circles, driven by their interest in data-driven decision-making. 
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Expert team with diverse geospatial skills</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Advanced drone technology and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Comprehensive GIS solutions and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">state-of-the-art geospatial analysis, satellite imagery, GIS mapping and 3D visualization</span>
                  </li>
                </ul>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                 src="/Drone/DroneCatalog/Mavic 3 Enterprise.png"
                  alt="Drone mapping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

             {/* Testimonials Section */}
      <Testimonials />

      {/* Featured Projects Section */}
      <section className="section-padding bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <div className="mb-6 md:mb-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full animate-on-scroll">
                FEATURED PROJECTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-oea-black animate-on-scroll">Our Recent Work</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center text-oea-blue font-medium animate-on-scroll">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
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
        </div>
      </section>


      {/* FAQ Section */}
 <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl font-bold mb-4 text-oea-black">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are answers to some common questions about our services and approach.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-oea-black font-medium">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Spatial Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to bring precision, insight, and innovation to your next project.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};


export default Index;
