import React from 'react';

const HighlightLine: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-8">
      <div className="inline-block relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-sm"></div>
        <p className="relative text-blue-400 font-medium italic">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HighlightLine;