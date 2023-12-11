import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import portfolio from "../../Assets/Projects/portfolio.mp4";
import exptrack from "../../Assets/Projects/exptrack.mp4";
import whatsapp from "../../Assets/Projects/whatsapp.mp4";
import genetic from "../../Assets/Projects/genetic.mp4";
import Card from "react-bootstrap/Card";
import pdf from "../../Assets/Report.pdf";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>Pet projects</h1>
        </Col>
      </Row>
      <Row>
        <center>
          <Col md={8} className="project-card">
            <Card className="project-card-view">
              <Card.Title>
                <div className="project-title">
                  <h4>AI navigation system</h4>
                </div>
              </Card.Title>
              <center>
                <video
                  className="project-video"
                  variant="top"
                  src={genetic}
                  controls
                  autoPlay
                  muted
                />
              </center>
              <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      Used tensorflow for the neural network and p5.js to create
                      the simulation
                    </li>
                    <li>
                      Developed an autonomous navigation system for boats in
                      narrow water channels, addressing a gap in marine
                      navigation automation. The project combines neural
                      networks and genetic algorithms to improve safety,
                      reliability, and efficiency in waterway transportation.
                    </li>
                  </ul>
                </Card.Text>
                <Button
                  style={{ marginRight: "10px", marginBottom: "10px" }}
                  href={pdf}
                  target="_blank"
                >
                  <i className="far fa-file-alt"> Research paper</i>
                </Button>
                <Button
                  style={{ marginBottom: "10px" }}
                  href="https://github.com/mohit4444/Autonomous-navigation-system-through-confined-waters"
                  target="_blank"
                >
                  <i className="fab fa-github"> Source code</i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} className="project-card">
            <Card className="project-card-view">
              <Card.Title>
                <div className="project-title">
                  <h4>Expense Tracker</h4>
                </div>
              </Card.Title>
              <center>
                <video
                  className="project-video"
                  variant="top"
                  src={exptrack}
                  controls
                  autoPlay
                  muted
                />
              </center>
              <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      Progressive web app (PWA) that can be used on mobile as
                      well as desktop.
                    </li>
                    <li>
                      React, Express, MongoDB, and hosted on Render with CI/CD
                    </li>
                    <li>
                      Allows you to track your daily expenses as well as the
                      monthly total.
                    </li>
                    <li>
                      Integrated a calendar so that the expenses for each day
                      can be tracked.
                    </li>
                  </ul>
                </Card.Text>
                <Button
                  href="https://expense-tracker-a4oj.onrender.com/"
                  target="_blank"
                >
                  <i className="fas fa-mobile-alt"> View App</i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} className="project-card">
            <Card className="project-card-view">
              <Card.Title>
                <div className="project-title">Whatsapp AI chatbot</div>
              </Card.Title>
              <center>
                <video
                  className="project-video"
                  variant="top"
                  src={whatsapp}
                  controls
                  autoPlay
                  muted
                />
              </center>
              <Card.Body>
                <b>
                  <u>OpenAI API and Hosted on AWS (EC2 instance)</u>
                </b>
                <br />
                <Card.Text style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      Chat with ChatGPT on WhatsApp and use it as your personal
                      assistant.
                    </li>
                  </ul>
                </Card.Text>
                <Button
                  href="https://github.com/mohit4444/WhatsappAI"
                  target="_blank"
                >
                  <i className="fab fa-github"> Source code</i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} className="project-card">
            <Card className="project-card-view">
              <Card.Title>
                <div className="project-title">Portfolio</div>
              </Card.Title>
              <center>
                <video
                  className="project-video"
                  variant="top"
                  src={portfolio}
                  controls
                  autoPlay
                  muted
                />
              </center>
              <Card.Body>
                <b>
                  <u>React, Sass, and hosted on Netlify with CI/CD</u>
                </b>
                <br />
                <Card.Text style={{ textAlign: "justify" }}>
                  <ul>
                    <li>The portfolio you are currently viewing.</li>
                    <li>
                      Particle JS used as the background to mimic
                      constellations.
                    </li>
                  </ul>
                </Card.Text>
                <Button
                  href="https://github.com/mohit4444/Portfolio"
                  target="_blank"
                >
                  <i className="fab fa-github"> Source code</i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </center>
      </Row>
    </Container>
  );
}

export default Projects;
