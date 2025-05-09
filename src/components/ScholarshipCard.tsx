
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
      'Merit-Based': 'bg-gradient-to-r from-scholarship-purple to-purple-400 text-white shadow-md shadow-purple-200/50',
      'Need-Based': 'bg-gradient-to-r from-scholarship-blue to-blue-400 text-white shadow-md shadow-blue-200/50',
      'Research': 'bg-gradient-to-r from-scholarship-teal to-teal-400 text-white shadow-md shadow-teal-200/50',
      'Sports': 'bg-gradient-to-r from-scholarship-green to-green-400 text-white shadow-md shadow-green-200/50',
      'Arts': 'bg-gradient-to-r from-scholarship-orange to-orange-400 text-white shadow-md shadow-orange-200/50',
      'Minority': 'bg-gradient-to-r from-scholarship-yellow to-yellow-300 text-black shadow-md shadow-yellow-200/50',
      'International': 'bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md shadow-gray-200/50'
    };
    
    return categories[cat] || 'bg-gray-500 text-white';
  };

  return (
    <div className="scholarship-card bg-gradient-to-br from-white via-white to-gray-50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg border-t-4 border-t-scholarship-purple/50">
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
          <Badge variant="outline" className="shadow-sm border-2">{country}</Badge>
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-scholarship-purple to-purple-500 shadow-md hover:shadow-lg transition-shadow">View Details</Button>
    </div>
  );
};

export default ScholarshipCard;
