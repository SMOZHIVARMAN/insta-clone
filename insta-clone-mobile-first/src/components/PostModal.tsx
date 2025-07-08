
import { useState } from 'react';
import { X, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostModalProps {
  post: any;
  onClose: () => void;
}

const PostModal = ({ post, onClose }: PostModalProps) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [saved, setSaved] = useState(post.saved || false);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      // In a real app, this would add the comment
      console.log('Adding comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src={post.user?.avatar || post.image}
              alt={post.user?.name || 'User'}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-sm">{post.user?.name || 'user'}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
            <X className="w-6 h-6 text-gray-600 cursor-pointer" onClick={onClose} />
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img 
            src={post.image}
            alt="Post"
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* Actions */}
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <Heart 
                className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
                  liked 
                    ? 'text-red-500 fill-red-500 scale-110' 
                    : 'text-gray-700 hover:text-gray-500 hover:scale-110'
                }`}
                onClick={() => setLiked(!liked)}
              />
              <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-500 hover:scale-110 transition-all duration-200" />
              <Send className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-500 hover:scale-110 transition-all duration-200" />
            </div>
            <Bookmark 
              className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
                saved 
                  ? 'text-black fill-black' 
                  : 'text-gray-700 hover:text-gray-500 hover:scale-110'
              }`}
              onClick={() => setSaved(!saved)}
            />
          </div>

          {/* Likes */}
          <div className="font-semibold text-sm mb-2">
            {(post.likes || 0).toLocaleString()} likes
          </div>

          {/* Caption */}
          {post.caption && (
            <div className="text-sm mb-2">
              <span className="font-semibold mr-2">{post.user?.name || 'user'}</span>
              {post.caption}
            </div>
          )}
        </div>

        {/* Comments */}
        <div className="max-h-40 overflow-y-auto p-3 border-b border-gray-100">
          {post.comments?.map((comment: any, index: number) => (
            <div key={index} className="flex items-start space-x-3 mb-3">
              <img 
                src={`https://images.unsplash.com/photo-150700321116${index}?w=32&h=32&fit=crop&crop=face`}
                alt={comment.user}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-semibold mr-2">{comment.user}</span>
                  {comment.text}
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-gray-400">2h</span>
                  <button className="text-xs text-gray-500 font-semibold">Reply</button>
                  <Heart className="w-3 h-3 text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <div className="p-3">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              className="flex-1 text-sm focus:outline-none"
            />
            <button
              onClick={handleAddComment}
              className={`text-sm font-semibold ${
                newComment.trim() ? 'text-blue-500 hover:text-blue-600' : 'text-blue-300'
              }`}
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
