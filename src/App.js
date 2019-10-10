import React from "react";
import NASAPhoto from "./NasaPhoto";
import logo from "./assets/nasa-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="NASA logo" />
        <h1>Photo of the Day</h1>
        <NASAPhoto />
        
      </div>
    </div>
  );
}

export default App;
