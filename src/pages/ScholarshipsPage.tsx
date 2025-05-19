
import React from 'react';
import Navigation from '@/components/Navigation';
import ScholarshipList from '@/components/ScholarshipList';
import Footer from '@/components/Footer';

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-50">
      <Navigation />
      <main className="pt-24">
        <div className="bg-gradient-to-r from-violet-200 via-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8 mb-8 shadow-md relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-scholarship-purple/10 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-scholarship-teal/10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Find Your Perfect <span className="highlight-heading">Scholarship</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Browse through thousands of scholarship opportunities for students in the US and Canada.
            </p>
          </div>
        </div>
        
        {/* SEO Content Section */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm mb-8 rounded-lg shadow-sm max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-scholarship-blue mb-4">Canada Scholarships 2025</h2>
              <p className="text-gray-700 mb-3">
                Our database offers the most comprehensive collection of Canadian scholarships available for the 2025 academic year. 
                Find funding opportunities from top Canadian universities, government programs, and private foundations.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Provincial scholarships across all Canadian territories</li>
                <li>Canada Scholar programs for international students</li>
                <li>Research grants and fellowships</li>
                <li>Industry-specific Canadian scholarships</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-scholarship-purple mb-4">USA Scholarships 2025</h2>
              <p className="text-gray-700 mb-3">
                Discover scholarship USA opportunities for undergraduate, graduate, and professional studies. 
                Our curated list includes merit-based awards, need-based financial aid, and specialized funding.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Scholarship US programs for international students</li>
                <li>University-specific merit scholarships</li>
                <li>State-based education funding</li>
                <li>Corporate and foundation scholarships across America</li>
              </ul>
            </div>
          </div>
        </section>
        
        <ScholarshipList />
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipsPage;
