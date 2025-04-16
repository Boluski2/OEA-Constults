
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
  location: string;
  year: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, title, description, image, client, location, year, index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

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

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-md animate-on-scroll",
        "transform transition-all duration-500"
      )}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative overflow-hidden h-64">
        <div className={cn(
          "absolute inset-0 bg-gray-200", 
          imageLoaded ? "opacity-0" : "opacity-100"
        )}></div>
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oea-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-oea-black group-hover:text-oea-blue transition-colors duration-300">{title}</h3>
          <span className="text-sm font-semibold text-oea-blue bg-oea-blue/10 px-2 py-1 rounded">{year}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-oea-gray px-2 py-1 rounded-full text-gray-700">{client}</span>
          <span className="text-xs bg-oea-gray px-2 py-1 rounded-full text-gray-700">{location}</span>
        </div>
        
        <Link to={`/projects/${id}`} className="inline-flex items-center text-oea-blue font-medium">
          View Details <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
