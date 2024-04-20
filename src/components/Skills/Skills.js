import { Container, Row, Col } from "react-bootstrap";
import SkillsContent from "./SkillsContent";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Slider from "react-slick";
import javascript2 from "../../Assets/Certifications/javascript2.jpg";
import frontend from "../../Assets/Certifications/frontend.jpg";
import sql2 from "../../Assets/Certifications/sql2.jpg";
import node from "../../Assets/Certifications/node.jpg";
import react from "../../Assets/Certifications/react.jpg";
import javascript from "../../Assets/Certifications/javascript.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const certifications = [
  {
    path: javascript2,
    link: "https://www.hackerrank.com/certificates/aa0a8d75ae5a",
  },
  {
    path: frontend,
    link: "https://www.hackerrank.com/certificates/7bd7a2e87bae",
  },
  { path: sql2, link: "https://www.hackerrank.com/certificates/3b5fbf6357fa" },
  { path: node, link: "https://www.hackerrank.com/certificates/b78da0ea5bf6" },
  { path: react, link: "https://www.hackerrank.com/certificates/0eac8ec01b1c" },
  {
    path: javascript,
    link: "https://www.hackerrank.com/certificates/8ecb8b05c580",
  },
];

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
  "devicon-nodejs-plain-wordmark",
  "devicon-express-original-wordmark",
  "devicon-react-original-wordmark",
  "devicon-mongodb-plain-wordmark",
  "cib-graphql",
  "cib-redux",
  "devicon-selenium-original",
  "devicon-git-plain-wordmark",
  "devicon-bootstrap-plain-wordmark",
  "cib-postgresql",
  "cib-docker",
  "cib-java",
  "devicon-amazonwebservices-plain-wordmark",
  "devicon-nginx-original",
  "devicon-sass-original",
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
      <Row>
        <Col md={12}>
          <center>
            <h5 style={{ color: "white" }} className="resume-title">
              Certifications
            </h5>
          </center>
          <Slider {...settings}>
            {certifications.map((cert, index) => (
              <div key={index}>
                <center>
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    <img
                      className="slideimg"
                      src={cert.path}
                      alt="certification"
                    ></img>
                  </a>
                </center>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
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
