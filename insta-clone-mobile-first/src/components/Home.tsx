
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import Stories from './Stories';

interface HomeProps {
  onStorySelect: (story: any) => void;
  onPostSelect: (post: any) => void;
}

const Home = ({ onStorySelect, onPostSelect }: HomeProps) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'johndoe', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
      likes: 1234,
      caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #nature',
      comments: [
        { user: 'alice_wonder', text: 'Gorgeous shot! 😍' },
        { user: 'mike_photo', text: 'Amazing colors!' }
      ],
      timeAgo: '2h',
      liked: false,
      saved: false
    },
    {
      id: 2,
      user: { name: 'travel_girl', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face' },
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=500&fit=crop',
      likes: 856,
      caption: 'Mountain adventures never get old ⛰️ #hiking #adventure #mountains',
      comments: [
        { user: 'outdoor_lover', text: 'Wish I was there!' },
        { user: 'hiker_bob', text: 'Which trail is this?' }
      ],
      timeAgo: '4h',
      liked: true,
      saved: false
    },
    {
      id: 3,
      user: { name: 'foodie_sam', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop',
      likes: 2156,
      caption: 'Homemade pizza night! 🍕 Recipe in my bio #homecooking #pizza #foodie',
      comments: [
        { user: 'chef_maria', text: 'Looks delicious!' },
        { user: 'pizza_lover', text: 'Recipe please! 🙏' }
      ],
      timeAgo: '6h',
      liked: false,
      saved: true
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleSave = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, saved: !post.saved }
        : post
    ));
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Stories Section */}
      <Stories onStorySelect={onStorySelect} />
      
      {/* Posts Feed */}
      <div className="space-y-0">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border-b border-gray-100">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-gradient-to-r from-purple-500 to-pink-500"
                />
                <span className="font-semibold text-sm">{post.user.name}</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>

            {/* Post Image */}
            <div className="relative">
              <img 
                src={post.image} 
                alt="Post"
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => onPostSelect(post)}
              />
            </div>

            {/* Post Actions */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <Heart 
                    className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
                      post.liked 
                        ? 'text-red-500 fill-red-500 scale-110' 
                        : 'text-gray-700 hover:text-gray-500 hover:scale-110'
                    }`}
                    onClick={() => handleLike(post.id)}
                  />
                  <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-500 hover:scale-110 transition-all duration-200" />
                  <Send className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-500 hover:scale-110 transition-all duration-200" />
                </div>
                <Bookmark 
                  className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
                    post.saved 
                      ? 'text-black fill-black' 
                      : 'text-gray-700 hover:text-gray-500 hover:scale-110'
                  }`}
                  onClick={() => handleSave(post.id)}
                />
              </div>

              {/* Likes Count */}
              <div className="font-semibold text-sm mb-1">
                {post.likes.toLocaleString()} likes
              </div>

              {/* Caption */}
              <div className="text-sm mb-1">
                <span className="font-semibold mr-2">{post.user.name}</span>
                {post.caption}
              </div>

              {/* Comments */}
              <div className="text-sm text-gray-500 mb-1">
                View all comments
              </div>
              {post.comments.slice(0, 2).map((comment, index) => (
                <div key={index} className="text-sm mb-1">
                  <span className="font-semibold mr-2">{comment.user}</span>
                  {comment.text}
                </div>
              ))}

              {/* Time */}
              <div className="text-xs text-gray-400 uppercase">
                {post.timeAgo} ago
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
