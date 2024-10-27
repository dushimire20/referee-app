import {useEffect, useState} from 'react';
import images from '@/constants/images';
import {Link} from "react-router-dom";
import axios from 'axios';


const DashboardHome = () => {
    const [date] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState('');
    const [user, setUser] = useState<any>(null); // Use a specific type if you have it

    const [games, setGames] = useState<Game[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const month = date.toLocaleString('default', {month: 'long'});
        setCurrentMonth(month);
    }, [date]);

    useEffect(() => {
        // Get the user from localStorage when the component mounts
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Parse the JSON stored in localStorage
        }

        const fetchDashboardData = async () => {
            try {
              const response = await axios.get('http://localhost:3000/referee/refereeDashboard');
             console.log('Fetched games:', response.data.games); // Log the games to check structure
              setGames(response.data.games);
              setTeams(response.data.teams);
            } catch (error) {
              console.error('Error fetching dashboard data:', error);
            }
          };

        fetchDashboardData();       
      }, []);

      const upcomingGames = games.filter(game => game.status === 'upcoming');

    const events = [
        {date: new Date(2024, 8, 1), title: 'Event 1'},
        {date: new Date(2024, 8, 3), title: 'Event 2'},
        {date: new Date(2024, 8, 5), title: 'Event 3'},
        {date: new Date(2024, 8, 7), title: 'Event 4'},
        {date: new Date(2024, 8, 9), title: 'Event 5'}
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



    const currentMonthEvents = events.filter(event => event.date.getMonth() === date.getMonth()).slice(0, 4);

    return (
        <div className="p-8 flex-1">
            <h1 className="text-3xl font-bold">Hi, {user ? user.lastName : "Guest"} </h1>
            <p className="text-gray-500">Welcome back to your Referee dashboard</p>

            <div className="flex flex-col lg:flex-row mt-8 space-y-6 lg:space-x-10 lg:space-y-0">
                <div className="flex flex-1 flex-col">
                    {/* Upcoming Games table */}
                    <section className="flex-1">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Upcoming games</h2>
                            <Link to="/dashboard/schedule" className="text-red-500">Full schedule</Link>
                        </div>
                        <div className="bg-secondary-100 bg-opacity-5 rounded-lg shadow-md p-4 mt-4 overflow-x-auto">
                            <table className="w-full text-sm">
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
                                        <td>{new Date(game.date).toLocaleDateString()}</td>
                                        <td>{game.time}</td>
                                        <td className="text-secondary-100">
                                        {game.teamA} Vs {game.teamB}
                                        </td>
                                        <td>{game.court}</td>
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
                            <div className="bg-secondary-100 text-sm bg-opacity-5 p-4 mt-4 rounded-lg shadow-md"
                                 key={i}>
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-8 justify-between gap-4">
                                    <div className="flex items-center">
                                        <img src={notification.icon} alt="Notification Icon"
                                             className="w-10 h-10 mr-3"/>
                                        <div>
                                            <p className="font-semibold">{notification.title}:</p>
                                            <span>{notification.message}</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 sm:mt-0">View
                                        details
                                    </button>
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
                                <div key={i}
                                     className="bg-secondary-100 text-xs bg-opacity-5 shadow-md rounded-lg px-4 py-2 mb-4">
                                    <h3 className="text-sm font-semibold">{event.title}</h3>
                                    <p className="text-gray-500">{event.date.toDateString()}</p>
                                </div>
                            ))}
                            <Link to="/dashboard/availability" className="text-red-500 mt-4">See Calendar</Link>
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