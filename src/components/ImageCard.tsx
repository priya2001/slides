import React from 'react';

const ImageCard: React.FC<{ 
  imageUrl: string;
  alt: string;
  className?: string;
}> = ({ imageUrl, alt, className = '' }) => {
  return (
    <div className={`w-full lg:w-2/5 max-w-lg ${className}`}>
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;