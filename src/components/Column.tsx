import React from 'react';
import { MoreHorizontal, Settings } from 'lucide-react';

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function Column({ title, children }: ColumnProps) {
  return (
    <div className="flex-1 min-w-[350px] max-w-[400px] border-r border-pink-100 h-screen bg-white">
      <div className="column-header p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl text-gray-900">{title}</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-64px)] scroll-smooth">
        {children}
      </div>
    </div>
  );
}