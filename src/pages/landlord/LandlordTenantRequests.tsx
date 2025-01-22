import React from 'react';
import {
  Home,
  Building,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/landlord' },
  { icon: Building, label: 'Properties', path: '/landlord/properties' },
  { icon: CreditCard, label: 'Payments', path: '/landlord/payments' },
  { icon: MessageSquare, label: 'Tenant Requests', path: '/landlord/tenant-requests', active: true },
  { icon: FileText, label: 'Documents', path: '/landlord/documents' },
  { icon: Settings, label: 'Settings', path: '/landlord/settings' },
];

const requests = [
  {
    id: 1,
    tenant: 'John Doe',
    property: 'Sunnyvale Apartments',
    unit: '3B',
    type: 'Maintenance',
    issue: 'Leaking faucet in bathroom',
    priority: 'High',
    status: 'Open',
    submittedAt: 'Mar 15, 2024',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    tenant: 'Jane Smith',
    property: 'Green Valley Complex',
    unit: '2A',
    type: 'Repair',
    issue: 'AC not cooling properly',
    priority: 'Medium',
    status: 'In Progress',
    submittedAt: 'Mar 14, 2024',
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    tenant: 'Mike Johnson',
    property: 'Sunnyvale Apartments',
    unit: '4C',
    type: 'General',
    issue: 'Noise complaint from neighbors',
    priority: 'Low',
    status: 'Resolved',
    submittedAt: 'Mar 10, 2024',
    lastUpdated: '5 days ago'
  },
];

export function LandlordTenantRequests() {
  return (
    <DashboardLayout title="Tenant Requests" navItems={navItems}>
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Properties</option>
            <option>Sunnyvale Apartments</option>
            <option>Green Valley Complex</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{request.issue}</h3>
                    <p className="text-gray-600 mt-1">
                      {request.property} - Unit {request.unit}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Submitted by: {request.tenant}</span>
                  <span>•</span>
                  <span>Type: {request.type}</span>
                  <span>•</span>
                  <span>Last updated: {request.lastUpdated}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.priority === 'High'
                    ? 'bg-red-100 text-red-800'
                    : request.priority === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {request.priority}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.status === 'Open'
                    ? 'bg-blue-100 text-blue-800'
                    : request.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {request.status}
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {request.status !== 'Resolved' && (
                  <>
                    <Button variant="primary" size="sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark as Resolved
                    </Button>
                    <Button variant="outline" size="sm">
                      <Clock className="w-4 h-4 mr-2" />
                      Update Status
                    </Button>
                  </>
                )}
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}