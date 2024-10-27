import React, { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
//import {Referee, referees} from "@/data/usersRelatedData";
import {Link} from "react-router-dom";
import axios from "axios";


const Referees: React.FC = () => {
    const [referees, setReferees] = useState<Referee[]>([]);
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://referee-backend.vercel.app/adminDashboard/dashboard");
            setReferees(response.data.referees);
            setGames(response.data.games);
          } catch (error) {
            console.error("Error fetching dashboard data:", error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array ensures this runs only when the component mounts
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-4 uppercase">Referees List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-t">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Arbitrator Levels</th>
                        <th className="px-4 py-2 text-left">Full Name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Arbitrator Role</th>
                        <th className="px-4 py-2 text-left">Phone Number</th>
                        <th className="px-4 py-2 text-left">Assignments</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {referees.map((referee: Referee, index: number) => (
                        <tr key={index}>
                            <td className="px-4 py-4">{referee.level}</td>
                            <td className="px-4 py-4">{`${referee.firstName} ${referee.lastName}`}</td>
                            <td className="px-4 py-4">{referee.email}</td>
                            <td className="px-4 py-4">{referee.roles}</td>
                            <td className="px-4 py-4">{referee.phoneNumber}</td>
                            <td className="px-4 py-4 text-center">{referee.assignment}</td>
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
                <Link to="/admin/add_referee" className="bg-secondary-100 text-white px-8 py-2 rounded-xl hover:bg-opacity-70">
                    Add a Referee +
                </Link>
            </div>
        </div>
    );
};

export default Referees;