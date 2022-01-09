import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";


function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h4 className="resume-title"><strong className="purple">Web Applications</strong></h4>
            <Resumecontent
              title="Front-End"
              content={[
                "HTML, CSS, Bootstrap, Sass, JavaScript, Jquery",
              ]}
            />
            <Resumecontent
              date="Javascript frameworks"
              content={[
                "React Js",
                "Vue Js",
              ]}
            />
            <Resumecontent
              title="Back-End"
              date="Javascript frameworks"
              content={[
                "Node Js",
                "Express Js",
              ]}
            />

            <Resumecontent
              date="Java framework"
              content={[
                "Apache Wicket"
              ]}
            />

            <Resumecontent
              title="Databases"
              content={["PostgreSQL", "MS SQL", "MongoDB"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h4 className="resume-title"><strong className="purple">Other Skills</strong></h4>

            <Resumecontent
              title="Microservices"
              content={["Docker"]}
            />
            <Resumecontent
              title="Testing"
              content={["TestNG", "Selenium WebDriver"]}
            />
            <Resumecontent
              title="Version control"
              content={["Apache Subversion(SVN)", "GitLab", "GitHub"]}
            />

            <Resumecontent
              title="Project management"
              content={["JIRA"]}
            />

            <Resumecontent
              title="Computer networking"
              content={["Configuring routers", "Configuring switches", "Hardware troubleshooting"]}
            />

            <Resumecontent
              title="Proficient in"
              content={["Javascript", "Python", "Java"]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-java" />
          <Techstack iconName="cib-python" />
          <Techstack iconName="cib-postgresql" />
          <Techstack iconName="cib-docker" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
