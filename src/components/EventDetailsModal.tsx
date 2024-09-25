import React from 'react';
import {ScheduleEvent} from '@/scenes/schedule';
import {FaXmark} from "react-icons/fa6";

interface EventDetailsModalProps {
    event: ScheduleEvent | null;
    onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({event, onClose}) => {
    if (!event) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div
                className="bg-white p-4 sm:p-8 md:p-16 relative rounded-lg text-sm shadow-lg w-[95vw] sm:w-[60vw] md:w-1/2 space-y-4 max-h-screen max-w-[90vw] overflow-y-auto">
                <button onClick={onClose}
                        className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                    <FaXmark/>
                </button>
                <h2 className="text-xl font-semibold mb-4">Game details</h2>
                <div className="flex justify-between">
                    <span>Teams</span>
                    <span className="font-semibold">{event.teams}</span>
                </div>
                <div className="flex justify-between">
                    <span>Date</span>
                    <span className="font-semibold">
                        <span className="text-xs font-extralight">on</span> {event.start.toLocaleDateString('en-GB')} <span className="text-xs font-extralight ml-2">at</span>  {event.start.toLocaleTimeString('en-GB')}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Location</span>
                    <span className="font-semibold">{event.location}</span>
                </div>
                <div className="flex justify-between">
                    <span>Crew Chief</span>
                    <span className="font-semibold">{event.crew_chief}</span>
                </div>
                <div className="flex justify-between">
                    <span>First Table Official</span>
                    <span className="font-semibold">{event.first_table_official}</span>
                </div>
                <div className="flex justify-between">
                    <span>Second Table Official</span>
                    <span className="font-semibold">{event.second_table_official}</span>
                </div>
                <div className="flex justify-between">
                    <span>Third Table Official</span>
                    <span className="font-semibold">{event.third_table_official}</span>
                </div>
                <div className="flex justify-between">
                    <span>First Umpire Ref</span>
                    <span className="font-semibold">{event.first_umpire_ref}</span>
                </div>
                <div className="flex justify-between">
                    <span>Second Umpire Ref</span>
                    <span className="font-semibold">{event.second_umpire_ref}</span>
                </div>
            </div>
        </div>
    );
}

export default EventDetailsModal;