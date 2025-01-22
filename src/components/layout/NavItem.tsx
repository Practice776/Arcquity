import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  path?: string;
}

export function NavItem({ icon: Icon, label, active = false, path = '#' }: NavItemProps) {
  return (
    <Link
      to={path}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer
        ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
}