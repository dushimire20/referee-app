import React, {useEffect, useState} from "react";
import {FaEdit, FaTrash, FaExternalLinkAlt} from "react-icons/fa";
import CreateGameModal from "@/components/CreateGameModal.tsx";
import CreateTournamentModal from "@/components/CreateTournamentModal.tsx";
import axios from "axios";
import { Referee } from "@/data/usersRelatedData";
import {FaXmark} from "react-icons/fa6";

// New interface I created
interface Team {
  id: number;
  name: string;
}

// Feel free to remove these teams, uzisimbuze iza backend
const localTeams: Team[] = [
  { id: 1, name: 'Lakers' },
  { id: 2, name: 'Warriors' },
  { id: 3, name: 'Celtics' },
  { id: 4, name: 'Bulls' },
  { id: 5, name: 'Heat' },
  { id: 6, name: 'Spurs' },
  { id: 7, name: 'Nets' },
  { id: 8, name: 'Clippers' },
  { id: 9, name: 'Raptors' },
  { id: 10, name: 'Mavericks' },
];

// Modals you will need (they are 3)
function CreateTeamModal({ onClose, onAdd, onEdit }) {
    const [team, setTeam] = useState({ id: 0, name: '' });

    const handleInputChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (team.id === 0) {
        onAdd({ ...team, id: Math.floor(Math.random() * 100) });
        } else {
        onEdit(team);
        }
        onClose();
    };

    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        <div className="bg-white p-4 sm:p-8 md:p-16 relative rounded-lg text-sm shadow-lg w-[95vw] sm:w-[60vw] md:w-1/3 space-y-4 max-h-screen max-w-[90vw] overflow-y-auto">
            <button onClick={onClose} className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
            <FaXmark />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add a team</h2>
            <div className="flex flex-col space-y-4">
            <input
                type="text"
                name="name"
                value={team.name}
                onChange={handleInputChange}
                placeholder="Team name"
                className="p-2 border border-gray-300 rounded-md"
            />
            <button onClick={handleSave} className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                Save
            </button>
            </div>
        </div>
        </div>
    );
}

function TeamsModal({ teams, onClose, onEdit, onDelete }) {
    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div className="bg-white p-4 sm:p-8 md:p-16 relative rounded-lg text-sm shadow-lg w-[95vw] sm:w-[60vw] md:w-1/3 space-y-4 max-h-screen max-w-[90vw] overflow-y-auto">
                <button onClick={onClose} className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark />
                </button>
                <h2 className="text-xl font-semibold mb-4">Teams List</h2>
                <div className="flex flex-col space-y-4">
                    {teams.map((team) => (
                        <div key={team.id} className="flex justify-between items-center">
                            <span>{team.name}</span>
                            <div className="flex space-x-4">
                                <button onClick={() => onEdit(team)} className="text-green-500 hover:text-green-700">
                                    <FaEdit />
                                </button>
                                <button onClick={() => onDelete(team)} className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function EditTeamModal({ team, onClose, onSave }) {
    const [editedTeam, setEditedTeam] = useState(team);

    const handleInputChange = (e) => {
        setEditedTeam({ ...editedTeam, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onSave(editedTeam);
        onClose();
    };

    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div className="bg-white p-4 sm:p-8 md:p-16 relative rounded-lg text-sm shadow-lg w-[95vw] sm:w-[60vw] md:w-1/3 space-y-4 max-h-screen max-w-[90vw] overflow-y-auto">
                <button onClick={onClose} className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark />
                </button>
                <h2 className="text-xl font-semibold mb-4">Edit team</h2>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={editedTeam.name}
                        onChange={handleInputChange}
                        placeholder="Team name"
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <button onClick={handleSave} className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

const GameManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTournamentModalOpen, setIsTournamentModalOpen] = useState(false);
    // New States starts here
    const [allLocalTeams, setAllLocalTeams] = useState<Team[]>(localTeams);
    const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false);
    const [teamToEdit, setTeamToEdit] = useState<Team | null>(null);
    const [isTeamToEditOpen, setIsTeamToEditOpen] = useState(false);
    const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);

    const openCreateTeamModal = () => {
        setIsCreateTeamModalOpen(true);
    }

    const closeCreateTeamModal = () => {
        setIsCreateTeamModalOpen(false);
    }

    const openTeamsModal = () => {
        setIsTeamsModalOpen(true);
    }

    const closeTeamsModal = () => {
        setIsTeamsModalOpen(false);
    }

    const handleEditTeam = (team: Team) => {
        setTeamToEdit(team);
        setIsTeamToEditOpen(true);
    }

    const handleDeleteTeam = (team: Team) => {
        if (window.confirm(`Are you sure you want to delete ${team.name}?`)) {
            deleteTeam(team);
        }
    };

    const addTeam = (team: Team) => {
        setAllLocalTeams([...allLocalTeams, team]);
    }

    const deleteTeam = (team: Team) => {
        setAllLocalTeams(allLocalTeams.filter(t => t.id !== team.id));
    }

    const editTeam = (team: Team) => {
        setAllLocalTeams(allLocalTeams.map(t => t.id === team.id ? team : t));
    }

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
    const [teams, setTeams] = useState<Team[]>([]);
    const [tournaments, setTournaments] = useState<Tournament[]>([]);

    // Fetch upcomming games from the backend

    useEffect( () => {

        const fetchDashboardData = async () => {
            try {
              const response = await axios.get('https://referee-backend.vercel.app/adminDashboard/dashboard');
             console.log('Fetched games:', response.data.games); // Log the games to check structure
              setGames(response.data.games);
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
                {/* Teams Management */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl text-center font-semibold mb-2 md:mb-0">Teams management</h1>
                    <button onClick={openCreateTeamModal}
                            className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        Add a team +
                    </button>
                </div>
                {isCreateTeamModalOpen && <CreateTeamModal onClose={closeCreateTeamModal} onAdd={addTeam} onEdit={editTeam}/>}

                {/* Teams Management Card giving hint of how many teams were registered and open a modal onclick containing full list */}
                <div className="bg-secondary-100 bg-opacity-5 p-4 rounded-lg shadow-md text-xs mb-4">
                    <p className="mb-6">
                        <span className="text-secondary-100">Teams registered:</span> {allLocalTeams.length}
                    </p>
                    <button onClick={openTeamsModal}
                            className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        View all teams
                    </button>
                </div>
                {isTeamsModalOpen && (
                    <TeamsModal
                        teams={allLocalTeams}
                        onClose={closeTeamsModal}
                        onEdit={handleEditTeam}
                        onDelete={handleDeleteTeam}
                    />
                )}
                {isTeamToEditOpen && (
                    <EditTeamModal
                        team={teamToEdit}
                        onClose={() => setIsTeamToEditOpen(false)}
                        onSave={editTeam}
                    />
                )}

                {/* Game Management Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl text-center font-semibold mb-2 md:mb-0">Game management</h1>
                    <button onClick={openModal}
                            className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        Add a game +
                    </button>
                </div>
                {isModalOpen && <CreateGameModal onClose={closeModal}/>}

                {/* Game Management Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {games.map((game, index) => (
                        <div key={index} className="bg-secondary-100 bg-opacity-5 p-4 rounded-lg shadow-md text-xs">
                            <p className="mb-6">
                                <span className="text-secondary-100">Game ID:</span> {game._id}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                                <div
                                    className="flex flex-col sm:flex-row justify-around items-center w-full sm:w-11/12 space-y-4 sm:space-y-0">
                                    <div className="w-full sm:w-1/2 space-y-4">
                                        <p>
                                            <span className="text-secondary-100">Teams: </span>
                                            {game.teamA} Vs {game.teamB}
                                        </p>
                                        <p>
                                            <span
                                                className="text-secondary-100">Date and Time:</span> {new Date(game.date).toLocaleDateString()} {game.time}
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
                                            <span className="text-secondary-100">Score:</span>
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
                                src={tournament.tournamentPicture}
                                alt={tournament.name}
                                className="absolute w-full h-full object-cover -z-10"
                            />
                            <div
                                className="absolute -z-[2] w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="flex flex-col text-xs space-y-4 px-8 pb-2">
                                <p className="font-semibold text-sm">{tournament.name}</p>
                                <p>{tournament.duration}</p>
                                <p>{tournament.gameCost} RWF</p>
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
