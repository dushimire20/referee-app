import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '@/assets/css/calendarStyles.module.css';
import CalendarToolbar from './CalendarToolbar';
import CustomHeader from './CustomHeader';

const CalendarPage: React.FC = () => {
    const [value, setValue] = useState(new Date());
    const [availableDates, setAvailableDates] = useState<string[]>(['2024-09-22', '2024-09-27']);

    const handleDateChange = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0];

        if (availableDates.includes(formattedDate)) {
            setAvailableDates(availableDates.filter((d) => d !== formattedDate));
        } else {
            setAvailableDates([...availableDates, formattedDate]);
        }
    };

    const tileClassName = ({ date }: { date: Date }) => {
        const formattedDate = date.toISOString().split('T')[0];
        if (availableDates.includes(formattedDate)) {
            return styles.availableDate;
        }
        if (formattedDate === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]) {
            return styles.currentDate;
        }
        return '';
    };

    const handleNavigate = (action: 'PREV' | 'NEXT') => {
        const newDate = new Date(value);
        if (action === 'PREV') {
            newDate.setMonth(value.getMonth() - 1);
        } else if (action === 'NEXT') {
            newDate.setMonth(value.getMonth() + 1);
        }
        setValue(newDate);
    };

    const handleToday = () => {
        setValue(new Date());
    };

    const handleMonthSelect = (month: number) => {
        const newDate = new Date(value);
        newDate.setMonth(month);
        setValue(newDate);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-start mt-4 divide-x">
                <div className="w-3/4 pr-10">
                    <CalendarToolbar
                        date={value}
                        onNavigate={handleNavigate}
                        onToday={handleToday}
                        onMonthSelect={handleMonthSelect}
                    />
                    <CustomHeader date={value} />
                    <Calendar
                        onChange={() => setValue}
                        value={value}
                        tileClassName={tileClassName}
                        onClickDay={handleDateChange}
                        showNavigation={false}
                        className={styles.reactCalendar}
                        formatShortWeekday={(_locale, date) => date.toLocaleString('default', { weekday: 'long' })}
                    />
                </div>
                <div className="w-1/4 pl-10">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Legend Key</h3>
                        <div className="flex items-center mt-2">
                            <span className={`${styles.legendKey} ${styles.availableDate}`}></span>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className={`${styles.legendKey} ${styles.currentDate}`}></span>
                            <span>Current date</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm text-gray-500">
                            Hint: Click on any date to toggle colors for your availability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;