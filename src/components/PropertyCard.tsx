import React from 'react';
import { MapPin, BedDouble, Bath, Maximize2 } from 'lucide-react';
import { Button } from './ui/Button';

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  onViewDetails?: () => void;
}

export function PropertyCard({
  image,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  onViewDetails
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{address}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            {price}<span className="text-sm text-gray-600">/month</span>
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="w-4 h-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
        <Button
          variant="primary"
          className="mt-4 w-full"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}