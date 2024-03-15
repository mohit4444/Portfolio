import { Container, Row, Col } from "react-bootstrap";
import SkillsContent from "./SkillsContent";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Slider from "react-slick";
import javascript2 from "../../Assets/Certifications/javascript2.jpg";
import frontend from "../../Assets/Certifications/frontend.jpg";
import sql2 from "../../Assets/Certifications/sql2.jpg";

function Skills() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for desktops and larger devices
    slidesToScroll: 3, // Default for desktops and larger devices
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Phones and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
              "HTML, CSS, Bootstrap, Sass, JavaScript, TypeScript",
              "React (redux toolkit, socket.i.o, apollo, storybook, styled components)",
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
            content={["Jira", "Github Issues"]}
          />

          <SkillsContent
            title="CI/CD"
            content={["Jenkins", "Github Actions"]}
          />

          <SkillsContent
            title="Cloud"
            content={["Netlify", "Heroku", "Render", "AWS"]}
          />
        </Col>
        <Col md={12}>
          <center>
            <h5 className="resume-title">Certifications</h5>
          </center>
          <Slider {...settings}>
            <div>
              <center>
                <img
                  className="slideimg"
                  src={javascript2}
                  alt="certification"
                ></img>
              </center>
            </div>
            <div>
              <center>
                <img
                  className="slideimg"
                  src={frontend}
                  alt="certification"
                ></img>
              </center>
            </div>
            <div>
              <center>
                <img className="slideimg" src={sql2} alt="certification"></img>
              </center>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
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
        <Techstack iconName="devicon-selenium-original" />
        <Techstack iconName="devicon-git-plain-wordmark" />
        <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        <Techstack iconName="cib-postgresql" />
        <Techstack iconName="cib-docker" />
        <Techstack iconName="cib-java" />
        <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
        <Techstack iconName="devicon-nginx-original" />
        <Techstack iconName="devicon-sass-original" />
        <Techstack iconName="devicon-tensorflow-original" />
        <Techstack iconName="devicon-typescript-plain" />
      </Row>
      <Row>
        <Col md={12} className="center-aligned-div">
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
