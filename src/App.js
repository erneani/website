import React from "react";
import Header from "./components/Header";
import Showcase from "./sections/Showcase";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
// import Jobs from "./sections/Jobs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Education />
      {/* <Jobs /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
