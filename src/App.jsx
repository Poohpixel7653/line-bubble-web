import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BeaconComponent from "./components/BeaconComponent";

function App() {

  return (
    <>
      <div id="main">
        <BeaconComponent />
      </div>
    </>
  );
}

export default App;
