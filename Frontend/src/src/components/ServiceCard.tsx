
import React, { useEffect, useRef } from 'react';
import { Map, Globe, BarChart2, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  id: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, id }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  const getIcon = () => {
    switch (icon) {
      case 'MapIcon':
        return <Map className="h-10 w-10 text-oea-blue" />;
      case 'GlobeIcon':
        return <Globe className="h-10 w-10 text-oea-blue" />;
      case 'BarChartIcon':
        return <BarChart2 className="h-10 w-10 text-oea-blue" />;
      case 'BuildingIcon':
        return <Building className="h-10 w-10 text-oea-blue" />;
      default:
        return <Map className="h-10 w-10 text-oea-blue" />;
    }
  };

  return (
    <Link to={`/projects?service=${id}`} className="block">
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col items-start animate-on-scroll",
        "transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-4 p-3 rounded-lg bg-oea-blue/10">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-3 text-oea-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    </Link>
  );
};

export default ServiceCard;
