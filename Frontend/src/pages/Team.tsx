import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import { teamMembers } from "@/lib/data";
import { Users, BookOpen, Award, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Team stats
  const teamStats = [
    { icon: <BookOpen className="h-8 w-8 text-oea-blue" />, value: 45, label: "Published Research", suffix: "+" },
    { icon: <Award className="h-8 w-8 text-oea-blue" />, value: 12, label: "Industry Awards", suffix: "" },
    { icon: <GraduationCap className="h-8 w-8 text-oea-blue" />, value: 8, label: "PhDs on Staff", suffix: "" },
    { icon: <Users className="h-8 w-8 text-oea-blue" />, value: 130, label: "Years Combined Experience", suffix: "+" }
  ];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Meet Our Experts</h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              The talent and passion behind OEA Consult's industry-leading geospatial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
          <div className="flex justify-center mb-6">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-oea-blue/10">
                <Users className="h-8 w-8 text-oea-blue" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-oea-black">Our Dedicated Professionals</h2>
            <p className="text-xl text-gray-600">
              Our multidisciplinary team brings together specialized expertise across geospatial 
              technologies, urban planning, and environmental sciences with a deep understanding 
              of African contexts.
            </p>
          </div>

          {/* Team Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {teamStats.map((stat, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow" ref={ref}>
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-oea-black mb-1">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                    ) : (
                      `${stat.value}${stat.suffix}`
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 bg-gradient-to-br from-oea-blue/5 to-oea-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-oea-black">Our Collaborative Approach</h2>
              <p className="text-lg text-gray-700 mb-4">
                At OEA Consult, we believe that the best solutions emerge when diverse perspectives 
                and expertise come together around complex challenges. Our team structure encourages 
                cross-disciplinary collaboration and knowledge sharing.
              </p>
              <p className="text-lg text-gray-700">
                Every project brings together specialists from different domains who work closely 
                with each other and our clients to deliver solutions that are technically excellent, 
                contextually appropriate, and designed for long-term impact.
              </p>
            </div>
            
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Team collaboration session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-oea-black/50 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-oea-black animate-on-scroll">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                expertise={member.expertise}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-oea-blue to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 text-white">
                <h2 className="text-3xl font-bold mb-6 animate-on-scroll">Join Our Team</h2>
                <p className="text-xl mb-6 animate-on-scroll">
                  We're always looking for talented individuals who are passionate about geospatial 
                  technology and committed to making a difference.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Work on meaningful projects with real-world impact",
                    "Collaborate with industry-leading experts",
                    "Access continuous learning and growth opportunities"
                  ].map((text, idx) => (
                    <div className="flex items-start" key={idx}>
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">→</span>
                      </div>
                      <p className="text-white/90">{text}</p>
                    </div>
                  ))}
                </div>
                <a 
                  href="mailto:careers@oeaconsult.com" 
                  className="inline-block px-8 py-4 bg-white text-oea-blue font-bold rounded-lg transition-all hover:bg-opacity-90 hover:shadow-lg animate-on-scroll"
                >
                  View Open Positions
                </a>
              </div>
              <div className="relative h-full min-h-[300px] hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Team brainstorming session" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;