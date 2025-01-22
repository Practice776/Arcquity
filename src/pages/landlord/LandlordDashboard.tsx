import React from 'react';
import {
  Home,
  Building,
  CreditCard,
  MessageSquare,
  FileText,
  Settings,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Users,
  DollarSign,
  Percent,
  TrendingUp
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { NotificationItem } from '../../components/NotificationItem';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/StatCard';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/landlord', active: true },
  { icon: Building, label: 'Properties', path: '/landlord/properties' },
  { icon: CreditCard, label: 'Payments', path: '/landlord/payments' },
  { icon: MessageSquare, label: 'Tenant Requests', path: '/landlord/tenant-requests' },
  { icon: FileText, label: 'Documents', path: '/landlord/documents' },
  { icon: Settings, label: 'Settings', path: '/landlord/settings' },
];

export function LandlordDashboard() {
  return (
    <DashboardLayout title="Landlord Portal" navItems={navItems}>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Building}
          label="Total Properties"
          value="8"
          trend="12.5"
        />
        <StatCard
          icon={Users}
          label="Active Tenants"
          value="25"
          trend="8.3"
        />
        <StatCard
          icon={DollarSign}
          label="Monthly Revenue"
          value="₹2,45,000"
          trend="15.4"
        />
        <StatCard
          icon={Percent}
          label="Occupancy Rate"
          value="92%"
          trend="5.2"
        />
      </div>

      {/* Property Overview */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8 hover:shadow-2xl transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Property Overview</h2>
          <Button variant="outline" size="sm">View All Properties</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-6">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Property"
              className="w-48 h-32 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sunnyvale Apartments</h3>
              <p className="text-gray-600 mt-1 text-sm">456 Elm St, Sunnyvale, CA</p>
              <div className="mt-4 flex items-center space-x-6">
                <span className="text-sm text-gray-600">Units: <strong>25</strong></span>
                <span className="text-sm text-gray-600">Occupied: <strong>20</strong></span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Property"
              className="w-48 h-32 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Green Valley Complex</h3>
              <p className="text-gray-600 mt-1 text-sm">789 Oak Dr, Mountain View, CA</p>
              <div className="mt-4 flex items-center space-x-6">
                <span className="text-sm text-gray-600">Units: <strong>15</strong></span>
                <span className="text-sm text-gray-600">Occupied: <strong>14</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 hover:bg-indigo-50 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <Building className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">View Properties</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>

        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 hover:bg-indigo-50 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">Manage Requests</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>

        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 hover:bg-indigo-50 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <CreditCard className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">Track Payments</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Revenue Overview</h2>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-green-500">+12.5% from last month</span>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Revenue chart will be displayed here
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-100">
          <NotificationItem
            icon={CheckCircle2}
            title="Rent received from Tenant: John Doe"
            time="1 day ago"
            type="success"
          />
          <NotificationItem
            icon={AlertCircle}
            title="Maintenance request submitted: Unit 3B"
            time="3 days ago"
            type="alert"
          />
          <NotificationItem
            icon={Clock}
            title="Lease renewal due for Tenant: Jane Smith"
            time="2 weeks ago"
            type="pending"
          />
        </div>
      </div>

      {/* Landlord Upgrade Section */}
      <div className="bg-indigo-50 rounded-xl shadow-md border border-indigo-200 p-8 mb-12">
        <header className="mb-6">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Landlord: Upgrade to Pro</h2>
          <p className="text-lg text-gray-700">
            Unlock advanced tools to enhance your property management experience as a landlord.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan (Landlord) */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Basic Plan</h3>
            <p className="text-lg text-gray-600 mb-4">Free forever</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Manage properties</li>
              <li>✔ Track payments</li>
              <li>✔ Handle tenant requests</li>
            </ul>
          </div>
          {/* Pro Plan (Landlord) */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pro Plan</h3>
            <p className="text-lg text-indigo-600 mb-4">₹999/month</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ AI-Powered Insights</li>
              <li>✔ Third-Party Integrations</li>
              <li>✔ Lease Agreement Management</li>
              <li>✔ Dynamic Pricing</li>
              <li>✔ Tenant Screening</li>
              <li>✔ Smart Notifications</li>
            </ul>
            <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>


    </DashboardLayout>
  );
}