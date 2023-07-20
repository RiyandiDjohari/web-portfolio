import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../components/Particle";
import Type from "./Type";
import { Fade } from "react-reveal";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home({isDarkMode}) {
  return (
    <Container fluid className="home-section" id="home">
      <Particle isDarkMode={isDarkMode}/>
      <Container className="home-content">
        <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Col md={7} className="home-header">
            <Fade left>
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading">
                I am {" "}
                <strong className="main-name">Riyandi Djohari</strong>
              </h1>

              <div className="heading-description">
                <p>
                  An undergraduate information technology student who focused on frontend web development.
                </p>  
              </div>

              <div style={{ padding: "25px 50px", textAlign: "left"}}>
                <Type />
              </div>

              <div style={{ padding: "0 50px"}}>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/riyandidjohari"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/riyandidjohari/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/riyandidjohari31"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:riyandidjohari8@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </Col>

          <Col md={5}>
            <Fade right>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
