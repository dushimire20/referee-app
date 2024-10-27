import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/assets/css/calendarStyles.css';
import CalendarToolbar from './CalendarToolbar';
import CustomHeader from './CustomHeader';
import axios from 'axios';

const CalendarPage: React.FC = () => {
  const [value, setValue] = useState(new Date());
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user object from localStorage
    }
  }, []);

  // Fetch availability once `user` is set
  useEffect(() => {
    if (user && user.userId) {  // Check if user and user.userId are defined
      axios
        .get('https://referee-backend.vercel.app/referee/getAvailability', {
          params: { refereeId: user.userId },
        })
        .then((response) => {
          // Convert each date to "YYYY-MM-DD" format
          const formattedDates = response.data.dates.map((date: string) =>
            new Date(date).toISOString().split('T')[0]
          );
          console.log("Formatted dates from backend:", formattedDates);
          setAvailableDates(formattedDates);
        })
        .catch((err) => {
          console.error('Error loading availability:', err);
        });
    }
  }, [user]); // This effect depends on `user`

  const handleDateChange = (date: Date) => {
    const formattedDate = date.toISOString().split('T')[0];
    if (availableDates.includes(formattedDate)) {
      setAvailableDates(availableDates.filter((d) => d !== formattedDate));
    } else {
      setAvailableDates([...availableDates, formattedDate]);
    }
  };

  const saveAvailability = () => {
    if (user && user.userId) {
      axios
        .post('https://referee-backend.vercel.app/referee/createAvailability', {
          refereeId: user.userId,
          dates: availableDates,
        })
        .then(() => {
          alert('Availability updated successfully!');
        })
        .catch((err) => {
          console.error('Error creating availability:', err);
          alert('Error creating availability');
        });
    } else {
      alert('User not logged in');
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    
    // Get today's date in "YYYY-MM-DD" format (normalized to midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayFormatted = today.toISOString().split('T')[0];
  
    if (availableDates.includes(formattedDate)) {
      return 'bg-[#95C639] text-white';
    }
    if (formattedDate === todayFormatted) {
      return 'bg-secondary-100 bg-opacity-30 text-black font-bold';
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
    <div className="p-8 flex justify-between items-start mt-4 space-x-8 divide-x">
      <div className="w-3/4">
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
          formatShortWeekday={(_locale, date) => date.toLocaleString('default', { weekday: 'long' })}
        />
        <button onClick={saveAvailability} className="btn-primary mt-4">
          Save Availability
        </button>
      </div>
      <div className="w-1/4 min-h-screen pl-8">
        <h3 className="text-xl font-bold">Legend Key</h3>
        <div className="flex items-center mt-2">
          <span className="w-6 h-6 bg-[#95C639] inline-block mr-2"></span>
          <span>Available</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="w-6 h-6 bg-secondary-100 bg-opacity-30 inline-block mr-2"></span>
          <span>Current date</span>
        </div>
        <p className="text-sm mt-8 text-gray-500">
          Hint: Click on any date to toggle colors for your availability.
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
