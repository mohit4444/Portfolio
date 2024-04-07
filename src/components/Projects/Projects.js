import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import portfolio from "../../Assets/Projects/portfolio.mp4";
import exptrack from "../../Assets/Projects/exptrack.mp4";
import whatsapp from "../../Assets/Projects/whatsapp.mp4";
import genetic from "../../Assets/Projects/genetic.mp4";
import spacex from "../../Assets/Projects/spacex.mp4";
import Card from "react-bootstrap/Card";
import pdf from "../../Assets/Report.pdf";
import Button from "react-bootstrap/Button";
import Devops from "../../Assets/Projects/Devops.jpeg";

const projectDetails = [
  {
    title: "AI navigation system",
    type: "video",
    src: genetic,
    description:
      "An autonomous boat navigation system for narrow water channels using TensorFlow and p5.js, combining neural networks with genetic algorithms for improved safety and efficiency in marine navigation.",
    buttons: [
      // { href: pdf, text: "Research paper", icon: "far fa-file-alt" },
      {
        href: "https://github.com/mohit4444/Autonomous-navigation-system-through-confined-waters",
        text: "Source code",
        icon: "fab fa-github",
      },
    ],
  },
  {
    title: "MERN Deployment Toolkit",
    type: "image",
    src: Devops,
    description:
      "A toolkit for deploying MERN stack applications using Docker, GitHub Actions, and AWS Elastic Beanstalk, designed to streamline the development and deployment process.",
    buttons: [
      {
        href: "https://github.com/mohit4444/MERN-Deployment-Toolkit-Docker-GitHub-Actions-and-AWS-Beanstalk",
        text: "Source code",
        icon: "fab fa-github",
      },
    ],
  },
  {
    title: "Expense Tracker",
    type: "video",
    src: exptrack,
    description:
      "A Progressive Web App (PWA) for tracking daily expenses, developed using React, Express, and MongoDB, with features for mobile and desktop platforms.",
  },
  {
    title: "SpaceX Launch Tracker",
    type: "video",
    src: spacex,
    description:
      "Interactive web application using React and SpaceX API to present information on SpaceX launches, including past and upcoming missions.",
    buttons: [
      {
        href: "https://spacex-launch-tracker-mohit.vercel.app/",
        text: "View App",
        icon: "fas fa-mobile-alt",
      },
      {
        href: "https://github.com/mohit4444/SpaceX-Launch-Tracker",
        text: "Source code",
        icon: "fab fa-github",
      },
    ],
  },
  {
    title: "WhatsApp AI Chatbot",
    type: "video",
    src: whatsapp,
    description:
      "ChatGPT integrated WhatsApp chatbot for a personal assistant experience, powered by OpenAI's API and hosted on an AWS EC2 instance.",
    buttons: [
      {
        href: "https://github.com/mohit4444/WhatsappAI",
        text: "Source code",
        icon: "fab fa-github",
      },
    ],
  },
  {
    title: "Portfolio Website",
    type: "video",
    src: portfolio,
    description:
      "A personal portfolio website showcasing a synth theme, built with React and Sass, and deployed on Netlify with CI/CD.",
    buttons: [
      {
        href: "https://github.com/mohit4444/Portfolio",
        text: "Source code",
        icon: "fab fa-github",
      },
    ],
  },
];

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
          {projectDetails.map((project, index) => (
            <Col md={8} key={index} className="project-card">
              <Card className="project-card-view">
                <Card.Title>
                  <label className="project-title">{project.title}</label>
                </Card.Title>
                <center>
                  {project.type === "video" ? (
                    <video
                      className="project-video"
                      src={project.src}
                      controls
                      autoPlay
                      muted
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="project-img"
                    />
                  )}
                </center>
                <Card.Body>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {project.description}
                  </Card.Text>
                  {project.buttons &&
                    project.buttons.map((button, btnIndex) => (
                      <Button
                        key={btnIndex}
                        href={button.href}
                        target="_blank"
                        className="mr-2 mb-2"
                      >
                        <i className={`${button.icon}`}></i> {button.text}
                      </Button>
                    ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </center>
      </Row>
    </Container>
  );
}

export default Projects;
