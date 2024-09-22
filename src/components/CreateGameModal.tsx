import React, { useState } from "react";
import {FaXmark} from "react-icons/fa6";

const CreateGameModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const tournaments = ["Tournament 1", "Tournament 2", "Tournament 3"];
    const teams = ["Team A", "Team B", "Team C", "Team D"];
    const locations = ["Location 1", "Location 2", "Location 3"];

    const [formData, setFormData] = useState({
        tournament: "",
        team1: "",
        team2: "",
        location: "",
        crewChief: "",
        tableRef1: "",
        tableRef2: "",
        tableRef3: "",
        umpireRef1: "",
        umpireRef2: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative bg-white text-xs p-8 rounded-3xl shadow-lg z-60 w-full max-w-lg max-h-[95vh] overflow-y-auto z-30">
                <button onClick={onClose}
                        className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark/>
                </button>
                <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">Create new Game</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                        <label className="block text-sm font-bold">Tournament</label>
                        <select name="tournament" value={formData.tournament} onChange={handleChange}
                                className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                            <option value="">Select a tournament</option>
                            {tournaments.map((tournament, index) => (
                                <option key={index} value={tournament}>{tournament}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Teams</label>
                        <div className="flex space-x-2 items-center">
                            <select name="team1" value={formData.team1} onChange={handleChange}
                                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select team 1</option>
                                {teams.map((team, index) => (
                                    <option key={index} value={team}>{team}</option>
                                ))}
                            </select>
                            <span>VS</span>
                            <select name="team2" value={formData.team2} onChange={handleChange}
                                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select team 2</option>
                                {teams.map((team, index) => (
                                    <option key={index} value={team}>{team}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Location</label>
                        <select name="location" value={formData.location} onChange={handleChange}
                                className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                            <option value="">Select a location</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    <label className="block text-sm font-bold">Referees</label>
                    <div className="flex space-x-4">

                        <input type="text" placeholder="Crew Chief" name="crewChief" value={formData.crewChief}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        <input type="text" placeholder="1st Table Ref" name="tableRef1" value={formData.tableRef1}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                    </div>

                    <div className="flex space-x-4">
                        <input type="text" placeholder="2nd Table Ref" name="tableRef2" value={formData.tableRef2}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>

                        <input type="text" placeholder="3rd Table Ref" name="tableRef3" value={formData.tableRef3}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                    </div>

                    <div className="flex space-x-4">
                        <input type="text" placeholder="1st Umpire Ref" name="umpireRef1" value={formData.umpireRef1}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>

                        <input type="text" placeholder="2nd Umpire Ref" name="umpireRef2" value={formData.umpireRef2}
                               onChange={handleChange}
                               className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
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