import { useState } from 'react';
import { FaRegClock, FaUser, FaWallet, FaClipboardList, FaComments, FaBars } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const sideLinks = [
        { icon: <MdOutlineDashboard size={24} />, title: "Overview", to: "/dashboard" },
        { icon: <FaRegClock size={24} />, title: "Schedule", to: "/schedule" },
        { icon: <FaClipboardList size={24} />, title: "Availability", to: "/availability" },
        { icon: <FaWallet size={24} />, title: "Payments", to: "/payments" },
        { icon: <FaUser size={24} />, title: "Profile", to: "/profile" },
        { icon: <FaComments size={24} />, title: "Feedback", to: "/feedback" }
    ];

    return (
        <aside className={`h-screen border-r px-4 transition-width duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
            <div className={`flex text-secondary-100 mb-8 w-full sticky top-0 py-5 items-center gap-5 ${isExpanded ? '' : 'justify-center'}`}>
                <FaBars size={24} onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer" />
                <Link to="/" id="logo" className={`bg-white font-poppins font-bold text-2xl ${!isExpanded && 'hidden'}`}>
                    <span>REFEREE.</span>
                </Link>
            </div>
            <nav className="sticky top-0">
                <ul className="space-y-4">
                    {sideLinks.map((link, i) => (
                        <li key={i}>
                            <Link to={link.to} title={!isExpanded ? link.title : ''} className={`flex items-center gap-4 text-gray-500 hover:text-black ${isExpanded ? '' : 'justify-center'}`}>
                                {link.icon}
                                <span className={`${!isExpanded && 'hidden'}`}>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;