
import React from 'react';
import Navigation from '@/components/Navigation';
import EMICalculator from '@/components/EMICalculator';
import Footer from '@/components/Footer';

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-50">
      <Navigation />
      <main className="pt-24">
        <div className="bg-gradient-to-r from-teal-100 via-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8 mb-8 shadow-md relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-scholarship-teal/10 blur-3xl"></div>
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full bg-scholarship-green/10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Scholarship <span className="highlight-heading">EMI Calculator</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Plan your education finances with our easy-to-use EMI calculator. Calculate monthly payments, total interest, and more.
            </p>
          </div>
        </div>
        <EMICalculator />
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
