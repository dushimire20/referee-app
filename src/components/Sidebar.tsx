import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaRegClock, FaUser, FaWallet, FaClipboardList, FaComments, FaBars } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { GiWhistle } from "react-icons/gi";
import { FaBasketball } from "react-icons/fa6";
import Tooltip from './Tooltip';

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [tooltip, setTooltip] = useState({ show: false, text: '', position: '' });
    const [userRole, setUserRole] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const storedUserRole = localStorage.getItem('userRole');
        if (storedUserRole) {
            setUserRole(storedUserRole);
        }
    }, []);

    const refereeLinks = [
        { icon: <MdOutlineDashboard size={24} />, title: "Overview", to: "/dashboard" },
        { icon: <FaRegClock size={24} />, title: "Schedule", to: "/dashboard/schedule" },
        { icon: <FaClipboardList size={24} />, title: "Availability", to: "/dashboard/availability" },
        { icon: <FaWallet size={24} />, title: "Payments", to: "/dashboard/payments" },
        { icon: <FaUser size={24} />, title: "Profile", to: "/dashboard/profile" },
        { icon: <FaComments size={24} />, title: "Feedback", to: "/dashboard/feedback" }
    ];

    const adminLinks = [
        { icon: <MdOutlineDashboard size={24} />, title: "Overview", to: "/admin" },
        { icon: <GiWhistle size={24} />, title: "Referees", to: "/admin/referees" },
        { icon: <FaBasketball size={24} />, title: "Games", to: "/admin/games" },
        { icon: <FaWallet size={24} />, title: "Payments", to: "/admin/payments" },
        { icon: <FaUser size={24} />, title: "Profile", to: "/admin/profile" },
        { icon: <FaComments size={24} />, title: "Feedback", to: "/admin/feedback" }
    ];

    const sideLinks = userRole === 'admin' ? adminLinks : refereeLinks;

    const handleMouseEnter = (title: string, position: string) => {
        if (!isExpanded) {
            setTooltip({ show: true, text: title, position });
        }
    };

    const handleMouseLeave = () => {
        setTooltip({ show: false, text: '', position: '' });
    };

    return (
        <aside className={`min-h-screen border-r px-4 transition-width duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
            <div className={`flex mb-8 w-full sticky top-0 py-5 items-center gap-5 ${isExpanded ? 'pl-4' : 'justify-center'}`}>
                <FaBars size={24} onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer" />
                <Link to="/" id="logo" className={`bg-white text-secondary-100 font-poppins font-bold text-2xl ${!isExpanded && 'hidden'}`}>
                    <span>ARAB.</span>
                </Link>
            </div>
            <nav className="sticky top-0">
                <ul className="space-y-4">
                    {sideLinks.map((link, i) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <li key={i} className="relative">
                                <Link
                                    to={link.to}
                                    className={`flex items-center gap-4 text-gray-500 hover:text-black ${isExpanded ? 'p-4' : 'justify-center px-1 py-1 xs:px-2 xs:py-2 sm:py-2.5'} ${isActive ? 'bg-secondary-100 bg-opacity-20 text-secondary-100 rounded-lg' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(link.title, 'left-10')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {link.icon}
                                    <span className={`${!isExpanded && 'hidden'}`}>{link.title}</span>
                                </Link>
                                {tooltip.show && tooltip.text === link.title && (
                                    <Tooltip text={tooltip.text} position={tooltip.position} />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;