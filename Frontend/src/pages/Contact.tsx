import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { companyInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    droneDetail: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const lagosCoordinates: [number, number] = [3.3792, 6.5244];
  const address = "1a Raji Oladimaji, Lagos, Nigeria";

  useEffect(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'subject' && value !== 'Drone Mapping' ? { droneDetail: '' } : {})
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate message length
    if (formData.message.length < 10) {
      toast({
        title: "Error",
        description: "Message must be at least 10 characters long.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://oeaserver.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          droneDetail: '',
          message: '',
        });
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        toast({
          title: "Error",
          description: data.message || "There was an error submitting your message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Get in touch with our team to discuss your geospatial needs and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-bold mb-6 text-oea-black">We're Here to Help</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to discuss a potential project? 
                Our team is ready to assist you. Reach out through any of the channels below, 
                or fill out the contact form, and we'll get back to you promptly.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-oea-blue/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-oea-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-oea-black">Our Office</h3>
                    <p className="text-gray-600">
                      {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].address},{' '}
                      {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].city},{' '}
                      {companyInfo.locations.filter(loc => loc.isHeadquarters)[0].country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-oea-blue/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-oea-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-oea-black">Email Us</h3>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-oea-blue hover:underline">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-oea-blue/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-oea-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-oea-black">Call Us</h3>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-oea-blue hover:underline">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-oea-gray p-6 rounded-xl animate-on-scroll">
                <h3 className="text-lg font-semibold mb-4 text-oea-black">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 shadow-lg animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-oea-black">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                      placeholder="Your email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quotation">Project Quotation</option>
                    <option value="Drone Mapping">Drone Mapping</option>
                    <option value="Surveying">Surveying</option>
                    <option value="GIS Analysis">GIS Analysis</option>
                    <option value="Urban Planning">Urban Planning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {formData.subject === 'Drone Mapping' && (
                  <div className="mb-6">
                    <label htmlFor="droneDetail" className="block text-sm font-medium text-gray-700 mb-1">
                      Drone Project Details *
                    </label>
                    <input
                      type="text"
                      id="droneDetail"
                      name="droneDetail"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                      placeholder="Enter project details (e.g., land size, project type)"
                      required
                      value={formData.droneDetail}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-oea-blue focus:border-oea-blue"
                    placeholder="Tell us about your project or inquiry"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`flex items-center justify-center w-full py-3 rounded-lg text-white font-medium transition-all
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : formSubmitted ? 'bg-green-600' : 'bg-oea-blue hover:bg-oea-darkBlue'}`}
                  disabled={isSubmitting || formSubmitted}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : formSubmitted ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 text-oea-black">Visit Our Offices</h2>
          </div>
          
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <Map address={address} coordinates={lagosCoordinates} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;