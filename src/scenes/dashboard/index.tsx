import { useEffect, useState } from 'react';
import images from '@/constants/images';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const month = date.toLocaleString('default', { month: 'long' });
        setCurrentMonth(month);
    }, [date]);

    const events = [
        { date: new Date(2024, 8, 1), title: 'Event 1' },
        { date: new Date(2024, 8, 3), title: 'Event 2' },
        { date: new Date(2024, 8, 5), title: 'Event 3' },
        { date: new Date(2024, 8, 7), title: 'Event 4' },
        { date: new Date(2024, 8, 9), title: 'Event 5' }
    ];

    const notifications = [
        {
            icon: images.urgentIc,
            title: 'Urgent',
            message: 'You have been assigned a task!'
        },
        {
            icon: images.paymentIc,
            title: 'Payment processed',
            message: 'for Team C vs. Team D on [date]'
        }
    ];

    const upcomingGames = [
        {
            date: '1/1/23',
            time: '7PM',
            teams: 'Team A VS Team B',
            venue: 'BK Arena, Kigali'
        },
        {
            date: '3/1/23',
            time: '6PM',
            teams: 'Team A VS Team B',
            venue: 'BK Arena, Kigali'
        },
        {
            date: '5/1/23',
            time: '5PM',
            teams: 'Team A VS Team B',
            venue: 'BK Arena, Kigali'
        },
        {
            date: '7/1/23',
            time: '4PM',
            teams: 'Team A VS Team B',
            venue: 'BK Arena, Kigali'
        }
    ];

    const currentMonthEvents = events.filter(event => event.date.getMonth() === date.getMonth()).slice(0, 4);

    return (
        <div className="p-8 flex-1">
            <h1 className="text-3xl font-bold">Hi, Eric ISHIMWE</h1>
            <p className="text-gray-500">Welcome back to your Referee dashboard</p>

            <div className="flex mt-8 space-x-10">
                <div className="flex flex-1 flex-col">
                    {/* Upcoming Games table */}
                    <section className="flex-1">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Upcoming games</h2>
                            <a href="#" className="text-red-500">Full schedule</a>
                        </div>
                        <div className="bg-secondary-100 bg-opacity-5 rounded-lg shadow-md p-4 mt-4">
                            <table className="w-full">
                                <thead className="h-14 align-text-top">
                                    <tr className="text-left text-gray-500">
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Teams</th>
                                        <th>Venue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingGames.map((game, i) => (
                                        <tr key={i} className="">
                                            <td>{game.date}</td>
                                            <td>{game.time}</td>
                                            <td className="text-secondary-100">{game.teams}</td>
                                            <td>{game.venue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <span className="h-10"></span>

                    {/* Notifications */}
                    <section className="flex-1">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Notifications</h2>
                            <a href="#" className="text-red-500">See more</a>
                        </div>
                        {notifications.map((notification, i) => (
                            <div className="bg-secondary-100 bg-opacity-5 p-4 mt-4 rounded-lg shadow-md" key={i}>
                                <div className="flex items-center px-8 justify-between gap-4">
                                    <div className="inline-flex items-center">
                                        <img src={notification.icon} alt="Notification Icon" className="w-10 h-10 mr-3" />
                                        <p className="font-semibold">{notification.title}:</p>
                                        <span>{notification.message}</span>
                                    </div>
                                    <button className="bg-blue-500 text-white px-8 py-2 rounded-lg">View details</button>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                <div>
                    {/* Calendar */}
                    <section className="flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">{currentMonth} Events</h2>
                        <div className="flex flex-col justify-between">
                            {currentMonthEvents.map((event, i) => (
                                <div key={i} className="bg-secondary-100 text-xs bg-opacity-5 shadow-md rounded-lg px-4 py-2 mb-4">
                                    <h3 className="text-sm font-semibold">{event.title}</h3>
                                    <p className="text-gray-500">{event.date.toDateString()}</p>
                                </div>
                            ))}
                            <a href="#" className="text-red-500 mt-4">See Calendar</a>
                        </div>
                    </section>

                    {/* Recent officiated games */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Recent officiated games</h2>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;