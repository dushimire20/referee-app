import { FaRegClock, FaUser, FaWallet, FaClipboardList, FaComments } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar() {

	const sideLinks = [
		{
			icon: <MdOutlineDashboard size={24} />,
			title: "Overview",
			to: "/dashboard"
		},
		{
			icon: <FaRegClock size={24} />,
			title: "Schedule",
			to: "/schedule"
		},
		{
			icon: <FaClipboardList size={24} />,
			title: "Availability",
			to: "/availability"
		},
		{
			icon: <FaWallet size={24} />,
			title: "Payments",
			to: "/payments"
		},
		{
			icon: <FaUser size={24} />,
			title: "Profile",
			to: "/profile"
		},
		{
			icon: <FaComments size={24} />,
			title: "Feedback",
			to: "/feedback"
		}
	];

	return (
		<aside className="w-64 h-screen border-r px-4">
			<Link
				to="/"
				id="logo"
				className="w-full sticky top-0 bg-white font-poppins text-secondary-100 font-bold text-2xl py-5 flex items-center gap-5"
			>
				<FaBars size={24} />
				<span>REFEREE.</span>
			</Link>
			<div className=" text-red-500 mb-8"></div>
			<nav>
				<ul className="space-y-4">
					{sideLinks.map((link, i) => (
						<li key={i}>
							<Link
								to={link.to}
								className="flex items-center gap-4 text-gray-500 hover:text-black"
							>
								{link.icon}
								<span>{link.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar