
import React, { useState } from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Sample scholarship data
const scholarshipsData = [
  {
    id: 1,
    title: "Fulbright Foreign Student Program",
    amount: "$20,000 - $45,000",
    deadline: "May 15, 2025",
    organization: "U.S. Department of State",
    category: "Merit-Based",
    country: "US" as const,
    shortDescription: "Prestigious awards for non-U.S. citizens to study in United States universities."
  },
  {
    id: 2,
    title: "Gates Cambridge Scholarship",
    amount: "Full tuition + stipend",
    deadline: "Dec 3, 2025",
    organization: "Gates Foundation",
    category: "Merit-Based",
    country: "US" as const,
    shortDescription: "Full-cost scholarships for outstanding applicants from countries outside the UK to pursue a graduate degree."
  },
  {
    id: 3,
    title: "Vanier Canada Graduate Scholarships",
    amount: "$50,000 per year",
    deadline: "Nov 2, 2025",
    organization: "Government of Canada",
    category: "Research",
    country: "Canada" as const,
    shortDescription: "Helps doctoral students who demonstrate leadership skills and a high standard of scholarly achievement."
  },
  {
    id: 4,
    title: "Banting Postdoctoral Fellowship",
    amount: "$70,000 per year",
    deadline: "Sep 22, 2025",
    organization: "Government of Canada",
    category: "Research",
    country: "Canada" as const,
    shortDescription: "Prestigious fellowship designed to attract and retain top-tier postdoctoral talent."
  },
  {
    id: 5,
    title: "Hispanic Scholarship Fund",
    amount: "$500 - $5,000",
    deadline: "Feb 15, 2025",
    organization: "Hispanic Scholarship Fund",
    category: "Minority",
    country: "US" as const,
    shortDescription: "Empowers Latino families with the knowledge and resources to successfully complete higher education."
  },
  {
    id: 6,
    title: "Inuit Post-Secondary Education Strategy",
    amount: "Varies",
    deadline: "Ongoing",
    organization: "Inuit Tapiriit Kanatami",
    category: "Minority",
    country: "Canada" as const,
    shortDescription: "Support for Inuit students pursuing post-secondary education in Canada."
  },
  {
    id: 7,
    title: "Knight-Hennessy Scholars",
    amount: "Full tuition + stipend",
    deadline: "Oct 12, 2025",
    organization: "Stanford University",
    category: "Merit-Based",
    country: "US" as const,
    shortDescription: "Full funding to pursue any graduate degree at Stanford for students who demonstrate leadership and civic commitment."
  },
  {
    id: 8,
    title: "Loran Award",
    amount: "$100,000",
    deadline: "Oct 17, 2025",
    organization: "Loran Scholars Foundation",
    category: "Merit-Based",
    country: "Canada" as const,
    shortDescription: "Canada's largest undergraduate merit award for character, service, and leadership potential."
  }
];

const ScholarshipList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const filteredScholarships = scholarshipsData.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || scholarship.category === selectedCategory;
    const matchesCountry = selectedCountry === '' || scholarship.country === selectedCountry || scholarship.country === 'Both';
    
    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          Available <span className="highlight-heading">Scholarships</span>
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search scholarships..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Merit-Based">Merit-Based</SelectItem>
                <SelectItem value="Need-Based">Need-Based</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Minority">Minority</SelectItem>
                <SelectItem value="International">International</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Countries</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} {...scholarship} />
          ))}
        </div>
        
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No scholarships found matching your criteria.</p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-scholarship-purple text-scholarship-purple hover:bg-scholarship-purple/10">
            Load More Scholarships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipList;
