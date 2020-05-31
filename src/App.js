import React from "react";
import Header from "./components/Header";
import Showcase from "./sections/Showcase";
import About from "./sections/About";
import Jobs from "./sections/Jobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <About />
      <Jobs />
    </div>
  );
}

export default App;
