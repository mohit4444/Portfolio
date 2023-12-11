import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Helmet } from "react-helmet";
import Particle from "./components/Particle";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 700);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mohit Bidikar | Portfolio</title>
        <meta
          name="description"
          content="Mohit Bidikar Portfolio created using React and deployed on Heroku"
        />
      </Helmet>
      <Particle />
      <Preloader load={load} />
      <Home />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
