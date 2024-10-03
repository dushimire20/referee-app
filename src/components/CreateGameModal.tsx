import React, {useState} from "react";
import {FaXmark} from "react-icons/fa6";
import {Referee, referees} from "@/data/usersRelatedData.ts";
import {tournaments} from "@/data/gameRelatedData.ts";

const CreateGameModal: React.FC<{ onClose: () => void }> = ({onClose}) => {
    const teams = ["Team A", "Team B", "Team C", "Team D"];
    const locations = ["Location 1", "Location 2", "Location 3"];

    const [formData, setFormData] = useState({
        TOURNAMENT: "",
        TIME: "",
        DATE: "",
        TEAM_A: "",
        TEAM_B: "",
        CATEG: "",
        COURT: "",
        STATUS: "Upcoming",
        REFEREE: "",
        UMPIRE_I: "",
        UMPIRE_II: "",
        SHOT_CLOCK: "",
        TIMER: "",
        ASS_SCORER: "",
        SCORER: "",
        SCORES: "coming soon..."
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div
                className="relative bg-white text-xs p-8 rounded-3xl shadow-lg z-60 w-full max-w-lg max-h-[95vh] overflow-y-auto z-50">
                <button onClick={onClose}
                        className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark/>
                </button>
                <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">Create new Game</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-sm font-bold">Tournament</label>
                    <select name="TOURNAMENT" value={formData.TOURNAMENT} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                        <option value="">Select tournament</option>
                        {tournaments.map((referee, index) => (
                            <option key={index}
                                    value={referee.id}>{referee.name}</option>
                        ))}
                    </select>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label className="block text-sm font-bold">Time</label>
                            <input type="time" name="TIME" value={formData.TIME} onChange={handleChange}
                                   className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-bold">Date</label>
                            <input type="date" name="DATE" value={formData.DATE} onChange={handleChange}
                                   className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Teams</label>
                        <div className="flex space-x-2 items-center">
                            <select name="TEAM_A" value={formData.TEAM_A} onChange={handleChange}
                                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select team A</option>
                                {teams.map((team, index) => (
                                    <option key={index} value={team}>{team}</option>
                                ))}
                            </select>
                            <span>VS</span>
                            <select name="TEAM_B" value={formData.TEAM_B} onChange={handleChange}
                                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select team B</option>
                                {teams.map((team, index) => (
                                    <option key={index} value={team}>{team}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label className="block text-sm font-bold">Category</label>
                            <input type="text" name="CATEG" value={formData.CATEG} onChange={handleChange}
                                   className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-bold">Court</label>
                            <select name="COURT" value={formData.COURT} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select a court</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label className="block text-sm font-bold">Arbitrators</label>
                    <div>
                        <select name="REFEREE" value={formData.REFEREE} onChange={handleChange}
                                className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                            <option value="">Select a referee</option>
                            {referees.map((referee: Referee, index: number) => (
                                <option key={index}
                                        value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="UMPIRE_I" value={formData.UMPIRE_I} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select 1st umpire</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="UMPIRE_II" value={formData.UMPIRE_II} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select 2nd umpire</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="SHOT_CLOCK" value={formData.SHOT_CLOCK} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Shot Clock</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="TIMER" value={formData.TIMER} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Timer</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="ASS_SCORER" value={formData.ASS_SCORER} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Assistant Scorer</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="SCORER" value={formData.SCORER} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Scorer</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee.arbitratorId}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-full bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70">
                            Create Game
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGameModal;