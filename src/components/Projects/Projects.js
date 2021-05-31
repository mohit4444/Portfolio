import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import expressmongo from "../../Assets/Projects/expressmongo.jpeg";
import expressmysql from "../../Assets/Projects/expressmysql.jpg";
import nodeexecutable from "../../Assets/Projects/nodeexecutable.png";
import portfolio from "../../Assets/Projects/portfolio.jpg";
import money from "../../Assets/Projects/money.jpeg";
import docker from "../../Assets/Projects/docker.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Node js and Express js</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressmongo}
              isBlog={false}
              title="Express and MongoDB CRUD"
              description="Simplified CRUD app using node js,express js and mongodb"
              link="https://github.com/mohit4444/Express-and-Mongodb-REST-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressmysql}
              isBlog={false}
              title="Express and MySQL CRUD"
              description="Simplified CRUD app using node js,express js and mysql"
              link="https://github.com/mohit4444/Express-and-MySql-REST-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodeexecutable}
              isBlog={false}
              title="Packaging in node"
              description="Create an executable of the express project to hide the source code"
              link="https://github.com/mohit4444/Packaging-node"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">React js</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Porfolio"
              description="Portfolio you are viewing made using react js"
              link="https://github.com/mohit4444/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              isBlog={false}
              title="Money Saved"
              description="Money saved web application made using react js,express js and mongodb"
              link="https://github.com/mohit4444/Money-saved-web-app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Money Saved with Docker"
              description="Money saved web application made using react js,express js and mongodb.The back-end(express and mongo) runs in a dockerised container"
              link="https://github.com/mohit4444/docker"
            />
          </Col>


        </Row>
        <h1 className="project-heading">
          <strong className="purple">Exoplanets transits using lightkurve</strong>
        </h1>
        <h6>Will be made available soon</h6>

        <h1 className="project-heading">
          <strong className="purple">Native Android</strong>
        </h1>
        <h6>Will be made available soon</h6>

        <h1 className="project-heading">
          <strong className="purple">Native IOS</strong>
        </h1>
        <h6>Will be made available soon</h6>


        <h1 className="project-heading">
          <strong className="purple">Cross-Platform</strong>
        </h1>
        <h6>Will be made available soon</h6>

      </Container>
    </Container>
  );
}

export default Projects;
