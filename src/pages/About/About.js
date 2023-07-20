import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profilPic from "../../Assets/profilePic1.jpg";
import Toolstack from "./Toolstack";
import { Fade } from "react-reveal";

function About({isDarkMode}) {

  return (
    <Container fluid className="about-section">
      <Particle isDarkMode={isDarkMode}/>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Fade left>
              <h1 style={{ fontSize: "2.2em", padding: "16px", margin: "0"}}>
                My <span className="purple">Profile</span>
              </h1>
              <Aboutcard />
            </Fade>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px", display: "flex", justifyContent: "center"}}
            className="about-img"
          >
            <Fade right>
              <img src={profilPic} alt="about" className="img-fluid" style={{borderRadius: "50%", height: "300px", textAlign: "center", border: "5px solid #c770f0"}} />
            </Fade>
          </Col>
        </Row>

        <Fade top>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </Fade>

        <Fade top>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Fade>
        
      </Container>
    </Container>
  );
}

export default About;
