import React, {useState} from 'react';
import EventDetailsModal from "@/components/EventDetailsModal.tsx";
import {arbitratorRoles} from "@/data/usersRelatedData.ts";
import {Game, tournaments} from "@/data/gameRelatedData.ts";

const Schedule: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleRowClick = (game: Game) => {
        setSelectedGame(game);
    };

    const handleClosePopup = () => {
        setSelectedGame(null);
    };

    return (
        <div className="p-8 w-full overflow-x-auto inline-block align-middle">
            <h1 className="text-xl font-semibold text-start mb-5">Schedule</h1>
            <table className="w-full bg-white shadow-md rounded-xl overflow-hidden text-xs">
                <thead className="text-gray-700 bg-[#E5ECF6] overflow-x-auto">
                <tr>
                    <th className="py-3 px-4 text-left font-extralight">#</th>
                    <th className="py-3 px-4 text-left font-extralight">TIME</th>
                    <th className="py-3 px-4 text-left font-extralight">TEAM A</th>
                    <th className="py-3 px-4 text-left font-extralight">TEAM B</th>
                    <th className="py-3 px-4 text-left font-extralight">CATEG</th>
                    <th className="py-3 px-4 text-left font-extralight">COURT</th>
                    <th className="py-3 px-4 font-extralight">Arbitrators Assigned</th>
                    <th className="py-3 px-4 font-extralight text-red-500">Missing Arbitrators</th>
                </tr>
                </thead>
                <tbody className="text-blue-gray-900 overflow-x-auto">
                {tournaments.map((tournament, tournamentIndex) => (
                    <React.Fragment key={tournamentIndex}>
                        <tr className="bg-secondary-100 bg-opacity-30 font-bold col-span-8 text-center">
                            <td colSpan={8} className="py-2 px-4">
                                {tournament.name}
                            </td>
                        </tr>
                        {tournament.days.map((day, dayIndex) => (
                            <React.Fragment key={dayIndex}>
                                <tr className="bg-[#E5ECF6] bg-opacity-50 font-bold col-span-8 text-center">
                                    <td colSpan={8} className="py-2 px-4">
                                        {day.date}
                                    </td>
                                </tr>
                                {day.games.map((game, gameIndex) => (
                                    <React.Fragment>
                                        <tr
                                            key={gameIndex}
                                            className="border-b border-blue-gray-200 cursor-pointer"
                                            onClick={() => handleRowClick(game)}
                                        >
                                            <td className="py-3 px-4">{game.id}</td>
                                            <td className="py-3 px-4">{game.TIME}</td>
                                            <td className="py-3 px-4">{game.TEAM_A}</td>
                                            <td className="py-3 px-4">{game.TEAM_B}</td>
                                            <td className="py-3 px-4">{game.CATEG}</td>
                                            <td className="py-3 px-4">{game.COURT}</td>
                                            <td className="py-3 px-4 text-center">
                                                {arbitratorRoles.filter((column) => !!game[column]).length}
                                            </td>
                                            <td className={`${arbitratorRoles.filter((column) => !game[column]).length && 'bg-red-500 bg-opacity-30 font-bold'} py-3 px-4 text-center`}>
                                                {arbitratorRoles.filter((column) => !game[column]).length}
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
            {selectedGame && (
                <EventDetailsModal game={selectedGame} onClose={handleClosePopup}/>
            )}
        </div>
    );
};

export default Schedule;