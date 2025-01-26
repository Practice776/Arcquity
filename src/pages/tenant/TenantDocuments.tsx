import React from "react";
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
} from "lucide-react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { Button } from "../../components/ui/Button";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/tenant" },
  { icon: CreditCard, label: "Payments", path: "/tenant/payments" },
  { icon: History, label: "Payment History", path: "/tenant/payment-history" },
  { icon: MessageSquare, label: "Support Requests", path: "/tenant/support" },
  { icon: FileText, label: "Documents", path: "/tenant/documents", active: true },
  { icon: Settings, label: "Settings", path: "/tenant/settings" },
];

const documents = [
  {
    id: 1,
    name: "Lease Agreement",
    type: "PDF",
    size: "2.5 MB",
    uploadedAt: "March 1, 2024",
    status: "Signed",
  },
  {
    id: 2,
    name: "House Rules",
    type: "PDF",
    size: "1.2 MB",
    uploadedAt: "March 1, 2024",
    status: "Active",
  },
  {
    id: 3,
    name: "Move-in Checklist",
    type: "PDF",
    size: "856 KB",
    uploadedAt: "March 1, 2024",
    status: "Pending",
  },
  {
    id: 4,
    name: "Rental Agreement",
    type: "PDF",
    size: "3.4 MB",
    uploadedAt: "March 1, 2024",
    status: "Signed",
  },
];

export function TenantDocuments() {
  return (
    <DashboardLayout title="Documents" navItems={navItems}>
      <div className="space-y-6 px-4 sm:px-6">
        {/* Upload Document Button */}
        <div className="flex justify-end">
          <Button variant="primary" className="w-full sm:w-auto">
            <Upload className="w-5 h-5 mr-2" />
            Upload Document
          </Button>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">My Documents</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                    <FileText className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 hidden sm:block">
                    {doc.type} • {doc.size} • {doc.uploadedAt}
                  </div>
                </div>
                <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full mr-2 ${
                      doc.status === "Signed"
                        ? "bg-green-100 text-green-800"
                        : doc.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2 sm:mt-0">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
