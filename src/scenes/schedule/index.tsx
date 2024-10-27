import React, { useEffect, useState } from 'react';
import EventDetailsModal from "@/components/EventDetailsModal.tsx";
import axios from 'axios';

const Schedule: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const[games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await axios.get('https://referee-backend.vercel.app/referee/refereeDashboard');
        console.log('Fetched data:', response.data);
        setTournaments(response.data.tournaments || []); // Ensure it defaults to an empty array if not found
        setGames(response.data.games || []); // Ensure it defaults to an empty array if not found
      } catch (error) {
        console.error("Error fetching schedule data: ", error);
      }
    };
    fetchScheduleData();
  }, []);

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
        <thead className="text-gray-700 bg-[#E5ECF6]">
          <tr>
            <th className="py-3 px-4 text-left font-extralight">#</th>
            <th className="py-3 px-4 text-left font-extralight">TIME</th>
            <th className="py-3 px-4 text-left font-extralight">TEAM A</th>
            <th className="py-3 px-4 text-left font-extralight">TEAM B</th>
            <th className="py-3 px-4 text-left font-extralight">CATEG</th>
            <th className="py-3 px-4 text-left font-extralight">COURT</th>
            <th className="py-3 px-4 font-extralight">Referee</th>
            <th className="py-3 px-4 font-extralight">Scorer</th>
            <th className="py-3 px-4 font-extralight">ASS. Score</th>
            <th className="py-3 px-4 font-extralight">Timer</th>
            <th className="py-3 px-4 font-extralight">Umpire I</th>
            <th className="py-3 px-4 font-extralight">Umpire I</th>
            <th className="py-3 px-4 font-extralight">Short Clock</th>
          </tr>
        </thead>
        <tbody className="text-blue-gray-900 ">
          {tournaments.map((tournament, tournamentIndex) => (
            <React.Fragment key={tournamentIndex}>
              <tr className="bg-secondary-100 bg-opacity-30 font-bold col-span-13 text-center ">
                <td colSpan={13} className="py-2 px-4">
                  {tournament.name}
                </td>
              </tr>
              {games.map((game, gameIndex) => (
                <tr
                  key={gameIndex}
                  className="border-b border-blue-gray-200 cursor-pointer"
                  onClick={() => handleRowClick(game)}
                >
                  <td className="py-3 px-4">{gameIndex + 1}</td>
                  <td className="py-3 px-4">{game.time}</td>
                  <td className="py-3 px-4">{game.teamA}</td>
                  <td className="py-3 px-4">{game.teamB}</td>
                  <td className="py-3 px-4">{game.category}</td>
                  <td className="py-3 px-4">{game.court}</td>
                  <td className="py-3 px-4">{game.referee}</td>
                  <td className="py-3 px-4">{game.scorer}</td>
                  <td className="py-3 px-4">{game.assistantScorer}</td>
                  <td className="py-3 px-4">{game.timer}</td>
                  <td className="py-3 px-4">{game.umpire1}</td>
                  <td className="py-3 px-4">{game.umpire2}</td>
                  <td className="py-3 px-4">{game.shotClock}</td>
                 
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {selectedGame && (
        <EventDetailsModal game={selectedGame} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Schedule;
