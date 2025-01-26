import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, BedDouble, Bath, Maximize2, SlidersHorizontal, X } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/ui/Button';

// Sample property data with more detailed location info
const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Luxury Downtown Apartment",
    address: "123 Main St, San Francisco, CA",
    city: "San Francisco",
    state: "CA",
    price: "₹22,500",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Apartment",
    furnished: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Modern Suburban Home",
    address: "456 Park Ave, Los Angeles, CA",
    city: "Los Angeles",
    state: "CA",
    price: "₹32,200",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    type: "House",
    furnished: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Cozy Studio Loft",
    address: "789 Broadway, New York, NY",
    city: "New York",
    state: "NY",
    price: "₹9,800",
    beds: 1,
    baths: 1,
    sqft: 750,
    type: "Studio",
    furnished: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Waterfront Penthouse",
    address: "321 Lake View, Chicago, IL",
    city: "Chicago",
    state: "IL",
    price: "₹45,000",
    beds: 4,
    baths: 3,
    sqft: 2200,
    type: "Penthouse",
    furnished: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Garden Villa",
    address: "567 Green St, Miami, FL",
    city: "Miami",
    state: "FL",
    price: "₹28,500",
    beds: 3,
    baths: 2,
    sqft: 1600,
    type: "Villa",
    furnished: true,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Contemporary Townhouse",
    address: "890 Modern Ave, Seattle, WA",
    city: "Seattle",
    state: "WA",
    price: "₹18,900",
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    type: "Townhouse",
    furnished: false,
  }
];

// Extract unique cities and states
const cities = [...new Set(properties.map(p => p.city))].sort();
const states = [...new Set(properties.map(p => p.state))].sort();

export function PropertiesPage() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    beds: 'any',
    baths: 'any',
    propertyType: 'any',
    furnished: 'any',
    city: 'any',
    state: 'any'
  });

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase());

      const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
      const matchesPrice = 
        propertyPrice >= filters.priceRange[0] &&
        propertyPrice <= filters.priceRange[1];

      const matchesBeds = 
        filters.beds === 'any' || property.beds === parseInt(filters.beds);

      const matchesBaths = 
        filters.baths === 'any' || property.baths === parseInt(filters.baths);

      const matchesType = 
        filters.propertyType === 'any' || property.type === filters.propertyType;

      const matchesFurnished = 
        filters.furnished === 'any' || 
        (filters.furnished === 'yes' ? property.furnished : !property.furnished);

      const matchesCity =
        filters.city === 'any' || property.city === filters.city;

      const matchesState =
        filters.state === 'any' || property.state === filters.state;

      return matchesSearch && matchesPrice && matchesBeds && matchesBaths && 
             matchesType && matchesFurnished && matchesCity && matchesState;
    });
  }, [searchTerm, filters]);

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 50000],
      beds: 'any',
      baths: 'any',
      propertyType: 'any',
      furnished: 'any',
      city: 'any',
      state: 'any'
    });
    setSearchTerm('');
  };

const handleGoBack = () => {
  navigate(-1); // Redirect to the home page
};
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img src="/images/icon-logo.png" alt="Arcquity Logo" className="w-30 h-20" />
              <span className="text-xl font-bold text-gray-900">Arcquity</span>
            </div>
          </div>
        </div>
      </nav>
      {/* Back Button */}
      <div className="fixed top-3 right-4 z-50">
        <button
          onClick={handleGoBack}
          className="bg-indigo-600 bg-opacity-80 text-white w-14 h-14 rounded-full shadow-xl hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center text-2xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 sm:w-12 sm:h-12 sm:text-xl"
        >
          ←
        </button>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-indigo-50 border-b border-indigo-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type, price range, or amenities"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-indigo-200 border border-indigo-300 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                {/* Location Filters */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filters.city}
                    onChange={(e) => setFilters({...filters, city: e.target.value})}
                  >
                    <option value="any">Any City</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filters.state}
                    onChange={(e) => setFilters({...filters, state: e.target.value})}
                  >
                    <option value="any">Any State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
                    onChange={(e) => {
                      const [min, max] = e.target.value.split('-');
                      setFilters({...filters, priceRange: [parseInt(min), parseInt(max)]});
                    }}
                  >
                    <option value="0-50000">Any Price</option>
                    <option value="0-10000">Under ₹10,000</option>
                    <option value="10000-20000">₹10,000 - ₹20,000</option>
                    <option value="20000-30000">₹20,000 - ₹30,000</option>
                    <option value="30000-50000">Above ₹30,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filters.beds}
                    onChange={(e) => setFilters({...filters, beds: e.target.value})}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bathrooms
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filters.baths}
                    onChange={(e) => setFilters({...filters, baths: e.target.value})}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                  </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amenities
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={filters.furnished}
                        onChange={(e) => setFilters({ ...filters, furnished: e.target.value })}
                    >
                        <option value="any">Any Amenities</option>
                        <option value="yes">Furnished</option>
                        <option value="no">Unfurnished</option>
                    </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={filters.propertyType}
                    onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                  >
                    <option value="any">Any</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Studio">Studio</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
 
                <div className="flex items-end">
                    <Button 
                        variant="outline" 
                        className="w-full text-grey-400 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-grey-800"
                        onClick={resetFilters}
                    >
                    <X className="w-4 h-4 mr-2 text-grey-400" />
                        Clear Filters
                    </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {filteredProperties.length} Properties Available
          </h1>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                address={property.address}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                onViewDetails={() => navigate(`/property/${property.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No properties found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
