import React from 'react';
import {
  Home,
  Building,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  Upload,
  Download,
  Eye,
  File,
  Search,
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/landlord' },
  { icon: Building, label: 'Properties', path: '/landlord/properties' },
  { icon: CreditCard, label: 'Payments', path: '/landlord/payments' },
  { icon: MessageSquare, label: 'Tenant Requests', path: '/landlord/tenant-requests' },
  { icon: FileText, label: 'Documents', path: '/landlord/documents', active: true },
  { icon: Settings, label: 'Settings', path: '/landlord/settings' },
];

const documents = [
  {
    id: 1,
    name: 'Lease Agreement - Unit 3B',
    type: 'PDF',
    size: '2.5 MB',
    uploadedAt: 'Mar 15, 2024',
    property: 'Sunnyvale Apartments',
    category: 'Lease Agreements',
  },
  {
    id: 2,
    name: 'Property Insurance Policy',
    type: 'PDF',
    size: '1.8 MB',
    uploadedAt: 'Mar 10, 2024',
    property: 'All Properties',
    category: 'Insurance',
  },
  {
    id: 3,
    name: 'Maintenance Contract',
    type: 'PDF',
    size: '3.2 MB',
    uploadedAt: 'Mar 5, 2024',
    property: 'Green Valley Complex',
    category: 'Contracts',
  },
];

export function LandlordDocuments() {
  return (
    <DashboardLayout title="Documents" navItems={navItems}>
      {/* Header Actions */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full lg:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full lg:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <select className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Properties</option>
            <option>Sunnyvale Apartments</option>
            <option>Green Valley Complex</option>
          </select>
          <select className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Categories</option>
            <option>Lease Agreements</option>
            <option>Insurance</option>
            <option>Contracts</option>
          </select>
        </div>
        <Button variant="primary" className="w-full lg:w-auto">
          <Upload className="w-5 h-5 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <File className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.property}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.uploadedAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="lg:hidden p-4 space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center mb-3">
                <File className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Property:</strong> {doc.property}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Category:</strong> {doc.category}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Type:</strong> {doc.type}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Size:</strong> {doc.size}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Uploaded:</strong> {doc.uploadedAt}
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
