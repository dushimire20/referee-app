import React, {useState, useEffect, useRef} from "react";
import {FaBell, FaQuestionCircle, FaSearch, FaUser} from 'react-icons/fa';
import {pages} from "@/data/pages";
import {NavLink} from "react-router-dom";
import {MdOutlineDashboard} from 'react-icons/md';
import {GiWhistle} from "react-icons/gi";
import {FaRegClock, FaWallet, FaClipboardList, FaComments} from 'react-icons/fa';
import {FaBasketball, FaXmark} from "react-icons/fa6";

const refereeLinks = [
    {name: "Overview", path: "/dashboard", roles: ["referee"], icon: <MdOutlineDashboard size={24}/>},
    {name: "Schedule", path: "/dashboard/schedule", roles: ["referee"], icon: <FaRegClock size={24}/>},
    {name: "Availability", path: "/dashboard/availability", roles: ["referee"], icon: <FaClipboardList size={24}/>},
    {name: "Payments", path: "/dashboard/payments", roles: ["referee"], icon: <FaWallet size={24}/>},
    {name: "Profile", path: "/dashboard/profile", roles: ["referee"], icon: <FaUser size={24}/>},
    {name: "Feedback", path: "/dashboard/feedback", roles: ["referee"], icon: <FaComments size={24}/>}
];

const adminLinks = [
    {name: "Admin Overview", path: "/admin", roles: ["admin"], icon: <MdOutlineDashboard size={24}/>},
    {name: "Referees", path: "/admin/referees", roles: ["admin"], icon: <GiWhistle size={24}/>},
    {name: "Games", path: "/admin/games", roles: ["admin"], icon: <FaBasketball size={24}/>},
    {name: "Manage Referees", path: "/admin/payments", roles: ["admin"], icon: <FaWallet size={24}/>},
    {name: "Profile", path: "/admin/profile", roles: ["admin"], icon: <FaUser size={24}/>},
    {name: "Feedback", path: "/admin/feedback", roles: ["admin"], icon: <FaComments size={24}/>}
];

const notificationsData = [
    {id: 1, title: "New Schedule", content: "You have a new schedule.", read: false},
    {id: 2, title: "Payment Received", content: "Your payment has been processed.", read: false},
    {id: 3, title: "Profile Update", content: "Your profile has been updated.", read: true}
];

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<{
        name: string;
        path: string;
        roles: string[];
        icon?: JSX.Element
    }[]>([]);
    const [userRole, setUserRole] = useState("");
    const [notifications, setNotifications] = useState(notificationsData);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const bellRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role) {
            setUserRole(role);
        }

        const handleClickOutside = (event) => {
            if (bellRef.current && !bellRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };


        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        location.href = "/";
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const results = pages.filter(page =>
                page.name.toLowerCase().includes(term.toLowerCase()) &&
                page.roles.includes(userRole)
            );

            const sideLinks = userRole === 'admin' ? adminLinks : refereeLinks;
            const filteredSideLinks = sideLinks.filter(link =>
                link.name.toLowerCase().includes(term.toLowerCase())
            );

            setSearchResults([...results, ...filteredSideLinks]);
        } else {
            setSearchResults([]);
        }
    };

    const handleBellClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
        setNotifications(notifications.map(n => n.id === notification.id ? {...n, read: true} : n));
    };

    const handleProfileClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const unreadNotifications = notifications.filter(n => !n.read).length;

    return (
        <nav className="flex flex-wrap sticky top-0 w-full justify-between items-center bg-white border-b p-4 text-xs">
            <div className="flex-1 hidden md:flex">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border bg-gray-50 px-2 py-2 pl-8 rounded-lg w-full max-w-xs focus:outline-none"
                    />
                    {searchResults.length > 0 && (
                        <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-lg shadow-lg z-10">
                            {searchResults.map((result, index) => (
                                <NavLink key={index} to={result.path}
                                         className="px-4 py-2 hover:bg-secondary-100 hover:bg-opacity-5 flex items-center gap-2">
                                    {result.icon && <span>{result.icon}</span>}
                                    {result.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0 ml-auto">
                <FaQuestionCircle size={20} className="cursor-pointer hidden sm:block"/>
                <div className="relative" ref={bellRef}>
                    <FaBell size={20} className="cursor-pointer" onClick={handleBellClick}/>
                    {unreadNotifications > 0 && (
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                    )}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                            <div className="p-4 border-b">
                                <h3 className="text-lg font-semibold">Notifications</h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {notifications.map(notification => (
                                    <div
                                        key={notification.id}
                                        className={`px-4 py-2 cursor-pointer hover:bg-secondary-100 hover:bg-opacity-5 ${notification.read ? 'text-gray-500' : 'text-black'}`}
                                        onClick={() => handleNotificationClick(notification)}
                                    >
                                        <h4 className="font-semibold">{notification.title}</h4>
                                        <p className="text-sm">{notification.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative" ref={profileRef}>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfileClick}>
                        <FaUser size={40} className="rounded-full w-9 h-9 py-2 bg-secondary-100 bg-opacity-5"/>
                        <div className="hidden sm:block">
                            <p className="font-semibold">Eric ISHIMWE</p>
                            <p className="text-gray-400">Referee</p>
                        </div>
                    </div>
                    {showProfileDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                            <NavLink
                                to={userRole === 'admin' ? '/admin/profile' : '/dashboard/profile'}
                                className="block px-4 py-2 hover:bg-secondary-100 hover:bg-opacity-5"
                            >
                                Profile
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 hover:bg-secondary-100 hover:bg-opacity-5"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {selectedNotification && (
                <div>
                    <div className="fixed inset-0 bg-black opacity-25 z-40"
                         onClick={() => setSelectedNotification(null)}></div>
                    <div className="absolute top-0 right-0 sm:w-1/3 h-[100vh] bg-white shadow-lg z-50 p-4 space-y-5">
                        <div className="relative h-full p-4 space-y-5">
                            <button onClick={() => setSelectedNotification(null)}
                                    className="h-8 w-8 absolute right-4 top-4 flex justify-center items-center bg-secondary-100 bg-opacity-50 text-white rounded-full">
                                <FaXmark/>
                            </button>
                            <h2 className="text-xl font-bold">{selectedNotification.title}</h2>
                            <p>{selectedNotification.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;