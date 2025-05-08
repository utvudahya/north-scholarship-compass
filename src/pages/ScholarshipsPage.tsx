
import React from 'react';
import Navigation from '@/components/Navigation';
import ScholarshipList from '@/components/ScholarshipList';
import Footer from '@/components/Footer';

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="bg-gradient-to-r from-violet-100 via-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Find Your Perfect <span className="highlight-heading">Scholarship</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through thousands of scholarship opportunities for students in the US and Canada.
            </p>
          </div>
        </div>
        <ScholarshipList />
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipsPage;
