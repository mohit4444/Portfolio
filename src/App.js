import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Helmet } from "react-helmet";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 700);
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Mohit Bidikar | Portfolio</title>
        <meta
          name="description"
          content="Mohit Bidikar Portfolio created using React and deployed on Heroku"
        />
      </Helmet>
      <Preloader load={load} />

      <Home />
      <Projects />
      <Skills />
    </Container>
  );
}

export default App;
