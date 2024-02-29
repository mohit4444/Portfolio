import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Mohit Bidikar CV.pdf";
import GitHubCalendar from "react-github-calendar";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={7} className="home-header">
          <h1>
            Hi There! <span className="wave">👋🏻</span>
          </h1>
          <h1>
            I'm <strong data-text="Mohit Bidikar">Mohit Bidikar</strong>
          </h1>
          <Type />
          <br></br>
          <Button id="cv" href={pdf} target="_blank">
            <i className="far fa-file-alt"> CV</i>
          </Button>
        </Col>
        <Col md={5}>
          <img src={homeLogo} alt="home pic" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>My journey so far</h1>
          <p>
            I have over 4 years of experience in software development. My
            journey has led me to explore a myriad of technologies, including
            Javascript (React, Node, Express), Java, PostgreSQL, and MongoDB.
            Additionally, I recently wrapped up my MSc in Advanced Computer
            Science from the University of York in November 2023. This blend of
            formal education and practical experience equips me to offer
            innovative solutions in web and cross-platform mobile app
            development.
            <br />
          </p>
        </Col>
      </Row>
      <br></br>
      <Row style={{ justifyContent: "center" }}>
        <GitHubCalendar
          style={{ color: "white" }}
          fontSize={20}
          theme={{
            light: ["black", "rebeccapurple"],
            dark: ["black", "red"],
          }}
          username="mohit4444"
        />
      </Row>
      <br></br>
    </Container>
  );
}

export default Home;
