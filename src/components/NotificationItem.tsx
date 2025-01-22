import React from 'react';

interface NotificationItemProps {
  icon: React.ElementType;
  title: string;
  time: string;
  type: 'alert' | 'success' | 'pending';
}

export function NotificationItem({ icon: Icon, title, time, type }: NotificationItemProps) {
  const bgColor = {
    alert: 'bg-red-50',
    success: 'bg-green-50',
    pending: 'bg-yellow-50'
  }[type];

  const textColor = {
    alert: 'text-red-600',
    success: 'text-green-600',
    pending: 'text-yellow-600'
  }[type];

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 cursor-pointer">
      <div className={`p-2 rounded-full ${bgColor}`}>
        <Icon className={`w-5 h-5 ${textColor}`} />
      </div>
      <div className="flex-1">
        <p className="text-gray-900 font-medium">{title}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    </div>
  );
}