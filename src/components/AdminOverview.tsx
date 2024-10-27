import React, { useEffect, useState } from "react";
import {FaUser} from 'react-icons/fa';
import {Link} from "react-router-dom";
import axios from "axios";


// Constants for distribution ranges
const LOW = 30;
const MEDIUM = 50;

const StatusDistribution: React.FC<{ label: string, number: number }> = ({label, number}) => {
    let color = 'bg-[#BB8095]';
    if (number > LOW && number <= MEDIUM) color = 'bg-[#E3F5FF]';
    if (number > MEDIUM) color = 'bg-[#E5ECF6]';

    const width = `${number}%`;

    return (
        <div className="flex items-center justify-between text-sm">
            <span className="w-36">{label}</span>
            <div className="inline-flex items-center flex-1 mx-4">
                <div className={`h-6 rounded ${color}`} style={{width}}></div>
                <span className="ml-5 text-sm">{number}</span>
            </div>
        </div>
    );
};


const AdminOverview: React.FC = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [referees, setReferees] = useState<Referee[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);


    // Fetch upcomming games from the backend

    useEffect( () => {

        const fetchDashboardData = async () => {
            try {
              const response = await axios.get('https://referee-backend.vercel.app/adminDashboard/dashboard');
             console.log('Fetched games:', response.data.availabilities); // Log the games to check structure
              setGames(response.data.games);
              setReferees(response.data.referees);
              setTeams(response.data.teams);
            } catch (error) {
              console.error('Error fetching dashboard data:', error);
            }
          };

        fetchDashboardData();       
    }, []); // Empty depandacy array ensures this runs only when the component mounts

    // Filter games by status
  const upcomingGames = games.filter(game => game.status === 'upcoming');
  const ongoingGames = games.filter(game => game.status === 'ongoing');
  const completedGames = games.filter(game => game.status === 'completed');
  

    return (
        <div
            className="p-8 flex flex-col md:flex-row md:divide-x space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-3/4">

                {/* Dashboard Overview */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm mb-8">
                    <div className="p-6 bg-[#E3F5FF] rounded-2xl">
                        <span className="text-secondary-100">{ongoingGames.length}</span>
                        <p>Ongoing games</p>
                    </div>
                    <div className="p-6 bg-[#E5ECF6] rounded-2xl">
                        <span className="text-secondary-100">{completedGames.length}</span>
                        <p>Completed games</p>
                    </div>
                    <div className="p-6 bg-[#E3F5FF] rounded-2xl">
                        <span className="text-secondary-100">{upcomingGames.length}</span>
                        <p>Upcoming Games</p>
                    </div>
                </div>

                {/* Game Status Distribution */}
                <div className="mb-8 space-y-4">
                    <h2 className="font-bold mb-4">Game Status Distribution</h2>
                    <StatusDistribution label="Upcoming games" number={upcomingGames.length}/>
                    <StatusDistribution label="Ongoing games" number={ongoingGames.length}/>
                    <StatusDistribution label="Completed games" number={completedGames.length}/>
                </div>

                {/* Upcoming Games */}
                <div className="mb-8">
                    <h2 className="font-bold mb-4 flex justify-between items-center">
                        Upcoming Games
                        <Link to="/admin/games" className="text-red-500 font-medium cursor-pointer">Manage games</Link>
                    </h2>
                    <div
                        className="bg-secondary-100 text-sm bg-opacity-5 rounded-lg shadow-md p-4 mt-4 overflow-x-auto">
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
                            {upcomingGames.map((game, index) => (
                                <tr key={index} className="">
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
                </div>
            </div>

            {/* Available Referees */}
            <div className="w-full md:w-1/4 pl-0 md:pl-8">
                <h2 className="font-bold mb-4">Available Referees</h2>
                <ul className="space-y-5 text-sm spay mb-4">
                    {referees.map((referee, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FaUser size={30}
                                        className="rounded-full w-10 h-10 py-2 bg-secondary-100 bg-opacity-5"/>
                                <div className="flex flex-col">
                                    <span>
                                        {referee.firstName}
                                        
                                        </span>
                                    <span className="text-gray-400">
                                         {referee.lastName}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/admin/referees" className="text-red-500 cursor-pointer">Manage referees</Link>
            </div>
        </div>
    )
}

export default AdminOverview