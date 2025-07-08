
import { useState } from 'react';
import { Grid3X3, Bookmark, Tag, Settings, MoreHorizontal } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  const userPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', likes: 1234 },
    { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop', likes: 856 },
    { id: 3, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop', likes: 2156 },
    { id: 4, image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c98a?w=300&h=300&fit=crop', likes: 967 },
    { id: 5, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop', likes: 1543 },
    { id: 6, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop', likes: 789 }
  ];

  const savedPosts = [
    { id: 7, image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop', likes: 1876 },
    { id: 8, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop', likes: 654 },
    { id: 9, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop', likes: 2341 }
  ];

  const getCurrentPosts = () => {
    switch (activeTab) {
      case 'posts':
        return userPosts;
      case 'saved':
        return savedPosts;
      case 'tagged':
        return [];
      default:
        return userPosts;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Profile Header */}
      <div className="p-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">your_username</h2>
          <div className="flex items-center space-x-4">
            <Settings className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            <MoreHorizontal className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] mr-6">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full rounded-full object-cover bg-white p-[2px]"
            />
          </div>
          
          <div className="flex-1 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-semibold text-lg">{userPosts.length}</div>
              <div className="text-gray-500 text-sm">Posts</div>
            </div>
            <div>
              <div className="font-semibold text-lg">1.2K</div>
              <div className="text-gray-500 text-sm">Followers</div>
            </div>
            <div>
              <div className="font-semibold text-lg">875</div>
              <div className="text-gray-500 text-sm">Following</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <div className="font-semibold mb-1">John Doe</div>
          <div className="text-sm text-gray-600 mb-1">📸 Photographer & Content Creator</div>
          <div className="text-sm text-gray-600 mb-1">🌍 Travel Enthusiast</div>
          <div className="text-sm text-blue-600">linktr.ee/johndoe</div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-6">
          <button className="flex-1 bg-gray-100 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-100 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            Share Profile
          </button>
        </div>

        {/* Highlights */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-6">
          {['Travel', 'Food', 'Work', 'Friends'].map((highlight, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 mb-2 cursor-pointer hover:border-gray-400 transition-colors">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white text-xl">
                    {highlight.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'posts' 
                ? 'border-t-2 border-black text-black' 
                : 'text-gray-400'
            }`}
          >
            <Grid3X3 className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'saved' 
                ? 'border-t-2 border-black text-black' 
                : 'text-gray-400'
            }`}
          >
            <Bookmark className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'tagged' 
                ? 'border-t-2 border-black text-black' 
                : 'text-gray-400'
            }`}
          >
            <Tag className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-[2px] bg-gray-200">
        {getCurrentPosts().length > 0 ? (
          getCurrentPosts().map((post) => (
            <div key={post.id} className="aspect-square cursor-pointer group">
              <img 
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />
            </div>
          ))
        ) : (
          <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-400">
            {activeTab === 'tagged' ? (
              <>
                <Tag className="w-12 h-12 mb-4" />
                <p className="text-lg font-semibold mb-2">No Photos</p>
                <p className="text-sm text-center">When people tag you in photos, they'll appear here.</p>
              </>
            ) : (
              <>
                <Bookmark className="w-12 h-12 mb-4" />
                <p className="text-lg font-semibold mb-2">No saved posts yet</p>
                <p className="text-sm text-center">Save posts you like to see them here.</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
