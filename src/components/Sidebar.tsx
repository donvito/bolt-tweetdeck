import React from 'react';
import { 
  LayoutDashboard, 
  Flame, 
  User, 
  MessageCircle, 
  Newspaper,
  Zap,
  Code,
  Users,
  TrendingUp,
  Wrench,
  MoreHorizontal,
  PenSquare
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Flame, label: 'Hot Tweets', id: 'hot-tweets' },
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: MessageCircle, label: 'Grok', id: 'grok' },
  { icon: Newspaper, label: 'News', id: 'news' },
  { icon: Zap, label: 'Bolt.new', id: 'bolt-new' },
  { icon: Code, label: 'Vercel', id: 'vercel' },
  { icon: Code, label: 'Laravel', id: 'laravel' },
  { icon: TrendingUp, label: 'Trending', id: 'trending' },
  { icon: Users, label: 'Communities', id: 'communities' },
  { icon: Wrench, label: 'Builders', id: 'builders' },
];

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-pink-100 h-screen p-4 flex flex-col bg-white">
      <button className="w-full bg-pink-500 text-white rounded-full py-3 mb-6 font-bold hover:bg-pink-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
        <PenSquare className="w-5 h-5" />
        <span>Post</span>
      </button>
      
      <div className="flex items-center gap-4 mb-6">
        <button className="flex-1 flex items-center justify-center py-3 hover:bg-pink-50 rounded-xl transition-all duration-200">
          <LayoutDashboard className="w-5 h-5 text-pink-500" />
        </button>
        <button className="flex-1 flex items-center justify-center py-3 hover:bg-pink-50 rounded-xl transition-all duration-200">
          <MessageCircle className="w-5 h-5 text-pink-500" />
        </button>
      </div>

      <div className="space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="sidebar-item"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      
      <button className="sidebar-item mt-4">
        <MoreHorizontal className="w-5 h-5" />
        <span className="text-sm font-medium">More</span>
      </button>
    </div>
  );
}