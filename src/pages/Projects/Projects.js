import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import backgroundGenerator from "../../Assets/Projects/backgroundGenerator.png";
import robofriends from "../../Assets/Projects/robofriends.png";
import quoteGenerator from "../../Assets/Projects/quoteGenerator.png";
import lmsWebAdmin from "../../Assets/Projects/lms-webadmin.png";
import lmsWebUser from "../../Assets/Projects/lms-enduser.png";
import blackCanyon from "../../Assets/Projects/blackcanyon.png";
import forumcare from "../../Assets/Projects/forumcare.png";
import promptopia from "../../Assets/Projects/promptopia.png";

function Projects({ isDarkMode }) {
  return (
    <Container fluid className="project-section">
      <Particle isDarkMode={isDarkMode}/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="project-heading-description">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={blackCanyon}
              isBlog={false}
              title="Black Canyon Transport"
              description="Black Canyon Transport is a fully responsive rent car landing page build with react, aos js and bootstrap. Have features that allow user to see list of all cars, search car to filter out the cars, and booking car. "
              ghLink="https://github.com/RiyandiDjohari/black-canyon-transport"
              demoLink="https://www.rentalmobiltermurahberkualitaspalu.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={forumcare}
              isBlog={false}
              title="ForumCare"
              description="Forum Discussion and Blogging App build with React.js, Redux, GraphQL, Bootstrap, Material-UI, Firebase Storage & Auth, and Netlify. Have features that allows user to login, register and sharing their knowledge through forum discussion and blog."
              ghLink="https://github.com/RiyandiDjohari/mini-project_Riyandi-Dwitama-Djohari"
              demoLink="https://forumcare.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="Promptopia is an AI prompting tool for the modern world. Build with Next.js 13, Tailwind, and MongoDB. Have features authentication with google, that allow users can create, edit, and delete prompt. Each user has their own profile page, and the main page of Promptopia allows users to search for prompts using keywords, tags, or usernames."
              ghLink="https://github.com/RiyandiDjohari/project_next_13_promptopia"
              demoLink="https://project-next-13-promptopia.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={lmsWebAdmin}
              isBlog={false}
              title="Learning Management System (Web Admin)"
              description="Learning Management System for admin build with react, bootstrap, material ui, sweetalert , firebase storage, axios. Admin can manage users by adding and updating user data, admins can also add, update, delete courses and materials, admins can also handle course access requests from end users "
              ghLink="https://github.com/capstone-kelompok-4/Web-Admin"
              // demoLink="#"
            />
          </Col>


          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={lmsWebUser}
              isBlog={false}
              title="Learning Management System (Web End User)"
              description="Learning Management System for end-user build with react, bootstrap, material ui, sweet alert , firebase storage, axios. Have features that end users or employees can take part in course training based on their respective specializations or can take part outside their specialization with a feature request"
              ghLink="https://github.com/capstone-kelompok-4/FE-React"
              // demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={robofriends}
              isBlog={false}
              title="Robofriends"
              description="Robofriends is a simple front-end project that fetches robots data from free APIs build with React.js, Redux, and Tachyons. Using robohash to generate unique random images. The app is responsive, and users can use the search bar to filter out the target robot."
              ghLink="https://github.com/RiyandiDjohari/robofriends"
              demoLink="https://riyandidjohari.github.io/robofriends/"
            />
          </Col>


          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={backgroundGenerator}
              isBlog={false}
              title="Background Generator"
              description="An interactive background generator build with HTML, CSS, and Javascript. That allows users to test and see live changes of color gradient, tilted direction. Also can generate random background. If done, simply click on a button to copy the CSS code to the clipboard."
              ghLink="https://github.com/RiyandiDjohari/background-generator"
              demoLink="https://riyandidjohari.github.io/background-generator/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={quoteGenerator}
              isBlog={false}
              title="Random Quote Generator"
              description="A fully responsive quote generator app that randomly generate motivative quotes build using React js, and Deployment using Github Pages. Make an asynchronous fetch request to a free rest API to obtain quote data."
              ghLink="https://github.com/RiyandiDjohari/quote-generator"
              demoLink="https://riyandidjohari.github.io/quote-generator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
