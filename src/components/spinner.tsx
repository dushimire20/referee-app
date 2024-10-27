// Spinner.tsx
import React from 'react';

interface SpinnerProps {
  size?: number; // Size in pixels
  color?: string; // Tailwind color class without 'text-', like 'blue-500'
}

const Spinner: React.FC<SpinnerProps> = ({ size = 16, color = 'blue-500' }) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderColor: 'transparent',
    borderTopColor: `#3b82f6`, // Use Tailwind's color hex code for blue-500 (change for different colors)
  };

  return (
    <div
      className={`rounded-full border-4 animate-spin`}
      style={circleStyle}
    ></div>
  );
};

export default Spinner;
