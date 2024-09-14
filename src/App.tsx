import { BrowserRouter as Router,  Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@/scenes/home";
import SignUp from "@/scenes/signUp";
import SignIn from "./scenes/signIn";
import OurGoals from "./scenes/ourGoals";
import KeyFeatures from "./scenes/keyFeatures";
import Dashboard from "./scenes/dashboard";
import ForgotPassword from "./scenes/forgotPassword";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signUp" Component={SignUp} />
        <Route path="/login" Component={SignIn} />
        <Route path="/forgotPassword" Component={ForgotPassword} />
        <Route path="/goals" Component={OurGoals} />
        <Route path="/features" Component={KeyFeatures} />
        <Route path="/dashboard" Component={Dashboard} />

      </Routes> 

      <Routes>
        
      </Routes>
      
    </Router>
    
    </>
  )
}

export default App
