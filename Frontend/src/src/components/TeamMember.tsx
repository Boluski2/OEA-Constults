import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  index: number;
  socialLinks?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  achievements?: string[];
  education?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  image, 
  expertise, 
  index, 
  socialLinks,
  achievements,
  education
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [cardRef.current]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl overflow-hidden animate-on-scroll",
        "transition-all duration-500 hover:shadow-xl",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={3/4} className="bg-gray-200">
          <div className={cn(
            "absolute inset-0 bg-gray-200", 
            imageLoaded ? "opacity-0" : "opacity-100"
          )}></div>
          <img
            src={image}
            alt={name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oea-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-oea-blue font-medium">{role}</p>
          </div>
          
          {socialLinks && (
            <div className="absolute top-4 right-4 flex space-x-2">
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-oea-blue/80 transition-colors">
                  <Mail size={16} className="text-white" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-oea-blue/80 transition-colors">
                  <Linkedin size={16} className="text-white" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-oea-blue/80 transition-colors">
                  <Twitter size={16} className="text-white" />
                </a>
              )}
              {socialLinks.website && (
                <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-oea-blue/80 transition-colors">
                  <ExternalLink size={16} className="text-white" />
                </a>
              )}
            </div>
          )}
        </AspectRatio>
      </div>
      
      <div className="p-6">
        <p className={cn(
          "text-gray-600 mb-4 transition-all duration-300 overflow-hidden",
          expanded ? "line-clamp-none" : "line-clamp-3"
        )}>
          {bio}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-oea-blue font-medium mb-4 focus:outline-none hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
        
        {education && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Education:</p>
            <p className="text-sm text-gray-600">{education}</p>
          </div>
        )}
        
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              {achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, idx) => (
              <span 
                key={idx} 
                className="text-xs bg-oea-blue/10 text-oea-blue px-3 py-1 rounded-full transition-all hover:bg-oea-blue hover:text-white cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
