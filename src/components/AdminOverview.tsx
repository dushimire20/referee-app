// Constants for distribution ranges
import React from "react";
import {FaUser} from 'react-icons/fa';

const LOW = 30;
const MEDIUM = 50;

// Data arrays
const upcomingGames = [
    {date: '1/1/23', time: '7PM', teams: 'Team A VS Team B', venue: 'BK Arena, Kigali'},
    {date: '3/1/23', time: '6PM', teams: 'Team A VS Team B', venue: 'BK Arena, Kigali'},
    {date: '5/1/23', time: '5PM', teams: 'Team A VS Team B', venue: 'BK Arena, Kigali'},
    {date: '7/1/23', time: '4PM', teams: 'Team A VS Team B', venue: 'BK Arena, Kigali'},
];

const referees = [
    {name: 'Eric HABIMANA', status: 'Available', avatar: 'https://via.placeholder.com/50'},
    {name: 'John KALISA', status: 'Available', avatar: 'https://via.placeholder.com/50'},
    {name: 'Emmy IZERE', status: 'Available', avatar: 'https://via.placeholder.com/50'},
    {name: 'Olivier RUKUNDO', status: 'Available', avatar: 'https://via.placeholder.com/50'},
    {name: 'Jimmy KAREMERA', status: 'Available', avatar: 'https://via.placeholder.com/50'},
];

// Reusable Distribution Component
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

const AdminOverview = () => {
    return (
        <div className="p-8 flex divide-x space-x-8">
            <div className="w-3/4">

                {/* Dashboard Overview */}
                <div className="flex space-x-8 text-sm mb-8">
                    <div className="p-6 bg-[#E3F5FF] rounded-2xl">
                        <span className="text-secondary-100">33</span>
                        <p>Ongoing games</p>
                    </div>
                    <div className="p-6 bg-[#E5ECF6] rounded-2xl">
                        <span className="text-secondary-100">21</span>
                        <p>Completed games</p>
                    </div>
                    <div className="p-6 bg-[#E3F5FF] rounded-2xl">
                        <span className="text-secondary-100">21</span>
                        <p>Today's Assignments</p>
                    </div>
                </div>

                {/* Game Status Distribution */}
                <div className="mb-8 space-y-4">
                    <h2 className="font-bold mb-4">Game Status Distribution</h2>
                    <StatusDistribution label="Upcoming games" number={23}/>
                    <StatusDistribution label="Ongoing games" number={44}/>
                    <StatusDistribution label="Completed games" number={77}/>
                </div>

                {/* Upcoming Games */}
                <div className="mb-8">
                    <h2 className="font-bold mb-4 flex justify-between items-center">
                        Upcoming Games
                        <span className="text-red-500 cursor-pointer">Manage games</span>
                    </h2>
                    <div className="bg-secondary-100 text-sm bg-opacity-5 rounded-lg shadow-md p-4 mt-4">
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
                                    <td>{game.date}</td>
                                    <td>{game.time}</td>
                                    <td className="text-secondary-100">{game.teams}</td>
                                    <td>{game.venue}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Available Referees */}
            <div className="pl-8 w-1/4">
                <h2 className="font-bold mb-4">Available Referees</h2>
                <ul className="space-y-5 text-sm spay">
                    {referees.map((referee, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FaUser size={30}
                                        className="rounded-full w-10 h-10 py-2 bg-secondary-100 bg-opacity-5"/>
                                <div className="flex flex-col">
                                    <span>{referee.name}</span>
                                    <span className="text-gray-400">{referee.status}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 text-red-500 cursor-pointer">Manage referees</div>
            </div>
        </div>
    )
}

export default AdminOverview