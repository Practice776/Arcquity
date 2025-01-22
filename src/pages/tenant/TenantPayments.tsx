import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  DollarSign
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant' },
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments', active: true },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history' },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support' },
  { icon: FileText, label: 'Documents', path: '/tenant/documents' },
  { icon: Settings, label: 'Settings', path: '/tenant/settings' },
];

export function TenantPayments() {
  return (
    <DashboardLayout title="Payments" navItems={navItems}>
      <div className="space-y-6">
        {/* Current Payment Due */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Current Payment Due</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Next payment due on:</p>
              <p className="text-2xl font-bold text-gray-900">April 1, 2024</p>
            </div>
            <div>
              <p className="text-gray-600">Amount due:</p>
              <p className="text-2xl font-bold text-indigo-600">₹22,500</p>
            </div>
            <Button variant="primary" size="lg" className="flex items-center">
              <span className="text-xl font-bold mr-2">₹</span>
              Pay Now
            </Button>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Credit Card ending in 4242</p>
                  <p className="text-sm text-gray-600">Expires 12/24</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Remove</Button>
            </div>
            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </div>
        </section>

        {/* Autopay Settings */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Autopay Settings</h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Status:</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Enabled
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Your rent will be automatically paid on the 1st of each month using your default payment method.
          </p>
          <Button variant="outline">Manage Autopay</Button>
        </section>
      </div>
    </DashboardLayout>
  );
}
