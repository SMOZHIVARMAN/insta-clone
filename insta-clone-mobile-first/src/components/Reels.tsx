
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, MoreHorizontal, Play, Volume2, VolumeX } from 'lucide-react';

const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [muted, setMuted] = useState(true);
  
  const reels = [
    {
      id: 1,
      user: { name: 'travel_vlogs', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face' },
      video: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=600&fit=crop',
      likes: 1234,
      caption: 'Beautiful sunset timelapse 🌅 #nature #sunset',
      music: 'Original Audio - travel_vlogs'
    },
    {
      id: 2,
      user: { name: 'dance_moves', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
      video: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=600&fit=crop',
      likes: 5678,
      caption: 'New dance trend! Try it out 💃 #dance #trending',
      music: 'Trending Song - Artist Name'
    },
    {
      id: 3,
      user: { name: 'food_shorts', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
      video: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=600&fit=crop',
      likes: 3456,
      caption: '60-second pasta recipe 🍝 #cooking #foodhacks',
      music: 'Cooking Beats - Food Music'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen relative overflow-hidden">
      {reels.map((reel, index) => (
        <div 
          key={reel.id}
          className={`absolute inset-0 transition-transform duration-300 ${
            index === currentReel ? 'translate-y-0' : 
            index < currentReel ? '-translate-y-full' : 'translate-y-full'
          }`}
        >
          {/* Video/Image Container */}
          <div className="relative w-full h-full">
            <img 
              src={reel.video}
              alt="Reel"
              className="w-full h-full object-cover"
            />
            
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-20 h-20 text-white opacity-30" />
            </div>

            {/* Top Bar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="text-white font-semibold">Reels</div>
              <div className="flex items-center space-x-4">
                <button onClick={() => setMuted(!muted)}>
                  {muted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6 z-10">
              <div className="flex flex-col items-center">
                <Heart className="w-7 h-7 text-white mb-1 cursor-pointer hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">{reel.likes.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <MessageCircle className="w-7 h-7 text-white mb-1 cursor-pointer hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">128</span>
              </div>
              
              <Send className="w-7 h-7 text-white cursor-pointer hover:scale-110 transition-transform" />
              
              <MoreHorizontal className="w-7 h-7 text-white cursor-pointer hover:scale-110 transition-transform" />
              
              <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg p-[2px]">
                <img 
                  src={reel.user.avatar}
                  alt={reel.user.name}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-16 z-10">
              <div className="flex items-center mb-2">
                <img 
                  src={reel.user.avatar}
                  alt={reel.user.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <span className="text-white font-semibold text-sm">@{reel.user.name}</span>
                <button className="ml-3 text-white border border-white px-3 py-1 rounded text-xs font-semibold hover:bg-white hover:text-black transition-colors">
                  Follow
                </button>
              </div>
              
              <p className="text-white text-sm mb-2">{reel.caption}</p>
              
              <div className="flex items-center text-white text-xs">
                <span>♪ {reel.music}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReel(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentReel ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Swipe Area for Navigation */}
      <div 
        className="absolute inset-0 z-10"
        onTouchStart={(e) => {
          const startY = e.touches[0].clientY;
          const handleTouchEnd = (endEvent: TouchEvent) => {
            const endY = endEvent.changedTouches[0].clientY;
            const diff = startY - endY;
            
            if (Math.abs(diff) > 50) {
              if (diff > 0 && currentReel < reels.length - 1) {
                setCurrentReel(currentReel + 1);
              } else if (diff < 0 && currentReel > 0) {
                setCurrentReel(currentReel - 1);
              }
            }
            
            document.removeEventListener('touchend', handleTouchEnd);
          };
          
          document.addEventListener('touchend', handleTouchEnd);
        }}
      />
    </div>
  );
};

export default Reels;
