import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const DashboardLayout = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default DashboardLayout
