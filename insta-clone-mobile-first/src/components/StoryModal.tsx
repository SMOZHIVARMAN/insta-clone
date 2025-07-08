
import { useState, useEffect } from 'react';
import { X, Heart, Send, MoreHorizontal, Pause, Play } from 'lucide-react';

interface StoryModalProps {
  story: any;
  onClose: () => void;
}

const StoryModal = ({ story, onClose }: StoryModalProps) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          onClose();
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 second story

    return () => clearInterval(timer);
  }, [isPaused, onClose]);

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  if (story.isYours) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full p-1 mb-4 mx-auto">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <span className="text-4xl">+</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Add to your story</h3>
          <p className="text-gray-300 mb-6">Share a photo or video with your followers</p>
          <button 
            onClick={onClose}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Story
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Progress Bar */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-gray-600 rounded-full h-1">
          <div 
            className="bg-white rounded-full h-1 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <img 
            src={story.user.avatar || story.avatar}
            alt={story.user}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-sm">{story.user}</span>
          <span className="text-white text-xs opacity-75">2h</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button onClick={handlePauseResume} className="text-white">
            {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
          </button>
          <MoreHorizontal className="w-6 h-6 text-white cursor-pointer" />
          <X className="w-6 h-6 text-white cursor-pointer" onClick={onClose} />
        </div>
      </div>

      {/* Story Content */}
      <div 
        className="w-full h-full flex items-center justify-center cursor-pointer"
        onClick={handlePauseResume}
      >
        <img 
          src={story.content || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&fit=crop'}
          alt="Story"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-8 left-4 right-4 z-10">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Send message"
            className="flex-1 bg-transparent border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:border-white/60"
          />
          <Heart className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition-colors" />
          <Send className="w-6 h-6 text-white cursor-pointer hover:text-blue-400 transition-colors" />
        </div>
      </div>

      {/* Navigation Areas */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full" onClick={() => setProgress(0)} />
        <div className="w-1/2 h-full" onClick={onClose} />
      </div>
    </div>
  );
};

export default StoryModal;
