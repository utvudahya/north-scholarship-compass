
import React from 'react';
import Navigation from '@/components/Navigation';
import CollegeList from '@/components/CollegeList';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

const CollegesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-50">
      <Navigation />
      <main className="pt-24">
        <div className="bg-gradient-to-r from-blue-200 via-indigo-100 to-white py-12 px-4 sm:px-6 lg:px-8 mb-8 shadow-md relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-scholarship-blue/10 blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-scholarship-purple/10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Explore Top <span className="highlight-heading">Colleges</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the best colleges and universities in the US and Canada to pursue your education.
            </p>
          </div>
        </div>
        
        {/* Top Ad Placement */}
        <div className="max-w-7xl mx-auto px-4">
          <AdPlaceholder format="horizontal" className="my-6" />
        </div>
        
        {/* SEO Content Section */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm mb-8 rounded-lg shadow-sm max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-scholarship-blue mb-4">Canadian Universities & Colleges</h2>
              <p className="text-gray-700 mb-3">
                Explore top-ranked Canadian educational institutions offering scholarships and financial aid for 2025. 
                Our database includes comprehensive information on admission requirements, available Canada scholarship programs, and campus facilities.
              </p>
              <p className="text-gray-700">
                Whether you're looking for undergraduate or graduate opportunities, our Canada Scholar resource helps you find the perfect educational match with the best funding options.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-scholarship-purple mb-4">US Universities & Colleges</h2>
              <p className="text-gray-700 mb-3">
                Discover America's leading universities and colleges along with their scholarship USA programs for domestic and international students. 
                Each institution profile includes information on available scholarship US opportunities, application deadlines, and eligibility requirements.
              </p>
              <p className="text-gray-700">
                Find the perfect educational institution that aligns with your academic goals and offers financial support through our comprehensive database.
              </p>
            </div>
          </div>
        </section>
        
        <CollegeList />
        
        {/* Bottom Ad Placement */}
        <div className="max-w-7xl mx-auto px-4">
          <AdPlaceholder format="rectangle" className="my-8" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollegesPage;
