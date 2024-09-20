import React, {useState, useEffect, useRef} from "react";
import {FaBell, FaQuestionCircle, FaSearch, FaUser} from 'react-icons/fa';

function Navbar() {
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
        </nav>
    );
}

export default Navbar;