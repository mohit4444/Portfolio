import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
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
                "HTML, CSS, Bootstrap, JavaScript, Jquery",
              ]}
            />
            <Resumecontent
              date="Javascript frameworks"
              content={[
                "React js",
                "Vue js",
              ]}
            />
            <Resumecontent
              title="Back-End"
              date="Javascript frameworks"
              content={[
                "Node js",
                "Express js",
              ]}
            />

            <Resumecontent
              date="Java framework"
              content={[
                "Apache Wicket"
              ]}
            />
            <h4 className="resume-title"><strong className="purple">Mobile Applications</strong></h4>
            <Resumecontent
              title="Native Android"
              content={[
                "Java",
              ]}
            />
            <Resumecontent
              title="Native IOS"
              content={[
                "Swift",
              ]}
            />

            <Resumecontent
              title="Cross-Platform"
              content={[
                "Apache Cordova",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h4 className="resume-title"><strong className="purple">Other Skills</strong></h4>
            <Resumecontent
              title="Databases"
              content={["PostgreSQL", "MS SQL", "MongoDB"]}
            />
            <Resumecontent
              title="Testing"
              content={["TestNG", "Selenium WebDriver"]}
            />
            <Resumecontent
              title="Version control"
              content={["Apache Subversion(SVN)", "GitLab"]}
            />

            <Resumecontent
              title="Project management"
              content={["JIRA"]}
            />

            <Resumecontent
              title="Computer networking"
              content={["Configuring routers", "Configuring switches", "Hardware troubleshooting"]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="cib-pytorch" />
          <Techstack iconName="cib-java" />
          <Techstack iconName="cib-postgresql" />
          <Techstack iconName="cib-tensorflow" />
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
