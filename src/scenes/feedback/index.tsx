import {FaStar} from "react-icons/fa";
import {FaStarHalf} from "react-icons/fa";
import {VscFeedback} from "react-icons/vsc";
import {FaThumbsUp} from "react-icons/fa";
import {PiSealWarningFill} from "react-icons/pi";
import {useState} from "react";

const Feedback = () => {
    const initialFeedbacks = [
        {
            date: '1/1/2024',
            game: 'Team A VS Team B',
            rating: '5.0',
            comment: 'Excellent job managing a tough game',
            selected: true
        },
        {
            date: '3/1/2024',
            game: 'Team A VS Team B',
            rating: '4.5',
            comment: 'Good job managing the game',
            selected: false
        },
        {
            date: '5/1/2024',
            game: 'Team A VS Team B',
            rating: '3.5',
            comment: 'You could do better managing the game',
            selected: false
        },
        {
            date: '7/1/2024',
            game: 'Team A VS Team B',
            rating: '4.0',
            comment: 'Good job managing the game',
            selected: false
        },
    ];

    const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

    const handleFeedbackSelection = (index: number) => {
        const updatedFeedbacks = feedbacks.map((feedback, i) => {
            if (i === index) {
                feedback.selected = !feedback.selected;
            }
            return feedback;
        });
        setFeedbacks(updatedFeedbacks);
    };

    const handleRSelectAllFeedbacks = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setFeedbacks(feedbacks.map(row => ({...row, selected: checked})));
    }


    return (
        <div className="p-8">
            <h3 className="text-lg font-semibold mb-4">Feedback overview</h3>
            <div className="flex flex-wrap gap-6">
                <div className="p-4 rounded-xl border space-y-2.5">
                    <p className="text-sm text-gray-500">Average ratings</p>
                    <div className="flex space-x-2 items-center">
                        <span className="flex">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                        </span>
                        <p>5.0</p>
                    </div>
                </div>
                <div className="p-4 rounded-xl border space-y-2.5">
                    <p className="text-sm text-gray-500">Total Feedback Recieved</p>
                    <div className="flex space-x-2 items-center">
                        <VscFeedback className="text-secondary-100"/>
                        <p>125 Feedback</p>
                    </div>
                </div>
                <div className="p-4 rounded-xl border space-y-2.5">
                    <p className="text-sm text-gray-500">Positive Feedback</p>
                    <div className="flex space-x-2 items-center">
                        <FaThumbsUp className="text-secondary-100"/>
                        <p>77%</p>
                    </div>
                </div>
                <div className="p-4 rounded-xl border space-y-2.5">
                    <p className="text-sm text-gray-500">Areas of Improvement</p>
                    <div className="flex space-x-2 items-center">
                        <PiSealWarningFill className="text-secondary-100"/>
                        <p>23%</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-7 md:flex-row w-full space-y-6 md:space-x-6 md:space-y-0">
                <div className="w-full md:w-2/3 space-y-6">
                    <h3 className="text-lg font-semibold">Game-specific feedback</h3>
                    {/* a table of feedbacks */}
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden text-xs">
                                    <thead className="text-gray-700 bg-[#E5ECF6] overflow-x-auto">
                                    <tr>
                                        <th className="py-3 px-4 text-left">
                                            <input type="checkbox" onChange={handleRSelectAllFeedbacks}/>
                                        </th>
                                        <th className="py-3 px-4 text-left">Date</th>
                                        <th className="py-3 px-4 text-left">Game</th>
                                        <th className="py-3 px-4 text-left">Rating</th>
                                        <th className="py-3 px-4 text-left">Comment</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-blue-gray-900 overflow-x-auto">
                                    {feedbacks.map((feedback, index) => (
                                        <tr key={index}
                                            className={feedback.selected ? 'bg-blue-100' : 'border-b border-blue-gray-200'}>
                                            <td className="py-3 px-4">
                                                <input type="checkbox" className="form-checkbox"
                                                       checked={feedback.selected}
                                                       onChange={() => handleFeedbackSelection(index)}/>
                                            </td>
                                            <td className="py-3 px-4">{feedback.date}</td>
                                            <td className="py-3 px-4">{feedback.game}</td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center">
                                                    {[...Array(Math.floor(Number(feedback.rating)))].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-500"/>
                                                    ))}
                                                    {Number(feedback.rating) % 1 !== 0 &&
                                                        <FaStarHalf className="text-yellow-500"/>}
                                                    <span className="ml-2">{feedback.rating}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">{feedback.comment}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 space-y-6">
                    <h3 className="text-lg font-semibold">Reply to feedbacks</h3>
                    <form className="space-y-4">

                    <textarea
                        className="py-3 px-4 block w-full border-2 rounded-xl text-sm focus:outline-none focus:ring-secondary-100 disabled:opacity-50 disabled:pointer-events-none"
                        rows="5" placeholder="Type your reply..."></textarea>
                        <button
                            className="bg-secondary-100 text-white py-3 px-16 rounded-xl text-sm hover:bg-secondary-200">
                            Submit
                        </button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Feedback