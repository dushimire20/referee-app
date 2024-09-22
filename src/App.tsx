import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/scenes/home";
import SignUp from "@/scenes/signUp";
import SignIn from "@/scenes/signIn";
import OurGoals from "@/scenes/ourGoals";
import KeyFeatures from "@/scenes/keyFeatures";
import DashboardHome from "@/scenes/dashboard";
import ForgotPassword from "@/scenes/forgotPassword";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import Schedule from "@/scenes/schedule";
import Availability from "@/scenes/availability";
import Payments from "@/scenes/payments";
import Profile from "@/scenes/profile";
import Feedback from "@/scenes/feedback";
import AdminOverview from "@/components/AdminOverview.tsx";
import Referees from "@/components/Referees.tsx";
import GameManagement from "@/scenes/GameManagement.tsx";
import PaymentsOverview from "@/scenes/PaymentsOverview.tsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="signUp" element={<SignUp />} />
					<Route path="login" element={<SignIn />} />
					<Route path="forgotPassword" element={<ForgotPassword />} />
					<Route path="goals" element={<OurGoals />} />
					<Route path="features" element={<KeyFeatures />} />
				</Route>

				<Route path="dashboard" element={<DashboardLayout />}>
					<Route index element={<DashboardHome />} />
					<Route path="schedule" element={<Schedule />} />
					<Route path="availability" element={<Availability />} />
					<Route path="payments" element={<Payments />} />
					<Route path="profile" element={<Profile />} />
					<Route path="feedback" element={<Feedback />} />
				</Route>
				<Route path="admin" element={<DashboardLayout />}>
					<Route index element={<AdminOverview />} />
					<Route path="referees" element={<Referees />} />
					<Route path="games" element={<GameManagement />} />
					<Route path="payments" element={<PaymentsOverview />} />
					<Route path="profile" element={<Profile />} />
					<Route path="feedback" element={<Feedback />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
