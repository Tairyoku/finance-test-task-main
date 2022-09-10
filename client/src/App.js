import React from "react";
import { Socket } from "./quote/socket";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Socket />
    </React.StrictMode>
  );
}

export default App;
