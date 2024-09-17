import { FaBell, FaQuestionCircle } from 'react-icons/fa';

function Navbar() {
	return (
		<nav className="flex sticky top-0 w-full justify-between items-center bg-white border-b p-4 text-xs z-10">
			<div className="flex-1">
				<input
					type="text"
					placeholder="Search..."
					className="border px-2 py-1 rounded-lg w-full max-w-xs"
				/>
			</div>
			<div className="flex items-center gap-4">
				<FaQuestionCircle size={20} className="cursor-pointer" />
				<FaBell size={20} className="cursor-pointer" />
				<div className="flex items-center gap-2">
					<img
						src="https://via.placeholder.com/40" // Replace with actual user image
						alt="User avatar"
						className="rounded-full w-10 h-10"
					/>
					<div className="hidden sm:block">
						<p className="font-semibold">Eric ISHIMWE</p>
						<p className="text-gray-400">Referee</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar