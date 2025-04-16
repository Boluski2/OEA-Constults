import React from 'react';
// import {useState, useEffect} from 'react';
// import { useLocation } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-oea-black text-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm text-oea-black'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
            <img
           src="/Oea_logo.png" 
            alt="OEA Logo"
          className="h-7 w-auto object-contain" 
            />
            <span className={cn(
              "text-xl font-bold flex items-center gap-1",
              scrolled ? "text-white" : "text-oea-black"
                )}>
              
               <span>OEA</span>
               <span className="text-oea-blue">Consults</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-all duration-300',
                  isActive(item.path)
                    ? 'text-oea-blue font-semibold'
                    : scrolled ? 'text-white hover:text-oea-blue' : 'text-oea-black hover:text-oea-blue'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/blog"
              className={cn(
                "ml-2 btn-primary",
                scrolled ? "bg-oea-blue text-white" : "bg-oea-blue text-white"
              )}
            >
              Blog
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                scrolled ? "text-white hover:text-oea-blue" : "text-oea-black hover:text-oea-blue"
              )}
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out transform',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                isActive(item.path)
                  ? 'text-white bg-oea-blue'
                  : 'text-oea-black hover:bg-oea-blue/10 hover:text-oea-blue'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/blog"
            className="block w-full text-center mt-4 btn-primary"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
