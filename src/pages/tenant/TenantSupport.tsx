import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  PlusCircle,
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant' },
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history' },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support', active: true },
  { icon: FileText, label: 'Documents', path: '/tenant/documents' },
  { icon: Settings, label: 'Settings', path: '/tenant/settings' },
];

const supportRequests = [
  {
    id: 1,
    title: 'Bathroom faucet leak',
    status: 'In Progress',
    priority: 'High',
    created: 'March 15, 2024',
    lastUpdate: '2 days ago',
  },
  {
    id: 2,
    title: 'AC not cooling properly',
    status: 'Resolved',
    priority: 'Medium',
    created: 'March 10, 2024',
    lastUpdate: '5 days ago',
  },
];

export function TenantSupport() {
  return (
    <DashboardLayout title="Support Requests" navItems={navItems}>
      <div className="space-y-6">
        {/* New Request Button */}
        <div className="flex justify-end">
          <Button variant="primary" className="w-full sm:w-auto">
            <PlusCircle className="w-5 h-5 mr-2" />
            New Support Request
          </Button>
        </div>

        {/* Active Requests */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Active Requests</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {supportRequests.map((request) => (
              <div key={request.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{request.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
                  <div className="space-x-4 mb-2 sm:mb-0">
                    <span>Created: {request.created}</span>
                    <span>Priority: {request.priority}</span>
                  </div>
                  <span>Last update: {request.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit New Request Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Submit New Request</h2>
          <form className="space-y-4">
            <Input
              id="title"
              name="title"
              label="Title"
              placeholder="Brief description of the issue"
              required
            />
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Detailed description of the issue..."
              />
            </div>
            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">
                Attachments
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="primary" type="submit" className="w-full sm:w-auto">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
