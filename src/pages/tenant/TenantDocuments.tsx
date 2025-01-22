import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  Download,
  Eye,
  Upload,
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant' },
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history' },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support' },
  { icon: FileText, label: 'Documents', path: '/tenant/documents', active: true },
  { icon: Settings, label: 'Settings', path: '/tenant/settings' },
];

const documents = [
  {
    id: 1,
    name: 'Lease Agreement',
    type: 'PDF',
    size: '2.5 MB',
    uploadedAt: 'March 1, 2024',
    status: 'Signed',
  },
  {
    id: 2,
    name: 'House Rules',
    type: 'PDF',
    size: '1.2 MB',
    uploadedAt: 'March 1, 2024',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Move-in Checklist',
    type: 'PDF',
    size: '856 KB',
    uploadedAt: 'March 1, 2024',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Rental Agreement',
    type: 'PDF',
    size: '3.4 MB',
    uploadedAt: 'March 1, 2024',
    status: 'Signed',
  },
];

export function TenantDocuments() {
  return (
    <DashboardLayout title="Documents" navItems={navItems}>
      <div className="space-y-6">
        {/* Upload Document Button */}
        <div className="flex justify-end">
          <Button variant="primary">
            <Upload className="w-5 h-5 mr-2" />
            Upload Document
          </Button>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">My Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
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
                    Status
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
                        <FileText className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                      </div>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          doc.status === 'Signed'
                            ? 'bg-green-100 text-green-800'
                            : doc.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {doc.status}
                      </span>
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
        </div>
      </div>
    </DashboardLayout>
  );
}
