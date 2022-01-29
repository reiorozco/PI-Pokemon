import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="new-pokemon" element={<CreatePokemon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
