
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign } from 'lucide-react';

interface ScholarshipProps {
  id: number;
  title: string;
  amount: string;
  deadline: string;
  organization: string;
  category: string;
  country: 'US' | 'Canada' | 'Both';
  shortDescription: string;
}

const ScholarshipCard: React.FC<ScholarshipProps> = ({
  title,
  amount,
  deadline,
  organization,
  category,
  country,
  shortDescription
}) => {
  const getCategoryColor = (cat: string) => {
    const categories: Record<string, string> = {
      'Merit-Based': 'bg-scholarship-purple text-white',
      'Need-Based': 'bg-scholarship-blue text-white',
      'Research': 'bg-scholarship-teal text-white',
      'Sports': 'bg-scholarship-green text-white',
      'Arts': 'bg-scholarship-orange text-white',
      'Minority': 'bg-scholarship-yellow text-black',
      'International': 'bg-gray-700 text-white'
    };
    
    return categories[cat] || 'bg-gray-500 text-white';
  };

  return (
    <div className="scholarship-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
        <Badge className={getCategoryColor(category)}>{category}</Badge>
      </div>
      <div className="text-sm text-gray-500 mb-2">{organization}</div>
      <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center text-scholarship-purple">
          <DollarSign size={18} className="mr-1" />
          <span className="text-sm font-medium">{amount}</span>
        </div>
        <div className="flex items-center text-scholarship-teal">
          <Calendar size={18} className="mr-1" />
          <span className="text-sm font-medium">Deadline: {deadline}</span>
        </div>
        <div className="ml-auto">
          <Badge variant="outline">{country}</Badge>
        </div>
      </div>
      <Button className="w-full">View Details</Button>
    </div>
  );
};

export default ScholarshipCard;
