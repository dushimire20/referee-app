import React from 'react';
import { ToolbarProps, Event } from 'react-big-calendar';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ScheduleEvent extends Event {
    title: string;
    start: Date;
    end: Date;
    location: string;
}

const CustomToolbar: React.FC<ToolbarProps<ScheduleEvent, object>> = ({ date, onNavigate }) => {
    const start = new Date(date);
    const end = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    end.setDate(end.getDate() - end.getDay() + 6);

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        return { day, month };
    };

    const startDate = formatDate(start);
    const endDate = formatDate(end);

    return (
        <div className="flex items-center mt-6 space-x-4 text-gray-500">
            <span className="text-lg">
                {startDate.month === endDate.month
                    ? `${startDate.day} - ${endDate.day} ${startDate.month}`
                    : `${startDate.day} ${startDate.month} - ${endDate.day} ${endDate.month}`}
            </span>
            <button onClick={() => onNavigate('PREV')} className="h-8 w-8 flex items-center bg-secondary-100 bg-opacity-5 rounded-lg">
                <MdOutlineKeyboardArrowLeft size={30} />
            </button>
            <button onClick={() => onNavigate('NEXT')} className="h-8 w-8 flex items-center bg-secondary-100 bg-opacity-5 rounded-lg">
                <MdOutlineKeyboardArrowRight size={30} />
            </button>
        </div>
    );
};

export default CustomToolbar;