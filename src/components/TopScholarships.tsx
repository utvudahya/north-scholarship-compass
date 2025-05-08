
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

const topScholarships = [
  {
    id: 1,
    title: "Rhodes Scholarship",
    amount: "Full tuition + stipend",
    organization: "Rhodes Trust",
    country: "US & Canada",
    description: "One of the oldest and most prestigious international scholarship programs, enabling outstanding students to study at the University of Oxford.",
  },
  {
    id: 2,
    title: "Schwarzman Scholars",
    amount: "Full tuition + expenses",
    organization: "Tsinghua University",
    country: "US & Canada",
    description: "A highly selective, one-year master's program at Tsinghua University in Beijing designed to prepare the next generation of global leaders.",
  },
  {
    id: 3,
    title: "Canada Excellence Research Chairs",
    amount: "CA$10 million",
    organization: "Government of Canada",
    country: "Canada",
    description: "Designed to attract world-renowned researchers to establish ambitious research programs at Canadian universities.",
  },
  {
    id: 4,
    title: "Fulbright Student Program",
    amount: "$20,000 - $45,000",
    organization: "U.S. Department of State",
    country: "US",
    description: "Prestigious international exchange program that provides opportunities for students to undertake international graduate study and research.",
  }
];

const TopScholarships = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          Top <span className="highlight-heading">Scholarships</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">{scholarship.title}</CardTitle>
                  <p className="text-sm text-gray-500">{scholarship.organization}</p>
                </div>
                <Badge>{scholarship.country}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4 text-scholarship-purple">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span className="font-semibold">{scholarship.amount}</span>
                </div>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopScholarships;
