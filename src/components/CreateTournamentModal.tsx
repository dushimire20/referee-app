import React, {useState} from "react";
import {FaXmark} from "react-icons/fa6";
import {Tournament} from "@/data/gameRelatedData.ts";

const CreateTournamentModal: React.FC<{ onClose: () => void }> = ({onClose}) => {
    const [formData, setFormData] = useState<Tournament>({
        name: "",
        teams: 0,
        dateRange: "",
        days: [{date: "", games: []}],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleDayChange = (index: number, value: string) => {
        const updatedDays = [...formData.days];
        updatedDays[index] = {...updatedDays[index], date: value};
        setFormData({...formData, days: updatedDays});
    };

    const addDay = () => {
        setFormData({...formData, days: [...formData.days, {date: "", games: []}]});
    };

    const removeDay = (index: number) => {
        const updatedDays = formData.days.filter((_, i) => i !== index);
        setFormData({...formData, days: updatedDays});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div
                className="relative bg-white text-xs p-8 rounded-3xl shadow-lg z-60 w-full max-w-lg max-h-[95vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full"
                >
                    <FaXmark/>
                </button>
                <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">Create new Tournament</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold">Tournament Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Number of Teams</label>
                        <input
                            type="number"
                            name="teams"
                            value={formData.teams}
                            onChange={handleChange}
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Date Range</label>
                        <input
                            type="text"
                            name="dateRange"
                            value={formData.dateRange}
                            onChange={handleChange}
                            placeholder="e.g., June 1 - June 15, 2023"
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Tournament Days</label>
                        {formData.days.map((day, index) => (
                            <div key={index} className="flex space-x-2 mb-2">
                                <input
                                    type="date"
                                    value={day.date}
                                    onChange={(e) => handleDayChange(index, e.target.value)}
                                    className="w-full px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeDay(index)}
                                    className="px-2 py-1 bg-red-500 text-white rounded-xl"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addDay}
                            className="mt-2 px-4 py-1 bg-green-500 text-white rounded-xl"
                        >
                            Add Day
                        </button>
                    </div>
                    <div>
                        <label className="block text-sm font-bold">Tournament Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFormData({...formData, image: reader.result as string});
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                            className="w-full mt-1 px-1.5 py-1 border rounded-full bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary-100 file:text-white hover:file:bg-secondary-200"
                        />
                        {formData.image && (
                            <img
                                src={formData.image}
                                alt="Tournament Preview"
                                className="mt-2 max-h-32 rounded-md"
                            />
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70"
                        >
                            Create Tournament
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTournamentModal;