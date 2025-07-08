
import { useState } from 'react';
import { Search, Edit, ArrowLeft, Send, Phone, Video, Info } from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      user: { name: 'alice_wonder', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?w=100&h=100&fit=crop&crop=face' },
      lastMessage: 'That photo is amazing! 😍',
      timeAgo: '2m',
      unread: 2,
      online: true
    },
    {
      id: 2,
      user: { name: 'mike_photo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
      lastMessage: 'Thanks for the follow!',
      timeAgo: '1h',
      unread: 0,
      online: false
    },
    {
      id: 3,
      user: { name: 'travel_girl', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
      lastMessage: 'Where was this taken?',
      timeAgo: '3h',
      unread: 1,
      online: true
    },
    {
      id: 4,
      user: { name: 'chef_maria', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
      lastMessage: 'Recipe please! 🙏',
      timeAgo: '1d',
      unread: 0,
      online: false
    }
  ];

  const chatMessages = [
    { id: 1, sender: 'alice_wonder', message: 'Hey! How are you?', time: '10:30 AM', isMine: false },
    { id: 2, sender: 'me', message: 'Hi! I\'m good, thanks for asking 😊', time: '10:32 AM', isMine: true },
    { id: 3, sender: 'alice_wonder', message: 'That photo you posted yesterday is amazing! 😍', time: '10:35 AM', isMine: false },
    { id: 4, sender: 'me', message: 'Thanks! It was such a beautiful sunset', time: '10:36 AM', isMine: true },
    { id: 5, sender: 'alice_wonder', message: 'Where did you take it?', time: '10:38 AM', isMine: false }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  if (selectedChat) {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ArrowLeft 
              className="w-6 h-6 cursor-pointer hover:text-gray-600" 
              onClick={() => setSelectedChat(null)}
            />
            <div className="relative">
              <img 
                src={selectedChat.user.avatar}
                alt={selectedChat.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {selectedChat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <div className="font-semibold text-sm">{selectedChat.user.name}</div>
              <div className="text-xs text-gray-500">
                {selectedChat.online ? 'Active now' : 'Active 2h ago'}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            <Video className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            <Info className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.isMine 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-black'
              }`}>
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.isMine ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Send 
              className={`w-6 h-6 cursor-pointer transition-colors ${
                newMessage.trim() ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400'
              }`}
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">your_username</h2>
          <Edit className="w-6 h-6 cursor-pointer hover:text-gray-600" />
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-gray-100">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id}
            className="p-4 flex items-center space-x-3 hover:bg-gray-50 cursor-pointer"
            onClick={() => setSelectedChat(conversation)}
          >
            <div className="relative">
              <img 
                src={conversation.user.avatar}
                alt={conversation.user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              {conversation.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm truncate">{conversation.user.name}</span>
                <span className="text-xs text-gray-400">{conversation.timeAgo}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className={`text-sm truncate ${
                  conversation.unread > 0 ? 'text-black font-medium' : 'text-gray-500'
                }`}>
                  {conversation.lastMessage}
                </p>
                {conversation.unread > 0 && (
                  <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                    {conversation.unread}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
