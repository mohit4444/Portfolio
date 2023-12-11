import { Container, Row, Col } from "react-bootstrap";
import SkillsContent from "./SkillsContent";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row className="resume">
        <Col md={6} className="resume-left">
          <SkillsContent
            title="Front-End"
            content={[
              "HTML, CSS, Bootstrap, Sass, JavaScript, Jquery",
              "React (redux, socket.i.o, apollo, storybook)",
            ]}
          />
          <SkillsContent
            title="Back-End"
            date="Javascript framework"
            content={[
              "Express Js (mongoose, socket.io, jwt, passport, clustering, apollo)",
              "Apache Wicket with Java",
              "GraphQL with Express",
              "REST with Express",
            ]}
          />
          <SkillsContent
            title="Databases"
            content={["PostgreSQL", "MS SQL", "MongoDB"]}
          />
          <SkillsContent
            title="Testing"
            content={["TestNG", "Selenium WebDriver", "Jest"]}
          />
        </Col>
        <Col md={6} className="resume-right">
          <SkillsContent title="Containers" content={["Docker"]} />
          <SkillsContent
            title="Version control"
            content={["GitHub", "GitLab"]}
          />

          <SkillsContent
            title="Project management"
            content={["Jira, Github"]}
          />
          <SkillsContent
            title="Computer networking"
            content={[
              "Configuring routers",
              "Configuring switches",
              "Hardware troubleshooting",
            ]}
          />
          <SkillsContent
            title="Hosting"
            content={["Netlify", "Heroku", "Render", "AWS"]}
          />
        </Col>
      </Row>

      <Row style={{ color: "white", justifyContent: "center" }}>
        <Techstack iconName="devicon-javascript-plain " />
        <Techstack iconName="devicon-nodejs-plain-wordmark " />
        <Techstack iconName="devicon-express-original-wordmark" />
        <Techstack iconName="devicon-react-original-wordmark" />
        <Techstack iconName="devicon-mongodb-plain-wordmark" />
        <Techstack iconName="cib-graphql" />
        <Techstack iconName="cib-redux" />
        <Techstack iconName="devicon-git-plain-wordmark" />
        <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        <Techstack iconName="cib-postgresql" />
        <Techstack iconName="cib-docker" />
        <Techstack iconName="cib-java" />
        <Techstack iconName="cib-python" />
      </Row>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>Find me on</h1>
          <p>Feel free to connect with me</p>
          <ul className="social-links">
            <li className="social-icons">
              <a
                href="https://github.com/mohit4444"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://in.linkedin.com/in/mohit-bidikar-756348123"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mohitttt4/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
