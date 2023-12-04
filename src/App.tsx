import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "@/scenes/home";
import SignUp from "@/scenes/signUp";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signUp" Component={SignUp} />
      </Routes>
      
    </Router>
    
    </>
  )
}

export default App
