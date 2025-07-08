
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, Heart, MessageCircle, User, PlusSquare, Film } from 'lucide-react';
import HomePage from './Home';
import SearchPage from './Search';
import Reels from './Reels';
import Notifications from './Notifications';
import Profile from './Profile';
import Messages from './Messages';

interface LayoutProps {
  onUpload: () => void;
  onStorySelect: (story: any) => void;
  onPostSelect: (post: any) => void;
}

const Layout = ({ onUpload, onStorySelect, onPostSelect }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/upload', icon: PlusSquare, label: 'Upload', action: onUpload },
    { path: '/reels', icon: Film, label: 'Reels' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const handleNavClick = (path: string, action?: () => void) => {
    if (action) {
      action();
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
            Instagram
          </h1>
          <div className="flex items-center space-x-4">
            <Heart 
              className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" 
              onClick={() => navigate('/notifications')} 
            />
            <MessageCircle 
              className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" 
              onClick={() => navigate('/messages')} 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-16 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage onStorySelect={onStorySelect} onPostSelect={onPostSelect} />} />
          <Route path="/search" element={<SearchPage onPostSelect={onPostSelect} />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-4 py-2 fixed bottom-0 left-0 right-0 z-20">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path, item.action)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-black scale-110' 
                    : 'text-gray-400 hover:text-gray-600 hover:scale-105'
                }`}
              >
                <IconComponent 
                  className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} 
                  fill={isActive ? 'currentColor' : 'none'}
                />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
