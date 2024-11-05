import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiDocker,
  DiAws,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiStreamlit,
  SiPowerbi,
  SiTensorflow,
  SiFastapi,
  SiAmazonaws,
  SiSap,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      <p className="tech-icons-test">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="tech-icons-test">Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p className="tech-icons-test">TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p className="tech-icons-test">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p className="tech-icons-test">AWS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p className="tech-icons-test">SpringBoot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p className="tech-icons-test">MySql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <p className="tech-icons-test">Streamlit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><p className="tech-icons-test">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p className="tech-icons-test">PowerBI</p>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p className="tech-icons-test">FAST API</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
        <p className="tech-icons-test">SAP</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
