import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInfo from "./components/GameInfo";
import SpalshScreen from "./components/SplashScreen";



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = " WSGame Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#5d94cb";
      document.title = "WSGame Light mode";
    }
  };

  return (
    <div className="App">
      <NavBar mode={mode} toggleMode={toggleMode} />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<SpalshScreen />} /> 
        <Route exact path="/Gameinfo" element={<GameInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
