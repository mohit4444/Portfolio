import { Container, Row, Col } from "react-bootstrap";
import SkillsContent from "./SkillsContent";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";

const skillsContentData = [
  {
    side: "left",
    contents: [
      {
        title: "Front-End",
        content: [
          "HTML, CSS, Bootstrap, Sass, JavaScript, TypeScript",
          "React (redux toolkit, socket.i.o, apollo, storybook, styled components)",
        ],
      },
      {
        title: "Back-End",
        date: "Javascript framework",
        content: [
          "Express Js (mongoose, socket.io, jwt, passport, clustering, apollo)",
          "Apache Wicket with Java",
          "GraphQL with Express",
          "REST with Express",
        ],
      },
      {
        title: "Databases",
        content: ["PostgreSQL", "MS SQL", "MongoDB"],
      },
      {
        title: "Testing",
        content: ["TestNG", "Selenium WebDriver", "Jest"],
      },
      { title: "Project management", content: ["Jira", "Github Issues"] },
      { title: "Version control", content: ["GitHub", "GitLab"] },

      {
        title: "CI/CD with containers",
        content: ["Jenkins", "Github Actions", "Docker"],
      },
      { title: "Cloud", content: ["Netlify", "Heroku", "Render", "AWS"] },
    ],
  },
];

const techStackIcons = [
  "devicon-javascript-plain ",
  "devicon-amazonwebservices-plain-wordmark",
  "devicon-react-original-wordmark",
  "devicon-nodejs-plain-wordmark",
  "devicon-mongodb-plain-wordmark",
  "cib-python",
  "devicon-selenium-original",
  "devicon-git-plain-wordmark",
  "cib-postgresql",
  "cib-docker",
  "cib-java",
  "devicon-tensorflow-original",
  "devicon-typescript-plain",
];

function Skills() {
  return (
    <Container>
      <Row>
        <Col md={12} className="center-aligned-div">
          <h1>Skills</h1>
        </Col>
      </Row>
      {skillsContentData.map((group, index) => (
        <Row className="resume" key={index}>
          {group.contents.map((content, idx) => (
            <Col key={idx} md={6} className={`resume-${group.side}`}>
              <SkillsContent {...content} />
            </Col>
          ))}
        </Row>
      ))}
      <Row style={{ color: "white", justifyContent: "center" }}>
        {techStackIcons.map((iconName, index) => (
          <Techstack key={index} iconName={iconName} />
        ))}
      </Row>
      <Row>
        <Col md={12} className="center-aligned-div">
          <p>Feel free to connect with me</p>
          <ul className="links">
            <li className="icons">
              <a
                href="https://github.com/mohit4444"
                target="_blank"
                rel="noreferrer"
                className="icons-dtls"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="icons">
              <a
                href="https://in.linkedin.com/in/mohit-bidikar-756348123"
                target="_blank"
                rel="noreferrer"
                className="icons-dtls"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="icons">
              <a
                href="https://www.instagram.com/mohitttt4/"
                target="_blank"
                rel="noreferrer"
                className="icons-dtls"
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
