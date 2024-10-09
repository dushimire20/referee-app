import React, {useEffect, useState} from "react";
import {FaXmark} from "react-icons/fa6";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateGameModal: React.FC<{ onClose: () => void }> = ({onClose}) => {

     // State variables for game fields
  const [referees, setReferees] = useState<Referee[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    teamA: "",
    teamB: "",
    court: "",
    category: "",
    tournament: "",
    referee: "",
    umpireI: "",
    umpireII: "",
    shotClock: "",
    timer: "",
    scorer: "",
    assistantScorer: "",
    status: "upcoming", // Default status
  });

  const navigate = useNavigate();

  // Fetch referees, teams, and tournaments on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/adminDashboard/dashboard");
        setReferees(response.data.referees);
        setTeams(response.data.teams);
        setTournaments(response.data.tournaments);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only when the component mounts

  // Handle form data changes
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGame = {
        date: formData.date,
        time: formData.time,
        teams: [formData.teamA, formData.teamB],
        category: formData.category,  // Ensure this matches your input name
        court: formData.court,
        tournament: formData.tournament,
        referees: [formData.referee],
        umpires: [formData.umpireI, formData.umpireII],
        shotClock: formData.shotClock,
        timer: formData.timer,
        scorer: formData.scorer,
        assistantScorer: formData.assistantScorer,
        status: formData.status,
        notifications: [],
        scores: [],
    };

    Axios.post("https://referee-backendv1.vercel.app/adminDashboard/createGame", newGame)
    .then((response) => {
      if (response.data.status) {
        alert(`Game created successfully!`);
        navigate("/dashboard"); // Navigate to game list page after creation
      } else {
        alert("Error creating game. Please try again.");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Error creating Game");
      console.log((err), "error occured while creating ")
    });
    };


    

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white text-xs p-8 rounded-3xl shadow-lg z-60 w-full max-w-lg max-h-[95vh] overflow-y-auto z-50">
            <button
              onClick={onClose}
              className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full"
            >
              <FaXmark />
            </button>
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-xl font-bold">Create new Game</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-bold">Tournament</label>
              <select
                name="tournament"
                value={formData.tournament}
                onChange={handleChange}
                className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
              >
                <option value="">Select tournament</option>
                {tournaments.map((tournament, index) => (
                  <option key={index} value={tournament._id}>
                    {tournament.name}
                  </option>
                ))}
              </select>
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-bold">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-bold">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold">Teams</label>
                <div className="flex space-x-2 items-center">
                  <select
                    name="teamA"
                    value={formData.teamA}
                    onChange={handleChange}
                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                  >
                    <option value="">Select team A</option>
                    {teams.map((team, index) => (
                      <option key={index} value={team._id}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                  <span>VS</span>
                  <select
                    name="teamB"
                    value={formData.teamB}
                    onChange={handleChange}
                    className="w-1/2 mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"
                  >
                    <option value="">Select team B</option>
                    {teams.map((team, index) => (
                      <option key={index} value={team._id}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex space-x-4">
                    <div className="w-full">
                        <label className="block text-sm font-bold">Category</label>
                        <input 
                        type="text" 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-bold">Court</label>
                        <input type="text" name="court" value={formData.court} onChange={handleChange}
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none"/>
                        {/* <select name="COURT" value={formData.COURT} onChange={handleChange}
                            className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                            <option value="">Select a court</option>
                            {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                            ))}
                        </select> */}
                    </div>
                </div>

                <label className="block text-sm font-bold">Arbitrators</label>

                <div>
                    <select name="referee" value={formData.referee} onChange={handleChange}
                        className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                    <option value="">Select a referee</option>
                        {referees.map((referee: Referee, index: number) => (
                    <option key={index}
                        value={referee._id}>{referee.firstName} {referee.lastName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="umpireI" value={formData.umpireI} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select 1st umpire</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee._id}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="umpireII" value={formData.umpireII} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select 2nd umpire</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee._id}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                </div>

                <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="shotClock" value={formData.shotClock} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Shot Clock</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee._id}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="timer" value={formData.timer} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Timer</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee._id}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                </div>

                <div className="flex space-x-4">
                        <div className="w-full">
                            <select name="assistantScorer" value={formData.assistantScorer} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Assistant Scorer</option>
                                {referees.map((referee, index) => (
                                    <option key={index}
                                            value={referee._id}>{referee.firstName} {referee.lastName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <select name="scorer" value={formData.scorer} onChange={handleChange}
                                    className="w-full mt-1 px-2 py-1 border rounded-2xl bg-gray-50 focus:outline-none">
                                <option value="">Select Scorer</option>
                                
                                {referees.map((referee, index) => (
                                    <option key={index} value={referee._id}>
                                        {referee.firstName} {referee.lastName}
                                    </option>                                            
                                ))}
                            </select>
                        </div>
                </div>


              
            
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-secondary-100 text-white px-6 py-2 text-sm rounded-xl hover:bg-opacity-70"
                >
                  Create Game
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
    
    export default CreateGameModal;