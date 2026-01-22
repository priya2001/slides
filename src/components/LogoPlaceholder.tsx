import React from 'react';

interface LogoPlaceholderProps {
  className?: string;
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ className = '' }) => {
  return (
    <p className={`text-blue-500 text-sm ${className}`}>Add your logo here</p>
  );
};

export default LogoPlaceholder;