import React from 'react';
import {
  Home,
  CreditCard,
  History,
  MessageSquare,
  FileText,
  Settings,
  User,
  Bell,
  Shield,
  Mail,
  ChevronRight,
  CreditCard as CardIcon,
  LogOut,
  Phone
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useNavigate } from 'react-router-dom'; // For redirection

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/tenant' },
  { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
  { icon: History, label: 'Payment History', path: '/tenant/payment-history' },
  { icon: MessageSquare, label: 'Support Requests', path: '/tenant/support' },
  { icon: FileText, label: 'Documents', path: '/tenant/documents' },
  { icon: Settings, label: 'Settings', path: '/tenant/settings', active: true },
];

export function TenantSettings() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication data (if needed)
    // e.g., localStorage.removeItem('authToken');
    
    // Redirect to the landing page
    navigate('/'); // Assuming the landing page is at "/"
  };

  return (
    <DashboardLayout title="Settings" navItems={navItems}>
      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="w-10 h-10 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
              <p className="text-gray-600">Update your personal information</p>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                defaultValue="John"
                icon={User}
              />
              <Input
                label="Last Name"
                defaultValue="Doe"
                icon={User}
              />
            <Input
              label="Email"
              type="email"
              defaultValue="john.doe@example.com"
              icon={Mail}
            />
            <Input
              label="Phone"
              type="tel"
              defaultValue="+91 1234567890"
              icon={Phone}
            />
            </div>
            <div className="flex justify-end">
              <Button variant="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </div>


        {/* Payment Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
              <CardIcon className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Payment Settings</h2>
              <p className="text-gray-600">Manage your payment methods and preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <CardIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Bank Account ending in 4242</p>
                  <p className="text-sm text-gray-600">Primary Account</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
            <Button variant="outline" className="w-full">Add Payment Method</Button>
          </div>
        </div>


        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Bell className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
              <p className="text-gray-600">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4 border-b">
              <div>
                <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                <p className="text-sm text-gray-500">Receive updates via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="font-medium text-gray-900">Browser Notifications</h3>
                <p className="text-sm text-gray-500">Receive updates in your browser</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
              <p className="text-gray-600">Manage your account security</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              <span>Change Password</span>
              <Shield className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>Two-Factor Authentication</span>
              <Shield className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>Login History</span>
              <Shield className="w-5 h-5" />
            </Button>
          </div>
        </div>


        {/* Logout Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-red-50">
              <LogOut className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Logout</h2>
              <p className="text-gray-600">
                For security, make sure to log out from your account when done.
              </p>
            </div>
          </div>
          <Button 
            variant="danger" 
            className="w-full flex items-center justify-center space-x-2 py-3 text-lg font-medium"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </div>

      </div>
    </DashboardLayout>
  );
}