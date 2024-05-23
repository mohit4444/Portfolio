import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Switch from "react-switch";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Type from "./Type";
import pdf from "../../Assets/Mohit Bidikar CV.pdf";
import GitHubCalendar from "react-github-calendar";

function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const root = document.documentElement;

  useEffect(() => {
    root.style.setProperty(
      "--primary-bg-color",
      isLightMode ? "white" : "black"
    );
    root.style.setProperty("--text-color", isLightMode ? "black" : "white");
  }, [root, isLightMode]);

  const accentColor = getComputedStyle(root)
    .getPropertyValue("--accent-color")
    .trim();

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <Container>
      <Row>
        <Col md={12} className="home-header">
          <div style={{ width: "90%" }}>
            <h1>
              Hi There! <span className="wave">👋🏻</span>
            </h1>
            <h1>
              I'm <strong data-text="Mohit Bidikar">Mohit Bidikar</strong>
            </h1>
            <Type />
            <br></br>
            <br></br>
            <a href={pdf} target="_blank" className="icons" rel="noreferrer">
              <i className="far fa-file-alt icons-dtls"> CV</i>
            </a>
          </div>
          <div>
            <Switch
              onChange={toggleLightMode}
              checked={isLightMode}
              uncheckedIcon={<i className="fas fa-sun"></i>}
              checkedIcon={<i className="fas fa-moon"></i>}
              height={24}
              width={48}
              className="react-switch"
              onColor={accentColor}
              offColor={accentColor}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>My journey so far</h1>
          <p>
            I have over four years of experience in software development, during
            which I have explored a wide range of technologies, including
            JavaScript (React, Node, Express), Java, PostgreSQL, MongoDB,
            Docker, and AWS. I hold both an MSc and a B.Eng in Computer Science.
            This blend of formal education and practical experience enables me
            to offer innovative software solutions.
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <GitHubCalendar
          style={{ color: isLightMode ? "black" : "white" }}
          fontSize={20}
          theme={{
            light: [isLightMode ? "white" : "black", accentColor],
            dark: [isLightMode ? "white" : "black", accentColor],
          }}
          username="mohit4444"
        />
      </Row>
    </Container>
  );
}

export default Home;
