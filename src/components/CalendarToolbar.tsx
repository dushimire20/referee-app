import React from 'react';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

interface CalendarToolbarProps {
    date: Date;
    onNavigate: (action: 'PREV' | 'NEXT') => void;
    onToday: () => void;
    onMonthSelect: (month: number) => void;
}

const CalendarToolbar: React.FC<CalendarToolbarProps> = ({date, onNavigate, onToday, onMonthSelect}) => {
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();
    const currentMonth = date.getMonth();

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        onMonthSelect(selectedMonth);
    };

    return (
        <div className="flex justify-between items-center mt-6 mb-4 space-x-4 text-gray-500">
            <span className="flex items-center">
                <span className="text-lg">{`${month} ${year}`}</span>
                <button onClick={() => onNavigate('PREV')}
                        className="h-8 w-8 flex items-center">
                    <MdOutlineKeyboardArrowLeft size={24}/>
                </button>
                <button onClick={() => onNavigate('NEXT')}
                        className="h-8 w-8 flex items-center">
                    <MdOutlineKeyboardArrowRight size={24}/>
                </button>
            </span>
            <button onClick={onToday} className="border border-gray-500 text-gray-500 px-4 rounded-full">
                Today
            </button>
            <select
                value={currentMonth} onChange={handleMonthChange}
                className="border border-gray-500 text-gray-500 bg-white px-1 rounded-full"
            >
                {Array.from({length: 12}, (_, i) => (
                    <option key={i} value={i}>{new Date(0, i).toLocaleString('default', {month: 'long'})}</option>
                ))}
            </select>
        </div>
    );
};

export default CalendarToolbar;