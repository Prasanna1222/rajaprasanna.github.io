import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import baymax from "../../Assets/Projects/baymax.jpg";
import bitsOfCode from "../../Assets/Projects/supply.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baymax}
              isBlog={false}
              title="BAYMAX: AI DRIVEN PERSONALIZED MEDICAL ASSISTANT"
              description="Developed a comprehensive web application utilizing
machine learning, including Convolutional Neural
Networks (CNN), OCR, and Natural Language
Processing (NLP) techniques to predict diseases based
on user symptoms and lab reports.
• Automated the extraction of text from scanned lab
reports using Tesseract OCR, followed by
summarization with Hugging Face Transformers to
enhance the efficiency of medical data analysis"
              ghLink="https://github.com/Prasanna1222/AI_Driven_Personal_Assistant"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Supply Chain and Inventory Management Using Power BI"
              description="•	Performed an in-depth analysis of total profit by region and evaluated sales performance by product category to understand their impact on overall business outcomes.

•	Managed current inventory levels, forecasted annual sales based on historical data, evaluated the likelihood of late deliveries, and computed inventory turnover rates to enhance operational efficiency
"
              ghLink="https://github.com"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
