
import React from 'react';
import Navigation from '@/components/Navigation';
import CollegeList from '@/components/CollegeList';
import Footer from '@/components/Footer';

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
        <CollegeList />
      </main>
      <Footer />
    </div>
  );
};

export default CollegesPage;
