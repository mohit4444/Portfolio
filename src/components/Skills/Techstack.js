import React from "react";
import { Col } from "react-bootstrap";
import "../../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(prop) {
  return (
    <div>
      <Col xs={4} md={2} className="tech-icons">
        <i className={`${prop.iconName}`}></i>
      </Col>
    </div>
  );
}

export default Techstack;
