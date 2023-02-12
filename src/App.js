import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
