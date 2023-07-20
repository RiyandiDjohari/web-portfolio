import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Riyandi Djohari </span>
            from <span className="purple"> Palu City, Indonesia.</span>
            <br />I am an Informatics Engineering Student at Tadulako University
            <br />
            <br />
            As a Front-end web developer, my workflow involves front end web technologies such as <span className="purple">HTML, CSS, JavaScript</span>, front-end frameworks and libraries like <span className="purple">Bootstrap, Tailwind CSS, React.js and Next Js</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
