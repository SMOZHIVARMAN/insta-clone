
import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onPostSelect: (post: any) => void;
}

const Search = ({ onPostSelect }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const explorePosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', likes: 1234 },
    { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop', likes: 856 },
    { id: 3, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop', likes: 2156 },
    { id: 4, image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c98a?w=300&h=300&fit=crop', likes: 967 },
    { id: 5, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop', likes: 1543 },
    { id: 6, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop', likes: 789 },
    { id: 7, image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop', likes: 1876 },
    { id: 8, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop', likes: 654 },
    { id: 9, image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop', likes: 2341 },
    { id: 10, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop', likes: 1123 },
    { id: 11, image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop', likes: 876 },
    { id: 12, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', likes: 1567 }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Search Bar */}
      <div className="p-3 bg-white sticky top-16 z-10">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-3 gap-[2px] bg-gray-200">
        {explorePosts.map((post, index) => (
          <div 
            key={post.id}
            className={`relative aspect-square cursor-pointer group ${
              index % 9 === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => onPostSelect(post)}
          >
            <img 
              src={post.image}
              alt="Explore post"
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <div className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {post.likes.toLocaleString()} likes
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
