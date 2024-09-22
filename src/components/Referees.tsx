import React from "react";
import {GiConfirmed} from "react-icons/gi";
import {RxCrossCircled} from "react-icons/rx";

type Referee = {
    id: string;
    fullName: string;
    type: string;
    level: string;
    lastAssignment: string;
    tasks: number;
    status: string;
};

const referees: Referee[] = [
    {
        id: "1234454",
        fullName: "Eric HABIMANA",
        type: "Table official",
        level: "Beginner",
        lastAssignment: "2/11/2021, 11:30 AM",
        tasks: 3,
        status: "Active",
    },
    {
        id: "1234454",
        fullName: "Eric HABIMANA",
        type: "Table official",
        level: "Advanced",
        lastAssignment: "2/11/2021, 11:30 AM",
        tasks: 4,
        status: "Inactive",
    },
    // Add more referees here...
];

const Referees: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-4 uppercase">Referees List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-t">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Referee ID</th>
                        <th className="px-4 py-2 text-left">Full Names</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">Level</th>
                        <th className="px-4 py-2 text-left">Last Assignment</th>
                        <th className="px-4 py-2 text-left">Tasks</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {referees.map((referee, index) => (
                        <tr key={index}>
                            <td className="px-4 py-4">{referee.id}</td>
                            <td className="px-4 py-4">{referee.fullName}</td>
                            <td className="px-4 py-4">{referee.type}</td>
                            <td className="px-4 py-4">{referee.level}</td>
                            <td className="px-4 py-4">{referee.lastAssignment}</td>
                            <td className="px-4 py-4">{referee.tasks}</td>
                            <td className={`px-4 py-4 ${referee.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                                {referee.status}
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex space-x-4">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <GiConfirmed size={20}/>
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <RxCrossCircled size={21}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <button className="bg-secondary-100 text-white px-8 py-2 rounded-xl hover:bg-opacity-70">
                    Add a Referee +
                </button>
            </div>
        </div>
    );
};

export default Referees;
