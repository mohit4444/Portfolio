import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Type from "./Type";
import pdf from "../../Assets/Mohit Bidikar CV.pdf";
import GitHubCalendar from "react-github-calendar";

function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  const root = document.documentElement;
  root.style.setProperty("--primary-bg-color", isLightMode ? "white" : "black");
  root.style.setProperty("--text-color", isLightMode ? "black" : "white");

  const githubTextColor = getComputedStyle(root)
    .getPropertyValue("--text-color")
    .trim();
  const githubTileColor = getComputedStyle(root)
    .getPropertyValue("--accent-color")
    .trim();
  const githubBackgroundColor = getComputedStyle(root)
    .getPropertyValue("--primary-bg-color")
    .trim();

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
          <br></br>
          <button onClick={toggleLightMode}>
            {isLightMode ? "Dark Mode" : "Light Mode"}
          </button>
          <a href={pdf} target="_blank" className="icons" rel="noreferrer">
            <i className="far fa-file-alt icons-dtls"> CV</i>
          </a>
        </Col>
        <Col md={5}>
          {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
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
      <Row style={{ justifyContent: "center" }}>
        <GitHubCalendar
          style={{ color: githubTextColor }}
          fontSize={20}
          theme={{
            light: [githubBackgroundColor, githubTileColor],
            dark: [githubBackgroundColor, githubTileColor],
          }}
          username="mohit4444"
        />
      </Row>
    </Container>
  );
}

export default Home;
