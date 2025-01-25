import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  Download,
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant' },
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history', active: true },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support' },
  { icon: FileText, label: 'Documents', path: '/tenant/documents' },
  { icon: Settings, label: 'Settings', path: '/tenant/settings' },
];

const paymentHistory = [
  {
    id: 1,
    date: 'March 1, 2024',
    amount: '₹22,500',
    status: 'Paid',
    method: 'Credit Card ending in 4242',
    reference: 'TXN123456',
  },
  {
    id: 2,
    date: 'February 1, 2024',
    amount: '₹22,500',
    status: 'Paid',
    method: 'Credit Card ending in 4242',
    reference: 'TXN123455',
  },
  {
    id: 3,
    date: 'January 1, 2024',
    amount: '₹22,500',
    status: 'Paid',
    method: 'Credit Card ending in 4242',
    reference: 'TXN123454',
  },
];

export function TenantPaymentHistory() {
  return (
    <DashboardLayout title="Payment History" navItems={navItems}>
      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Payment History</h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        {/* Table for Larger Screens */}
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">
                    {payment.date}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-indigo-600">
                    {payment.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span
                      className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                    {payment.method}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">
                    {payment.reference}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                    >
                      <Download className="w-4 h-4" />
                      Receipt
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for Smaller Screens */}
        <div className="block md:hidden p-4">
          {paymentHistory.map((payment) => (
            <div
              key={payment.id}
              className="bg-gray-50 rounded-lg shadow-sm p-4 border mb-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-gray-900">{payment.date}</h3>
                <span className="text-sm font-semibold text-indigo-600">{payment.amount}</span>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Status:</strong>{' '}
                <span
                  className={`font-semibold ${
                    payment.status === 'Paid' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {payment.status}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <strong>Method:</strong> {payment.method}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Reference:</strong> {payment.reference}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2 flex items-center justify-center gap-2 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              >
                <Download className="w-4 h-4" />
                Receipt
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
