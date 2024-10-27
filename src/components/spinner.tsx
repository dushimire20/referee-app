// Spinner.tsx
import React from 'react';

const Spinner: React.FC<{ size?: number, color?: string }> = ({ size = 16, color = 'blue-500' }) => {
    return (
        <div
            className={`w-${size} h-${size} border-4 border-gray-200 border-t-${color} rounded-full animate-spin`}
        ></div>
    );
};

export default Spinner;
