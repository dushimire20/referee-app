import React, {useEffect, useState} from "react";
import {FaEdit, FaTrash, FaExternalLinkAlt} from "react-icons/fa";
import CreateGameModal from "@/components/CreateGameModal.tsx";
import {allGames, Game, tournaments} from "@/data/gameRelatedData.ts";
import CreateTournamentModal from "@/components/CreateTournamentModal.tsx";
import axios from "axios";
import { Referee } from "@/data/usersRelatedData";



const GameManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTournamentModalOpen, setIsTournamentModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };
    const openTournamentModal = () => {
        setIsTournamentModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const closeTournamentModal = () => {
        setIsTournamentModalOpen(false);
    };

    // backend
    const [games, setGames] = useState<Game[]>([]);
    const [referees, setReferees] = useState<Referee[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [tournaments, setTournaments] = useState<Tournament[]>([]);

    // Fetch upcomming games from the backend

    useEffect( () => {

        const fetchDashboardData = async () => {
            try {
              const response = await axios.get('http://localhost:3000/adminDashboard/dashboard');
             console.log('Fetched games:', response.data.games); // Log the games to check structure
              setGames(response.data.games);
              setReferees(response.data.referees);
              setTeams(response.data.teams);
              setTournaments(response.data.tournaments);
            } catch (error) {
              console.error('Error fetching dashboard data:', error);
            }
          };

        fetchDashboardData();       
    }, []); // Empty depandacy array ensures this runs only when the component mounts

    return (
        <div
            className="container mx-auto p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:divide-x">
            <div className="w-full md:w-2/3">
                {/* Game Management Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl text-center font-semibold mb-2 md:mb-0">Game management</h1>
                    <button onClick={openModal}
                            className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        Add a game +
                    </button>
                </div>
                {isModalOpen && <CreateGameModal onClose={closeModal} />}

                {/* Game Management Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {games.map((game, index) => (
                        <div key={index} className="bg-secondary-100 bg-opacity-5 p-4 rounded-lg shadow-md text-xs">
                            <p className="mb-6">
                                <span className="text-secondary-100">Game ID:</span> {game.id}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                                <div
                                    className="flex flex-col sm:flex-row justify-around items-center w-full sm:w-11/12 space-y-4 sm:space-y-0">
                                    <div className="w-full sm:w-1/2 space-y-4">
                                        <p>
                                            <span className="text-secondary-100">Teams: </span> 
                                            {game.teams.map(teamId => {
                                        const team = teams.find(t => t._id === teamId);
                                        return team ? team.name : 'Unknown Team'; // Fallback if team not found
                                        }).join(' VS ')}
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Date and Time:</span> {new Date(game.date).toLocaleDateString()} {game.time} 
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Location:</span> {game.court}
                                        </p>
                                    </div>
                                    <div className="w-full sm:w-1/2 space-y-4">
                                        <p>
                                            <span className="text-secondary-100">Status:</span> {game.status}
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Score:</span> {game.SCORES}
                                        </p>
                                        <p className="flex items-center cursor-pointer text-secondary-100 space-x-2">
                                            <span>Referees in Charge</span>
                                            <FaExternalLinkAlt/>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-4 w-full sm:w-1/12 mt-4 sm:mt-0">
                                    <button className="text-green-500 hover:text-green-700">
                                        <FaEdit/>
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Active Tournaments */}
            <div className="w-full md:w-1/3 mt-8 md:mt-0 pl-0 md:pl-8">
                <h2 className="text-2xl font-semibold mb-4">Active Tournaments</h2>
                <div className="flex flex-col gap-4">
                    {tournaments.map((tournament, index) => (
                        <div
                            key={index}
                            className="relative h-52 text-white rounded-2xl shadow-md flex items-end overflow-hidden"
                        >
                            <img
                                src={tournament.image}
                                alt={tournament.name}
                                className="absolute w-full h-full object-cover -z-10"
                            />
                            <div
                                className="absolute -z-[2] w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="flex flex-col text-xs space-y-4 px-8 pb-2">
                                <p className="font-semibold text-sm">{tournament.name}</p>
                                <p>{tournament.year}</p>
                                <p>{tournament.teams.length} teams</p>
                            </div>
                            <div className="absolute top-2 right-2 ml-auto">
                                <button
                                    className="text-white h-10 w-10 flex items-center justify-center rounded-xl bg-black bg-opacity-10 hover:bg-opacity-50 backdrop-filter backdrop-blur">
                                    <FaExternalLinkAlt/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <button onClick={openTournamentModal} className="bg-secondary-100 text-white px-6 py-3 text-sm rounded-xl hover:bg-opacity-70">
                        Create new tournament +
                    </button>
                </div>
                {isTournamentModalOpen && <CreateTournamentModal onClose={closeTournamentModal} />}
            </div>
        </div>
    );
};

export default GameManagement;
