import React from "react";
import Header from "./components/Header";
import Showcase from "./sections/Showcase";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Jobs from "./sections/Jobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Jobs />
    </div>
  );
}

export default App;
