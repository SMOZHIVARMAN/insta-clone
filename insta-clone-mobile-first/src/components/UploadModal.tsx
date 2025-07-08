
import { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal = ({ onClose }: UploadModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [step, setStep] = useState(1); // 1: select, 2: edit, 3: share

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setStep(2);
  };

  const handlePost = () => {
    // In a real app, this would upload the post
    console.log('Posting:', { image: selectedImage, caption });
    onClose();
    // Show success toast or navigate to feed
  };

  const sampleImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520637836862-4d197d17c98a?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="font-semibold">
            {step === 1 ? 'Select Photo' : step === 2 ? 'Edit' : 'Share'}
          </h2>
          {step > 1 && (
            <button
              onClick={step === 2 ? () => setStep(3) : handlePost}
              className="text-blue-500 font-semibold hover:text-blue-600"
            >
              {step === 2 ? 'Next' : 'Share'}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="max-h-[calc(90vh-80px)] overflow-y-auto">
          {step === 1 && (
            <div className="p-4">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a photo</h3>
                <p className="text-gray-500">Choose from your recent photos</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {sampleImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                    onClick={() => handleImageSelect(image)}
                  >
                    <img
                      src={image}
                      alt={`Sample ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-gray-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Upload from device</p>
              </div>
            </div>
          )}

          {step === 2 && selectedImage && (
            <div className="p-4">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filters
                  </label>
                  <div className="flex space-x-2 overflow-x-auto">
                    {['Normal', 'Vintage', 'B&W', 'Bright', 'Warm'].map((filter) => (
                      <button
                        key={filter}
                        className="flex-shrink-0 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && selectedImage && (
            <div className="p-4">
              <div className="flex space-x-4 mb-4">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
                      alt="Your avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold text-sm">your_username</span>
                  </div>
                  <textarea
                    placeholder="Write a caption..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full h-20 text-sm resize-none focus:outline-none"
                    maxLength={2200}
                  />
                </div>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Tag People</span>
                  <span className="text-sm text-blue-500 cursor-pointer">Add</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Add Location</span>
                  <span className="text-sm text-blue-500 cursor-pointer">Add</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Also post to Facebook</span>
                  <input type="checkbox" className="rounded" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Also post to Twitter</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
