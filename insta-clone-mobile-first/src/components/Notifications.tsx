
import { Heart, MessageCircle, UserPlus, AtSign } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: { name: 'alice_wonder', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face' },
      action: 'liked your photo.',
      postImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
      timeAgo: '2m',
      read: false
    },
    {
      id: 2,
      type: 'follow',
      user: { name: 'mike_photo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
      action: 'started following you.',
      timeAgo: '5m',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      user: { name: 'travel_girl', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
      action: 'commented: "Amazing shot! 😍"',
      postImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop',
      timeAgo: '10m',
      read: true
    },
    {
      id: 4,
      type: 'like',
      user: { name: 'chef_maria', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
      action: 'liked your photo.',
      postImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop',
      timeAgo: '1h',
      read: true
    },
    {
      id: 5,
      type: 'mention',
      user: { name: 'outdoor_lover', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' },
      action: 'mentioned you in a comment.',
      postImage: 'https://images.unsplash.com/photo-1520637836862-4d197d17c98a?w=100&h=100&fit=crop',
      timeAgo: '2h',
      read: true
    },
    {
      id: 6,
      type: 'follow',
      user: { name: 'foodie_sam', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face' },
      action: 'started following you.',
      timeAgo: '1d',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-5 h-5 text-red-500 fill-red-500" />;
      case 'comment':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'follow':
        return <UserPlus className="w-5 h-5 text-green-500" />;
      case 'mention':
        return <AtSign className="w-5 h-5 text-purple-500" />;
      default:
        return <Heart className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Activity</h2>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-gray-100">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`p-4 flex items-center space-x-3 hover:bg-gray-50 cursor-pointer ${
              !notification.read ? 'bg-blue-50' : ''
            }`}
          >
            {/* User Avatar with Icon Overlay */}
            <div className="relative">
              <img 
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                {getIcon(notification.type)}
              </div>
            </div>

            {/* Notification Content */}
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <span className="font-semibold">{notification.user.name}</span>
                <span className="text-gray-600 ml-1">{notification.action}</span>
                <span className="text-gray-400 ml-2">{notification.timeAgo}</span>
              </div>
            </div>

            {/* Post Image or Follow Button */}
            {notification.postImage ? (
              <img 
                src={notification.postImage}
                alt="Post"
                className="w-12 h-12 rounded-lg object-cover"
              />
            ) : notification.type === 'follow' ? (
              <button className="bg-blue-500 text-white px-6 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                Follow
              </button>
            ) : null}

            {/* Unread Indicator */}
            {!notification.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
