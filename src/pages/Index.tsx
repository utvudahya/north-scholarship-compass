
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
