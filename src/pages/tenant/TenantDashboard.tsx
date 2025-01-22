import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, CreditCard, History, MessageSquare, FileText, Settings, ArrowRight, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { NotificationItem } from '../../components/NotificationItem';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant', active:true},
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history' },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support' },
  { icon: FileText, label: 'Documents', path: '/tenant/documents' },
  { icon: Settings, label: 'Settings', path: '/tenant/settings' },
];

export function TenantDashboard() {
  const location = useLocation();

  const updatedNavItems = navItems.map(item => ({
    ...item,
    active: location.pathname === item.path,
  }));

  return (
    <DashboardLayout title="Tenant Portal" navItems={updatedNavItems}>
      {/* Property Overview */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8 hover:shadow-2xl transition-all">
        <div className="flex items-start space-x-6">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Property"
            className="w-48 h-32 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Luxury Downtown Apartment</h2>
            <p className="text-gray-600 mt-1">123 Main St, San Francisco, CA</p>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm text-gray-600">Lease ends in: <strong>8 months</strong></span>
              <span className="text-sm text-gray-600">Monthly rent: <strong>₹22,500</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <CreditCard className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">Pay Rent</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>

        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">Submit Request</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>

        <Button
          variant="outline"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-indigo-600 transition-colors group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="font-medium text-gray-900">View Documents</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
        </Button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-100">
          <NotificationItem
            icon={CheckCircle2}
            title="Rent payment successful for March 2024"
            time="2 days ago"
            type="success"
          />
          <NotificationItem
            icon={AlertCircle}
            title="Maintenance request submitted: Bathroom faucet"
            time="1 week ago"
            type="alert"
          />
          <NotificationItem
            icon={Clock}
            title="Upcoming rent payment reminder"
            time="2 hours ago"
            type="pending"
          />
        </div>
      </div>

      {/* Tenant Upgrade Section */}
      <div className="bg-indigo-50 rounded-xl shadow-md border border-indigo-200 p-8 mb-12">
        <header className="mb-6">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">Tenant: Upgrade to Pro</h2>
          <p className="text-lg text-gray-700">
            Unlock advanced features to enhance your living experience with our Pro Plan for tenants.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan (Tenant) */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Basic Plan</h3>
            <p className="text-lg text-gray-600 mb-4">Free forever</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ View available properties</li>
              <li>✔ Submit rental applications</li>
              <li>✔ Pay rent online</li>
            </ul>
          </div>
          {/* Pro Plan (Tenant) */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pro Plan</h3>
            <p className="text-lg text-indigo-600 mb-4">₹499/month</p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Dynamic Payment Splitting</li>
              <li>✔ AI-Powered Matching</li>
              <li>✔ Smart Notifications</li>
              <li>✔ Personalized Lease Suggestions</li>
              <li>✔ 24/7 Support</li>
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
