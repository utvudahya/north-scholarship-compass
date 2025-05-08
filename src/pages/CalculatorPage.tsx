
import React from 'react';
import Navigation from '@/components/Navigation';
import EMICalculator from '@/components/EMICalculator';
import Footer from '@/components/Footer';

const CalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="bg-gradient-to-r from-violet-100 via-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Scholarship <span className="highlight-heading">EMI Calculator</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
