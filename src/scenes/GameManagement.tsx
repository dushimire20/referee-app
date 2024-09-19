import React from "react";
import {FaEdit, FaTrash, FaExternalLinkAlt} from "react-icons/fa";

type Game = {
    id: string;
    teams: string;
    dateTime: string;
    location: string;
    status: string;
    score: string;
};

type Tournament = {
    id: string;
    name: string;
    dateRange: string;
    teams: number;
    image: string;
};

const games: Game[] = [
    {
        id: "G001",
        teams: "Team A VS Team B",
        dateTime: "MM/DD/YYYY 14:00",
        location: "KK Arena",
        status: "Ongoing",
        score: "Team A: 2 - 1 Team B",
    },
    {
        id: "G002",
        teams: "Team C VS Team D",
        dateTime: "MM/DD/YYYY 16:00",
        location: "BK Arena",
        status: "Upcoming",
        score: "Null",
    },
    {
        id: "G003",
        teams: "Team E VS Team F",
        dateTime: "MM/DD/YYYY 14:00",
        location: "KK Arena",
        status: "Completed",
        score: "Team E: 1 - 0 Team F",
    }
];

const tournaments: Tournament[] = [
    {
        id: "T001",
        name: "Rwanda Basketball League",
        dateRange: "MM/DD/YYYY - MM/DD/YYYY 14:00",
        teams: 16,
        image: "https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "T002",
        name: "Rwanda Basketball League - RBL",
        dateRange: "MM/DD/YYYY - MM/DD/YYYY 14:00",
        teams: 16,
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const GameManagement: React.FC = () => {
    return (
        <div className="container mx-auto p-8 flex space-x-8 divide-x">
            <div className="w-2/3">
                {/* Game Management Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Game management</h1>
                    <button className="bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                        Add a game +
                    </button>
                </div>

                {/* Game Management Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {games.map((game, index) => (
                        <div className="bg-secondary-100 bg-opacity-5 p-4 rounded-lg shadow-md text-xs">
                            <p className="mb-6">
                                <span className="text-secondary-100">Game ID:</span> {game.id}
                            </p>
                            <div
                                key={index}
                                className="flex justify-between items-center"
                            >
                                <div className="flex justify-around items-center w-11/12">
                                    <div className="w-1/2 space-y-4">
                                        <p>
                                            <span className="text-secondary-100">Teams:</span> {game.teams}
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Date and Time:</span> {game.dateTime}
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Location:</span> {game.location}
                                        </p>
                                    </div>
                                    <div className="w-1/2 space-y-4">

                                        <p>
                                            <span className="text-secondary-100">Status:</span> {game.status}
                                        </p>
                                        <p>
                                            <span className="text-secondary-100">Score:</span> {game.score}
                                        </p>
                                        <p className="flex items-center cursor-pointer text-secondary-100 space-x-2">
                                            <span>Referees in Charge</span>

                                            <FaExternalLinkAlt/>
                                        </p>
                                    </div>
                                </div>
                                <div className="space-x-4 w-1/12">
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
            <div className="mt-14 pl-8 w-1/3">
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
                            <div className="absolute -z-[2] w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="flex flex-col text-xs space-y-4 px-8 pb-2">
                                <p className="font-semibold text-sm">{tournament.name}</p>
                                <p>{tournament.dateRange}</p>
                                <p>{tournament.teams} teams</p>
                            </div>
                            <div className="absolute h-10 w-10 top-4 right-4 ml-auto bg-black rounded-full bg-opacity-10 flex items-center justify-center backdrop-filter backdrop-blur">
                                <button className="text-white hover:text-blue-700">
                                    <FaExternalLinkAlt/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="bg-secondary-100 text-white px-6 py-3 text-sm rounded-xl hover:bg-opacity-70">
                        Create new tournament +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameManagement;
