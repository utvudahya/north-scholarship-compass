
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { School, Search } from 'lucide-react';

// Sample college data
const collegesData = [
  {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    country: "US",
    tuitionFees: "$54,768",
    acceptanceRate: "4%",
    ranking: 1,
    programs: ["Business", "Law", "Medicine", "Computer Science"],
    image: "https://images.unsplash.com/photo-1583401551218-8c23b1ce98be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    name: "Stanford University",
    location: "Stanford, CA, USA",
    country: "US",
    tuitionFees: "$56,169",
    acceptanceRate: "4%",
    ranking: 2,
    programs: ["Engineering", "Business", "Computer Science", "Medicine"],
    image: "https://images.unsplash.com/photo-1604431696980-07e518825561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    name: "University of Toronto",
    location: "Toronto, ON, Canada",
    country: "Canada",
    tuitionFees: "CA$57,020",
    acceptanceRate: "43%",
    ranking: 18,
    programs: ["Arts & Science", "Engineering", "Medicine", "Business"],
    image: "https://images.unsplash.com/photo-1585316869557-a7b3e4a3b13c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 4,
    name: "McGill University",
    location: "Montreal, QC, Canada",
    country: "Canada",
    tuitionFees: "CA$46,802",
    acceptanceRate: "46%",
    ranking: 31,
    programs: ["Medicine", "Law", "Engineering", "Business"],
    image: "https://images.unsplash.com/photo-1610190154099-dca1a7d6e7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA, USA",
    country: "US",
    tuitionFees: "$55,510",
    acceptanceRate: "7%",
    ranking: 3,
    programs: ["Engineering", "Computer Science", "Physics", "Business"],
    image: "https://images.unsplash.com/photo-1542772144-515ddfae17e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    name: "University of British Columbia",
    location: "Vancouver, BC, Canada",
    country: "Canada",
    tuitionFees: "CA$43,886",
    acceptanceRate: "53%",
    ranking: 34,
    programs: ["Sciences", "Engineering", "Arts", "Business"],
    image: "https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 7,
    name: "Yale University",
    location: "New Haven, CT, USA",
    country: "US",
    tuitionFees: "$59,950",
    acceptanceRate: "6%",
    ranking: 8,
    programs: ["Law", "Medicine", "Arts", "Business"],
    image: "https://images.unsplash.com/photo-1582719732074-b127674df1a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 8,
    name: "University of Waterloo",
    location: "Waterloo, ON, Canada",
    country: "Canada",
    tuitionFees: "CA$40,100",
    acceptanceRate: "53%",
    ranking: 149,
    programs: ["Engineering", "Computer Science", "Mathematics", "Business"],
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  }
];

const CollegeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState('all');

  // Get unique programs from collegesData
  const allPrograms = Array.from(
    new Set(collegesData.flatMap(college => college.programs))
  ).sort();

  const filteredColleges = collegesData.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || college.country === selectedCountry;
    const matchesProgram = selectedProgram === 'all' || college.programs.includes(selectedProgram);
    
    return matchesSearch && matchesCountry && matchesProgram;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          Top <span className="highlight-heading">Colleges</span>
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search colleges..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
              <SelectTrigger>
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                {allPrograms.map((program) => (
                  <SelectItem key={program} value={program}>
                    {program}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={college.image} 
                  alt={college.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg font-semibold line-clamp-1">{college.name}</CardTitle>
                  <Badge variant={college.country === 'US' ? 'default' : 'secondary'}>
                    {college.country === 'US' ? 'US' : 'CA'}
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">{college.location}</div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Tuition</p>
                    <p className="font-medium">{college.tuitionFees}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Acceptance</p>
                    <p className="font-medium">{college.acceptanceRate}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {college.programs.slice(0, 3).map((program) => (
                    <Badge key={program} variant="outline" className="text-xs">
                      {program}
                    </Badge>
                  ))}
                  {college.programs.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{college.programs.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <School className="mr-2 h-4 w-4" /> View College
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No colleges found matching your criteria.</p>
          </div>
        )}
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-scholarship-purple text-scholarship-purple hover:bg-scholarship-purple/10">
            Load More Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollegeList;
