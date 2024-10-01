import React, { useState } from 'react';
import EventDetailsModal from "@/components/EventDetailsModal.tsx";

interface Tournament {
    name: string;
    days: {
        date: string;
        games: Game[];
    }[];
}

export interface Game {
    '#': number;
    TIME: string;
    TEAM_A: string;
    TEAM_B: string;
    CATEG: string;
    COURT: string;
    REFEREE: string;
    UMPIRE_I: string;
    UMPIRE_II: string;
    SHOT_CLOCK: string;
    TIMER: string;
    ASS_SCORER: string;
    SCORER: string;
}

const tournaments: Tournament[] = [
    {
        name: 'RBL PLAYOFFS FINAL 2024',
        days: [
            {
                date: 'FRIDAY 20/09/2024',
                games: [
                    {
                        '#': 2,
                        TIME: '18:00',
                        TEAM_A: 'REG',
                        TEAM_B: 'KEPLER',
                        CATEG: 'M',
                        COURT: 'BK ARENA',
                        REFEREE: '',
                        UMPIRE_I: '',
                        UMPIRE_II: '',
                        SHOT_CLOCK: 'HABINEZA J',
                        TIMER: 'NDAYIZEYE J',
                        ASS_SCORER: 'UWAMAHORO O',
                        SCORER: 'KWIZERA C',
                    },
                    {
                        '#': 3,
                        TIME: '20:30',
                        TEAM_A: 'APR',
                        TEAM_B: 'PATRIOTS',
                        CATEG: 'M',
                        COURT: 'BK ARENA',
                        REFEREE: '',
                        UMPIRE_I: '',
                        UMPIRE_II: '',
                        SHOT_CLOCK: 'SAFARI JB',
                        TIMER: 'HAKIZIMANA S C',
                        ASS_SCORER: 'MUKESHIMANA C',
                        SCORER: 'SHIMWA J',
                    },
                ],
            },
            {
                date: 'SUNDAY 22/09/2024',
                games: [
                    {
                        '#': 4,
                        TIME: '15:00',
                        TEAM_A: 'KEPLER',
                        TEAM_B: 'REG',
                        CATEG: 'M',
                        COURT: 'BK ARENA',
                        REFEREE: '',
                        UMPIRE_I: '',
                        UMPIRE_II: '',
                        SHOT_CLOCK: 'NSHIMYUMUKIZA V',
                        TIMER: 'BASHEJA K',
                        ASS_SCORER: 'NYIRAMBARUBUKEYE S',
                        SCORER: 'IRAMBONA R',
                    },
                    {
                        '#': 5,
                        TIME: '18:00',
                        TEAM_A: 'PATRIOTS',
                        TEAM_B: 'APR',
                        CATEG: 'M',
                        COURT: 'BK ARENA',
                        REFEREE: '',
                        UMPIRE_I: '',
                        UMPIRE_II: '',
                        SHOT_CLOCK: 'NSHIMYUMUKIZA V',
                        TIMER: 'IRASUBIZA E',
                        ASS_SCORER: 'NYIRAMBARUBUKEYE S',
                        SCORER: 'SHIMWA J',
                    },
                ],
            },
        ],
    },
    {
        name: 'RWANDA CUP WOMEN FINALS',
        days: [
            {
                date: 'FRIDAY 20/09/2024',
                games: [
                    {
                        '#': 8,
                        TIME: '14:30',
                        TEAM_A: 'IPRC HUYE',
                        TEAM_B: 'KEPLER',
                        CATEG: 'W',
                        COURT: 'BK ARENA',
                        REFEREE: 'MUHIRWA C',
                        UMPIRE_I: 'TWIZEYIMANA D',
                        UMPIRE_II: 'KWIBUKA A',
                        SHOT_CLOCK: 'MUSHISHI P',
                        TIMER: 'MUHAVENIMANA H',
                        ASS_SCORER: 'TUYISHIME E',
                        SCORER: 'UWAMAHORO O',
                    },
                    {
                        '#': 9,
                        TIME: '16:30',
                        TEAM_A: 'REG',
                        TEAM_B: 'APR',
                        CATEG: 'W',
                        COURT: 'BK ARENA',
                        REFEREE: 'IKIREZI N S',
                        UMPIRE_I: 'MUKANDANGA O',
                        UMPIRE_II: 'DUSHIMIMANA A',
                        SHOT_CLOCK: 'MUSHISHI P',
                        TIMER: 'KAZAHURA M',
                        ASS_SCORER: 'ISHIMWE M',
                        SCORER: 'UWAMAHORO O',
                    },
                ],
            },
        ],
    },
    {
        name: 'RBL 2024',
        days: [
            {
                date: 'SUNDAY 22/09/2024',
                games: [
                    {
                        '#': 10,
                        TIME: '18:30',
                        TEAM_A: 'APR W',
                        TEAM_B: 'IPRC HUYE W',
                        CATEG: 'W',
                        COURT: 'LDK',
                        REFEREE: 'MUKANDANGA O',
                        UMPIRE_I: 'NDERERIMANA L',
                        UMPIRE_II: 'NSHIMYIMANA E',
                        SHOT_CLOCK: 'NDAYIZEYE J',
                        TIMER: 'KEZA G',
                        ASS_SCORER: '',
                        SCORER: 'NIZEYIMANA O',
                    },
                ],
            },
        ],
    },
    {
        name: 'ARPST',
        days: [
            {
                date: 'FRIDAY 13/09/2024',
                games: [
                    {
                        '#': 11,
                        TIME: '15:30',
                        TEAM_A: 'UR',
                        TEAM_B: 'CHUB',
                        CATEG: 'W',
                        COURT: 'KIST',
                        REFEREE: 'BIROORI Y',
                        UMPIRE_I: 'IRADUKUNDA C',
                        UMPIRE_II: '',
                        SHOT_CLOCK: '',
                        TIMER: '',
                        ASS_SCORER: '',
                        SCORER: 'SEMANZI M C',
                    },
                ],
            },
            {
                date: 'SATURDAY 14/09/2024',
                games: [
                    {
                        '#': 12,
                        TIME: '11:00',
                        TEAM_A: 'EQUITY',
                        TEAM_B: 'I&M BANK',
                        CATEG: 'M',
                        COURT: 'STECOL',
                        REFEREE: 'MFURAYURUKUNDA A',
                        UMPIRE_I: 'ISHIMWE K',
                        UMPIRE_II: '',
                        SHOT_CLOCK: '',
                        TIMER: '',
                        ASS_SCORER: '',
                        SCORER: 'UWINEZA S',
                    },
                ],
            },
        ],
    },
    {
        name: 'BNR TOURNAMENT',
        days: [
            {
                date: 'FRIDAY 20/09/2024',
                games: [
                    {
                        '#': 13,
                        TIME: '15:00',
                        TEAM_A: 'TEAM C',
                        TEAM_B: 'TEAM D',
                        CATEG: 'M',
                        COURT: 'CSK',
                        REFEREE: 'MANISHIMWE Y',
                        UMPIRE_I: 'HAKIZIMANA A',
                        UMPIRE_II: '',
                        SHOT_CLOCK: '',
                        TIMER: '',
                        ASS_SCORER: '',
                        SCORER: 'GWANEZAN N',
                    },
                ],
            },
        ],
    },
    {
        name: 'GASABO PRIVATE SCHOOL LEAGUE',
        days: [
            {
                date: 'FRIDAY 20/09/2024',
                games: [
                    {
                        '#': 14,
                        TIME: '16:30',
                        TEAM_A: 'GHA',
                        TEAM_B: 'WSA',
                        CATEG: 'Boys',
                        COURT: 'GHA',
                        REFEREE: 'USHINDI P',
                        UMPIRE_I: 'MBAZUMUTIMA A',
                        UMPIRE_II: '',
                        SHOT_CLOCK: '',
                        TIMER: '',
                        ASS_SCORER: '',
                        SCORER: 'UMWIZA K',
                    },
                    {
                        '#': 15,
                        TIME: '15:00',
                        TEAM_A: 'KCS',
                        TEAM_B: 'ISK',
                        CATEG: 'Boys',
                        COURT: 'KCS(Kibagaba)',
                        REFEREE: 'BUGINGO C',
                        UMPIRE_I: 'TWAGIRAYEZU A M',
                        UMPIRE_II: '',
                        SHOT_CLOCK: '',
                        TIMER: '',
                        ASS_SCORER: '',
                        SCORER: 'UMUMABARUNGU D',
                    },
                ],
            },
        ],
    },
];

const Schedule: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleRowClick = (game: Game) => {
        setSelectedGame(game);
    };

    const handleClosePopup = () => {
        setSelectedGame(null);
    };

    const arbitratorColumns = [
        'REFEREE',
        'UMPIRE_I',
        'UMPIRE_II',
        'SHOT_CLOCK',
        'TIMER',
        'ASS_SCORER',
        'SCORER',
    ];

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
                        <tr className="bg-secondary-100 bg-opacity-30 font-bold text-center" colSpan={8}>
                            <td colSpan={8} className="py-2 px-4">
                                {tournament.name}
                            </td>
                        </tr>
                        {tournament.days.map((day, dayIndex) => (
                            <React.Fragment key={dayIndex}>
                                <tr className="bg-[#E5ECF6] bg-opacity-50 font-bold text-center" colSpan={8}>
                                    <td colSpan={8} className="py-2 px-4">
                                        {day.date}
                                    </td>
                                </tr>
                                {day.games.map((game, gameIndex) => (
                                    <tr
                                        key={gameIndex}
                                        className="border-b border-blue-gray-200 cursor-pointer"
                                        onClick={() => handleRowClick(game)}
                                    >
                                        <td className="py-3 px-4">{game['#']}</td>
                                        <td className="py-3 px-4">{game.TIME}</td>
                                        <td className="py-3 px-4">{game.TEAM_A}</td>
                                        <td className="py-3 px-4">{game.TEAM_B}</td>
                                        <td className="py-3 px-4">{game.CATEG}</td>
                                        <td className="py-3 px-4">{game.COURT}</td>
                                        <td className="py-3 px-4 text-center">
                                            {arbitratorColumns.filter((column) => !!game[column]).length}
                                        </td>
                                        <td className={`${arbitratorColumns.filter((column) => !game[column]).length && 'bg-red-500 bg-opacity-30 font-bold'} py-3 px-4 text-center`}>
                                            {arbitratorColumns.filter((column) => !game[column]).length}
                                        </td>
                                    </tr>
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