import { useState } from 'react';
import { Calendar, momentLocalizer, Event, NavigateAction, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from '../../components/CustomToolbar'; // Adjust the import path as necessary

const localizer = momentLocalizer(moment);

interface ScheduleEvent extends Event {
    title: string;
    start: Date;
    end: Date;
    location: string;
}

const events: ScheduleEvent[] = [
    {
        title: 'Team A VS Team B',
        start: new Date(2024, 8, 16, 4, 0),
        end: new Date(2024, 8, 16, 7, 0),
        location: 'BK Arena, Kigali',
    },
    {
        title: 'Team A VS Team B',
        start: new Date(2024, 8, 17, 5, 0),
        end: new Date(2024, 8, 17, 8, 0),
        location: 'BK Arena, Kigali',
    },
    {
        title: 'Team A VS Team B',
        start: new Date(2024, 8, 18, 4, 0),
        end: new Date(2024, 8, 18, 9, 0),
        location: 'BK Arena, Kigali',
    },
    {
        title: 'Team A VS Team B',
        start: new Date(2024, 8, 19, 7, 0),
        end: new Date(2024, 8, 19, 9, 0),
        location: 'BK Arena, Kigali',
    },
];

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState<View>('week');

    const handleNavigate = (action: NavigateAction) => {
        const newDate = new Date(date);
        if (action === 'PREV') {
            newDate.setDate(date.getDate() - 7);
        } else if (action === 'NEXT') {
            newDate.setDate(date.getDate() + 7);
        }
        setDate(newDate);
    };

    const CustomDayHeader = ({ label }: { label: string }) => {
        const [day, date] = label.split('\n');
        return (
            <div className="items-center text-center font-medium text-lg">
                <div className="text-gray-400">{day}</div>
                <div>{date}</div>
            </div>
        );
    };

    return (
        <div className="p-8 flex-1">
            <h1 className="text-xl font-semibold text-start mt-5">My Schedule</h1>
            <CustomToolbar
                date={date}
                onNavigate={handleNavigate}
                view={view}
                views={['week']}
                label={localizer.format(date, 'MMMM yyyy')}
                localizer={localizer}
                onView={setView}
            />
            <div className="my-calendar mx-auto mt-2">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    className="rounded-xl bg-secondary-100 bg-opacity-5 border-none text-gray-700"
                    style={{ height: 500 }}
                    defaultView="week"
                    views={['week']}
                    date={date}
                    onNavigate={setDate}
                    onView={setView}
                    components={{
                        event: (eventProps) => (
                            <div className="p-2 rounded-lg text-white text-xs">
                                <strong>{eventProps.title}</strong>
                                <div className="text-sm">{eventProps.event.location}</div>
                            </div>
                        ),
                        header: CustomDayHeader,
                        toolbar: () => <span className="h-4"></span>,
                    }}
                    formats={{
                        timeGutterFormat: 'HH:mm',
                        dayFormat: (date, culture, localizer) =>
                            localizer!.format(date, 'ddd DD', culture).replace(' ', '\n'),
                    }}
                />
            </div>
        </div>
    );
}

export default Schedule;