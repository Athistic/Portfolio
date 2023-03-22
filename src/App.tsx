import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./navbar";
import Profile from "./pages/profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WeatherApp from "./projects/WeatherApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path="*" element={<h1>ERROR</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
