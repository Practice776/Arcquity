import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  Download
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.reference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Receipt
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