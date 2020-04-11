import React from "react";
import "./styles.css";
import Routes from "./routes";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}
