
import { Plus } from 'lucide-react';

interface StoriesProps {
  onStorySelect: (story: any) => void;
}

const Stories = ({ onStorySelect }: StoriesProps) => {
  const stories = [
    {
      id: 'your_story',
      user: 'Your Story',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      isYours: true,
      viewed: false
    },
    {
      id: 1,
      user: 'alice_wonder',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face',
      content: 'https://images.unsplash.com/photo-1520637836862-4d197d17c98a?w=500&h=800&fit=crop',
      viewed: false
    },
    {
      id: 2,
      user: 'mike_photo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=800&fit=crop',
      viewed: true
    },
    {
      id: 3,
      user: 'travel_girl',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=800&fit=crop',
      viewed: false
    },
    {
      id: 4,
      user: 'chef_maria',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=800&fit=crop',
      viewed: true
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100 p-3">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div 
            key={story.id}
            className="flex-shrink-0 text-center cursor-pointer"
            onClick={() => onStorySelect(story)}
          >
            <div className={`relative w-16 h-16 rounded-full p-[2px] ${
              story.isYours 
                ? 'bg-gray-200' 
                : story.viewed 
                  ? 'bg-gray-300' 
                  : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
            }`}>
              <img 
                src={story.avatar} 
                alt={story.user}
                className="w-full h-full rounded-full object-cover bg-white p-[2px]"
              />
              {story.isYours && (
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <p className="text-xs mt-1 text-gray-700 truncate max-w-[64px]">
              {story.user}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
