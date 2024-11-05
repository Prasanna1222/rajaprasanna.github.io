import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGooglecolab,
  SiMlflow,
  SiLmms,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <p className="tech-icons-test">Google Colab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icons-test">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icons-test">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMlflow />
        <p className="tech-icons-test">ML FLow</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
