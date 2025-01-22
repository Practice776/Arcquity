import React from 'react';
import {
  Home,
  Building,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  Download,
  Filter,
  ChevronDown,
  DollarSign,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/StatCard';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/landlord' },
  { icon: Building, label: 'Properties', path: '/landlord/properties' },
  { icon: CreditCard, label: 'Payments', path: '/landlord/payments', active: true },
  { icon: MessageSquare, label: 'Tenant Requests', path: '/landlord/tenant-requests' },
  { icon: FileText, label: 'Documents', path: '/landlord/documents' },
  { icon: Settings, label: 'Settings', path: '/landlord/settings' },
];

const payments = [
  {
    id: 1,
    tenant: 'John Doe',
    property: 'Sunnyvale Apartments',
    unit: '3B',
    amount: '₹25,000',
    status: 'Paid',
    date: 'Mar 1, 2024',
    paymentMethod: 'Credit Card'
  },
  {
    id: 2,
    tenant: 'Jane Smith',
    property: 'Green Valley Complex',
    unit: '2A',
    amount: '₹18,000',
    status: 'Pending',
    date: 'Mar 5, 2024',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 3,
    tenant: 'Mike Johnson',
    property: 'Sunnyvale Apartments',
    unit: '4C',
    amount: '₹22,000',
    status: 'Overdue',
    date: 'Feb 28, 2024',
    paymentMethod: 'UPI'
  },
];

export function LandlordPayments() {
  return (
    <DashboardLayout title="Payments" navItems={navItems}>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value="₹2,45,000"
          trend="15.4"
        />
        <StatCard
          icon={TrendingUp}
          label="Collection Rate"
          value="95%"
          trend="2.1"
        />
        <StatCard
          icon={Calendar}
          label="Due This Month"
          value="₹1,85,000"
        />
      </div>

      {/* Filters and Actions */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Properties</option>
            <option>Sunnyvale Apartments</option>
            <option>Green Valley Complex</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tenant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property / Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.tenant}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.property}</div>
                    <div className="text-sm text-gray-500">Unit {payment.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : payment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}