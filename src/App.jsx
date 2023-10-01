import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./pages/LoginPage.jsx";
import Homepage from "./pages/Homepage";


export default function App() {
  return (
    <main className="relative">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </main>
  )
}
