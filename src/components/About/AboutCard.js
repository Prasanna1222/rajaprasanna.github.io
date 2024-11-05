import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raja Prasanna M </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            <br />
            <span className="purple"> Professional Overview : </span>
            A data enthusiast with a strong foundation in software development and data integration, I’m passionate about leveraging analytics and machine learning to solve real-world challenges.  <br />
            <br />
            <span className="purple">Project Experience: </span>
            As an Associate Developer, I developed  <span className="purple">data integration solutions</span> to enhance data flow and synchronization across platforms. I created  <span className="purple">data visualization dashboards</span> that delivered actionable insights for better decision-making. Additionally, I contributed to SAP’s Retrieval-Augmented Generation  <span className="purple">(RAG)</span> application, utilizing  <span className="purple">Generative AI</span> and  <span className="purple">Large Language Models (LLMs)</span> to build a chatbot that optimized information retrieval.
</p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
