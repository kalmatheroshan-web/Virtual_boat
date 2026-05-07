import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    
      <Toaster />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
export default App; 