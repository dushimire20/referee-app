import React from 'react';

interface CustomHeaderProps {
    date: Date;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ date }) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return (
        <div className="bg-secondary-100 bg-opacity-70 text-white text-center p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">{`${month} ${year}`}</h2>
        </div>
    );
};

export default CustomHeader;