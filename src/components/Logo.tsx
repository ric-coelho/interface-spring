
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-us-navy flex items-center justify-center rounded">
        <span className="text-white font-bold text-lg">U</span>
      </div>
      <div className="ml-2 text-us-navy font-bold text-xl">
        <span>U.S. Bank</span>
      </div>
    </div>
  );
};

export default Logo;
