import React from 'react';
import { NavItem } from './NavItem';
import { Bell } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  navItems: Array<{
    icon: React.ElementType;
    label: string;
    path: string;
  }>;
}

export function DashboardLayout({ children, title, navItems }: DashboardLayoutProps) {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  // Update nav items' active state based on the current path
  const updatedNavItems = navItems.map((item) => ({
    ...item,
    active: location.pathname === item.path,
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6">
        <div className="flex items-center mb-8">
          <img src="/images/icon-logo.png" alt="Arcquity Logo" className="w-25 h-20" />
          <span className="text-xl font-bold text-gray-900">Arcquity</span>
        </div>

        <nav className="space-y-1">
          {updatedNavItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              path={item.path}
              active={item.active}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  {user?.name?.substring(0, 2).toUpperCase() || 'U'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
