
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Amara Kessie",
    role: "Director of Urban Planning",
    company: "Lagos State Government",
    content: "OEA Consult's mapping services revolutionized our urban development planning. Their detailed spatial analysis helped us identify optimal locations for new infrastructure projects, resulting in more efficient resource allocation and better outcomes for our communities."
  },
  {
    id: 2,
    name: "Emmanuel Osei",
    role: "Chief Operations Officer",
    company: "West Africa Agricultural Corporation",
    content: "The precision of OEA's drone mapping has transformed how we monitor crop health and manage our agricultural lands. Their technology allowed us to identify irrigation issues that were previously invisible, increasing our yield by 28% in just one season."
  },
  {
    id: 3,
    name: "Fatima Diallo",
    role: "Project Manager",
    company: "Pan-African Development Fund",
    content: "Working with OEA Consult on our regional infrastructure assessment was seamless. Their team's expertise in GIS analysis provided invaluable insights that shaped our investment strategy across multiple countries. I highly recommend their services."
  },
  {
    id: 4,
    name: "Joseph Mensah",
    role: "Environmental Director",
    company: "Ghanaian Conservation Initiative",
    content: "The environmental impact assessment conducted by OEA Consult was comprehensive and delivered on time. Their spatial analysis helped us secure crucial funding by clearly demonstrating the ecological significance of our conservation areas."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-oea-black">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with OEA Consult.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border border-gray-200 h-full">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-oea-blue/30 mb-4" />
                      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-oea-blue/20 rounded-full flex items-center justify-center text-oea-blue font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-oea-black">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex items-center justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-oea-blue text-oea-blue" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-oea-blue text-oea-blue" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
