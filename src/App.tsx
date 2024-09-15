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
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
