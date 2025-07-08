
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Search from '../components/Search';
import Reels from '../components/Reels';
import Notifications from '../components/Notifications';
import Profile from '../components/Profile';
import Messages from '../components/Messages';
import StoryModal from '../components/StoryModal';
import PostModal from '../components/PostModal';
import UploadModal from '../components/UploadModal';

const Index = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Layout 
        onUpload={() => setShowUpload(true)}
        onStorySelect={setSelectedStory}
        onPostSelect={setSelectedPost}
      />
      
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
      
      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
      
      {showUpload && (
        <UploadModal onClose={() => setShowUpload(false)} />
      )}
    </div>
  );
};

export default Index;
