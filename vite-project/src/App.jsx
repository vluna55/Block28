import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Red, Blue, Green, Orange, Home } from "./pages/Footer";

function App() {
  return (
    <div id="container">
        <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="orange" element={<Orange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
