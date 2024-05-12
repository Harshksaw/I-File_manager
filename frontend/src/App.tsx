import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";


import Home from "./pages/Home";


import HeaderSection from "./components/Header";
import Dashboard from "./pages/DashBoard";


function App() {
  return (
    <>
       <BrowserRouter>
        <HeaderSection/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App