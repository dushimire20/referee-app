import {FaBell, FaQuestionCircle, FaSearch, FaUser} from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="flex flex-wrap sticky top-0 w-full justify-between items-center bg-white border-b p-4 text-xs">
            <div className="flex-1 hidden">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border bg-gray-50 px-2 py-1 pl-8 rounded-lg w-full max-w-xs focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0 ml-auto">
                <FaQuestionCircle size={20} className="cursor-pointer hidden sm:block" />
                <FaBell size={20} className="cursor-pointer" />
                <div className="flex items-center gap-2">
                    <FaUser size={40} className="rounded-full w-9 h-9 py-2 bg-secondary-100 bg-opacity-5" />
                    <div className="hidden sm:block">
                        <p className="font-semibold">Eric ISHIMWE</p>
                        <p className="text-gray-400">Referee</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;