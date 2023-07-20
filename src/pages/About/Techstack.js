import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
