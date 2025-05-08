
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
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <TopScholarships />
        <ScholarshipList />
        <CollegeList />
        <EMICalculator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
