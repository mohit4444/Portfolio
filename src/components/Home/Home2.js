import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp.jfif";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My journey with<span className="purple"> COMPUTERS </span>
            </h1>
            <p className="home-about-body">
              I was introduced to computers when my older sister received a desktop from the state government's cyber age scheme for students. I immediately got hooked on computer games and started surfing the web. My desire to understand the reasoning behind computer programs and the inner workings of this system, led to my Bachelor’s degree in Information Technology.
              To build a strong foundation in computer science i began with computer networking then i moved to the next layer of computer science i.e Software and now i'm in the process of specialising in back-end development using node js.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
        
              <img style={{borderRadius: 200 }}  src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/mohit.bidikar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://in.linkedin.com/in/mohit-bidikar-756348123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohitttt4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
