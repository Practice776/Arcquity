import React from 'react';
import {
  Home,
  Building,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  Plus,
  Search,
  Filter,
  MapPin,
  Users,
  Percent,
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/landlord' },
  { icon: Building, label: 'Properties', path: '/landlord/properties', active: true },
  { icon: CreditCard, label: 'Payments', path: '/landlord/payments' },
  { icon: MessageSquare, label: 'Tenant Requests', path: '/landlord/tenant-requests' },
  { icon: FileText, label: 'Documents', path: '/landlord/documents' },
  { icon: Settings, label: 'Settings', path: '/landlord/settings' },
];

const properties = [
  {
    id: 1,
    name: 'Sunnyvale Apartments',
    address: '456 Elm St, Sunnyvale, CA',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    units: 25,
    occupied: 20,
    revenue: '₹1,25,000',
    occupancyRate: '80%',
  },
  {
    id: 2,
    name: 'Green Valley Complex',
    address: '789 Oak Dr, Mountain View, CA',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    units: 15,
    occupied: 14,
    revenue: '₹95,000',
    occupancyRate: '93%',
  },
];

export function LandlordProperties() {
  return (
    <DashboardLayout title="Properties" navItems={navItems}>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full lg:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full lg:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <Button variant="outline" size="sm" className="w-full lg:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        <Button variant="primary" className="w-full lg:w-auto">
          <Plus className="w-5 h-5 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
              <img
                src={property.image}
                alt={property.name}
                className="w-full md:w-48 h-48 object-cover rounded-xl"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
                    <p className="text-gray-600 mt-1 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.address}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="w-full md:w-auto">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="w-full md:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">Total Units</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{property.units}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Occupied</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{property.occupied}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <span className="w-4 h-6 text-gray-600">₹</span>
                      <span className="text-sm">Monthly Revenue</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{property.revenue}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Percent className="w-4 h-4" />
                      <span className="text-sm">Occupancy Rate</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{property.occupancyRate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
