
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ScholarshipList from '@/components/ScholarshipList';
import CollegeList from '@/components/CollegeList';
import TopScholarships from '@/components/TopScholarships';
import EMICalculator from '@/components/EMICalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-50">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        {/* SEO Heading Section */}
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="sr-only">Canada Scholarship and US Scholarship Search Portal - Find Scholarships for 2025</h1>
            <p className="text-center text-sm text-gray-600 mb-4">
              Find the best scholarships in Canada and USA for 2025. Your comprehensive resource for Canadian and US education funding opportunities.
            </p>
          </div>
        </section>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-100/30 to-transparent transform -skew-y-3 z-0"></div>
          <div className="relative z-10">
            <TopScholarships />
          </div>
        </div>
        <ScholarshipList />
        <div className="relative py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white transform skew-y-3 z-0"></div>
          <div className="relative z-10">
            <CollegeList />
          </div>
        </div>
        <EMICalculator />
        
        {/* Additional SEO Content Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              Find Scholarships in Canada and USA for 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-scholarship-blue">Canada Scholarships</h3>
                <p className="text-gray-700 mb-4">
                  Browse our comprehensive database of Canadian scholarships for undergraduate, graduate, and postgraduate students. 
                  Canada Scholar opportunities include merit-based awards, research grants, and financial aid for domestic and international students.
                </p>
                <p className="text-gray-700">
                  Our Canada Scholarship 2025 listings are updated regularly to ensure you have access to the latest funding opportunities across all Canadian provinces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-scholarship-purple">USA Scholarships</h3>
                <p className="text-gray-700 mb-4">
                  Discover thousands of scholarship USA opportunities for students at all academic levels. 
                  Our database includes merit scholarships, athletic scholarships, minority scholarships, and more across all 50 states.
                </p>
                <p className="text-gray-700">
                  Scholarship US listings for 2025 include opportunities from universities, foundations, corporations, and government agencies to help fund your American education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
