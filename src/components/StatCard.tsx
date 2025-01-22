import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: string;
}

export function StatCard({ icon: Icon, label, value, trend }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="bg-indigo-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        {trend && (
          <span className="text-sm font-medium text-green-600">+{trend}%</span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-4">{value}</h3>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}