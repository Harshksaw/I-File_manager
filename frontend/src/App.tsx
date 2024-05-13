import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";


import Home from "./pages/Home";



import Dashboard from "./pages/DashBoard";
import { FolderProvider } from "./FolderContext";
import { ToastContainer } from "react-toastify";





function App() {


  return (
    <>
      <BrowserRouter>
      <FolderProvider>


     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

      </FolderProvider>
      <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App