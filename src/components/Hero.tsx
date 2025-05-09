
import React from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-violet-200 via-blue-100 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-scholarship-purple/10 blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-scholarship-teal/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 drop-shadow-sm">
              Find Your Perfect <span className="highlight-heading">Scholarship</span> and <span className="highlight-heading">College</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Discover thousands of scholarships and colleges in the US and Canada.
              Calculate your education costs and find financial aid opportunities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-scholarship-purple hover:bg-purple-700 transform transition-transform hover:translate-y-[-2px] hover:shadow-lg shadow-md">
                <Palette className="mr-2" />
                Find Scholarships
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-scholarship-purple text-scholarship-purple hover:bg-scholarship-purple/10 transform transition-transform hover:translate-y-[-2px] hover:shadow-lg shadow-md">
                Explore Colleges
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block z-10">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-scholarship-teal/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-12 -left-16 w-48 h-48 bg-scholarship-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Students graduating" 
              className="relative z-10 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
};

export default Hero;
