import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const DashboardLayout = () => {
	return (
		<div className="flex h-screen max-w-screen text-black">
			<Sidebar />

			<div className="flex flex-col flex-1">
				<Navbar/>
				<main className="flex-1 overflow-y-auto">
					<Outlet/>
				</main>
			</div>
		</div>
	)
}

export default DashboardLayout