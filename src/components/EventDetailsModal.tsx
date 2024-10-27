import React, { useEffect } from 'react';
import {FaXmark} from "react-icons/fa6";
import {Game} from "@/data/gameRelatedData.ts";

interface EventDetailsModalProps {
    game: Game | null;
    onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({game, onClose}) => {
    if (!game) {
      return null;
    }

    return (
        <div
            className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div
                className="bg-white p-4 sm:p-8 md:p-16 relative rounded-lg text-sm shadow-lg w-[95vw] sm:w-[60vw] md:w-1/2 space-y-4 max-h-screen max-w-[90vw] overflow-y-auto">
                <button onClick={onClose}
                        className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark/>
                </button>
                <h2 className="text-xl font-semibold mb-4">Game details</h2>
                <div className="flex justify-between">
                    <span>Teams</span>
                    <span className="font-semibold">{game.teamA} <span className="text-xs font-extralight px-4">vs</span>  {game.teamB}</span>
                </div>
                <div className="flex justify-between">
                    <span>Time</span>
                    <span className="font-semibold">
                        <span className="text-xs font-extralight mr-3">at</span> {game.time}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Category</span>
                    <span className="font-semibold">{game.category}</span>
                </div>
                <div className="flex justify-between">
                    <span>Location</span>
                    <span className="font-semibold">{game.court}</span>
                </div>
                <div className="flex justify-between">
                    <span>Referee</span>
                    <span className="font-semibold">{game.referee}</span>
                </div>
                <div className="flex justify-between">
                    <span>Umpire I</span>
                    <span className="font-semibold">{game.umpire1}</span>
                </div>
                <div className="flex justify-between">
                    <span>Umpire II</span>
                    <span className="font-semibold">{game.umpire2}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shot Clock</span>
                    <span className="font-semibold">{game.shotClock}</span>
                </div>
                <div className="flex justify-between">
                    <span>Timer</span>
                    <span className="font-semibold">{game.timer}</span>
                </div>
                <div className="flex justify-between">
                    <span>Ass. Scorer</span>
                    <span className="font-semibold">{game.assistantScorer}</span>
                </div>
                <div className="flex justify-between">
                    <span>Scorer</span>
                    <span className="font-semibold">{game.scorer}</span>
                </div>
            </div>
        </div>
    );
}

export default EventDetailsModal;