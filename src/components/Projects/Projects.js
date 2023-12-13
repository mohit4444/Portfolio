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
                  In this project, I developed an autonomous boat navigation
                  system for narrow water channels using TensorFlow and p5.js.
                  The system, which combines neural networks with genetic
                  algorithms, improves safety, reliability, and efficiency in
                  marine navigation, providing a practical solution for
                  challenging marine environments.
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
                  The application is a Progressive Web App (PWA) designed for
                  both mobile and desktop platforms, developed using React,
                  Express, and MongoDB. It is hosted on Render with CI/CD
                  practices. The app's primary function is to facilitate the
                  tracking of daily expenses, as well as providing a monthly
                  total.
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
                <Card.Text style={{ textAlign: "justify" }}>
                  Chat with ChatGPT on WhatsApp for a personal assistant
                  experience, powered by OpenAI's API and hosted on an AWS EC2
                  instance for seamless interaction.
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
                <Card.Text style={{ textAlign: "justify" }}>
                  This portfolio, showcasing a synth theme, is built with React
                  and Sass, and hosted on Netlify with CI/CD
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
