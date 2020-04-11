import React from "react";

import Header from "./components/Header";
import "./styles.css";

import Main from "./pages/Main";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
