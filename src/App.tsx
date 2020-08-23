import React from "react";
import { Divider } from "@material-ui/core";
import { Colors } from "styles";

import Header from "sections/Header";
import Showcase from "sections/Showcase";
import About from "sections/About";
import Education from "sections/Education";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <About />
      <Divider style={{ borderColor: Colors.primary }} />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
