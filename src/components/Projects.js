"use client";

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Modal,
} from "react-bootstrap";
import {
  BsGithub,
  BsBoxArrowUpRight,
  BsFileText,
  BsDownload,
  BsArrowRight,
} from "react-icons/bs";

function Projects() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const handleClose = () => setShowCaseStudy(false);
  const handleShow = () => setShowCaseStudy(true);

  return (
    <section id="projects" className="projects-section py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            A selection of my recent work and personal projects.
          </p>
        </div>

        <Row>
          {/* Project 1*/}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Pokedex App</Card.Title>
                <Card.Subtitle className="mb-3 text-primary">
                  Interactive Pokemon database
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="primary" className="me-1">
                    API
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    Bootstrap
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    JavaScript
                  </Badge>
                </div>{" "}
                <Card.Img
                  variant="top"
                  src="/images/Pokedex.png"
                  alt="Pokedex App"
                />
                <Card.Text className="text-primary">
                  Displays Pokemon data using the PokeAPI. Click on a Pokemon
                  name to open a modal with more details.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/HIPgirl95/Pokedex"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href="https://hipgirl95.github.io/Pokedex/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Project 2 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-success border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Movie API</Card.Title>
                <Card.Subtitle className="mb-3 text-success">
                  From-scratch API development
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="success" className="me-1">
                    Node.js
                  </Badge>
                  <Badge bg="success" className="me-1">
                    Postman
                  </Badge>
                  <Badge bg="success" className="me-1">
                    PostgreSQL
                  </Badge>
                  <Badge bg="success">Express</Badge>
                </div>
                <Card.Img
                  variant="top"
                  src="/images/api.png"
                  alt="Movie API"
                  height="300"
                />
                <Card.Text className="text-success">
                  I created an API from scratch using Node.js and Express. It
                  allows users to search for movies, view details, and manage
                  profiles
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-success"
                  size="sm"
                  href="https://github.com/HIPgirl95/movie_api"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Project 3 with case study */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25 project-card">
              <div className="position-relative">
                <Badge
                  bg="primary"
                  className="position-absolute top-0 end-0 m-2"
                >
                  Case Study
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>React myFlix Client</Card.Title>
                <Card.Subtitle className="mb-3 text-primary">
                  React-based movie database client
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="primary" className="me-1">
                    MERN stack
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    React Router
                  </Badge>
                  <Badge bg="primary">React-Bootstrap</Badge>
                </div>
                <Card.Img
                  variant="top"
                  src="/images/myFlix-React.png"
                  alt="React myFlix Client"
                />
                <Card.Text className="text-primary">
                  This is a client-side application for the myFlix movie
                  database. It allows users to view and manage their favorite
                  movies, including filtering and saving favorites. It is not
                  currently operational, but I'm working on it.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com/HIPgirl95/myFlix-client"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={handleShow}
                >
                  <BsFileText className="me-1" /> Case Study
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href="https://my-flix-hannah-hogan.netlify.app/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* Project 4 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-success border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Meet App</Card.Title>
                <Card.Subtitle className="mb-3 text-success">
                  Displays events and allows filtering
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="success" className="me-1">
                    Recharts
                  </Badge>
                  <Badge bg="success" className="me-1">
                    Jest
                  </Badge>
                  <Badge bg="success" className="me-1">
                    JavaScript
                  </Badge>
                  <Badge bg="success">React</Badge>
                </div>{" "}
                <Card.Img
                  variant="top"
                  src="/images/meetApp.png"
                  alt="Meet App"
                />
                <Card.Text className="text-success">
                  Using React, I made an app where you can look at events! Some
                  of the fun features of this include: an actual downloadable
                  app, offline access, and data charts!
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-success"
                  size="sm"
                  href="https://github.com/HIPgirl95/meet"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  href="https://hipgirl95.github.io/meet/"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Project 5 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-info border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Mobile Chat App</Card.Title>
                <Card.Subtitle className="mb-3 text-info">
                  Real-time messaging platform
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="info" className="me-1">
                    React Native
                  </Badge>
                  <Badge bg="info" className="me-1">
                    GiftedChat
                  </Badge>
                  <Badge bg="info" className="me-1">
                    Firebase
                  </Badge>
                  <Badge bg="info">Expo</Badge>
                </div>
                <Card.Img src="/images/Mobile-App.png" alt="Mobile Chat App" />
                <Card.Text className="text-info">
                  This app allows users to send and receive messages in
                  real-time. It also allows users to share images and their
                  location, after asking for permission, of course. It uses
                  Firebase for authentication and data storage, and GiftedChat
                  for the chat interface.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-info"
                  size="sm"
                  href="https://github.com/HIPgirl95/mobile-app"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Project 6 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-info border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Angular myFlix Client</Card.Title>
                <Card.Subtitle className="mb-3 text-success">
                  Angular-based movie database client
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="success" className="me-1">
                    Angular
                  </Badge>
                  <Badge bg="success" className="me-1">
                    Material
                  </Badge>
                  <Badge bg="success" className="me-1">
                    RxJS
                  </Badge>
                  <Badge bg="success">TypeScript</Badge>
                </div>
                <Card.Img
                  variant="top"
                  src="/images/myFlix-Angular.png"
                  alt="Angular myFlix Client"
                />
                <Card.Text className="text-success">
                  This is a client-side application for the myFlix movie
                  database, but made with Angular! It allows users to view and
                  filter movies, as well as manage their favorites. It IS
                  currently operational.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-success"
                  size="sm"
                  href="https://github.com/HIPgirl95/myFlix-Angular"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  href="https://hipgirl95.github.io/myFlix-Angular/welcome"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            href="https://github.com/HIPgirl95"
            target="_blank"
          >
            View More Projects <BsArrowRight className="ms-2" />
          </Button>
        </div>

        {/* Case Study Modal */}
        <Modal show={showCaseStudy} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>myFlix React Client Case Study</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Project Overview</h4>
            <p className="text-primary mb-4">
              myFlix is a full-stack movie database app that empowers users to
              browse, filter, and manage favorite movies in a fast and
              accessible interface. Built using the MERN stack, it emphasizes
              responsive design, performance, and clean user experience.
            </p>

            <div className="mb-4">
              <img
                src="/images/myFlix-React.png"
                alt="E-commerce Platform Screenshot"
                className="img-fluid rounded mb-3"
              />
            </div>
            <h4>Key Features</h4>
            <ul className="text-primary mb-4">
              <li>User registration, login, and profile management</li>
              <li>Favorite movie list with add/remove functionality</li>
              <li>Genre, director, and movie detail modals</li>
              <li>Responsive design for mobile and desktop</li>
            </ul>
            <h4>Challenges</h4>
            <ul className="text-info mb-4">
              <li>
                Creating a secure authentication and authorization system for
                user accounts.
              </li>
              <li>
                Designing a responsive layout that worked seamlessly across all
                devices.
              </li>
              <li>
                Ensuring dynamic rendering of movie cards in real-time as new
                data was added to the database.
              </li>
              <li>
                Enhancing the UI/UX to ensure smooth navigation, accessibility,
                and performance.
              </li>
            </ul>

            <h4>Solutions</h4>
            <ul className="text-primary mb-4">
              <li>
                Implemented JWT-based authentication with encrypted password
                storage and protected API endpoints using Express.js and
                MongoDB.
              </li>
              <li>
                Used Bootstrap, SCSS, and Flexbox/Grid to build a fully
                responsive interface with consistent component styling across
                devices.
              </li>
              <li>
                Fetched movie data from a RESTful API and rendered it
                dynamically using React state, hooks, and array mapping
                (`.map()`).
              </li>
              <li>
                Focused on high contrasting colors and clear typography for
                better readability and accessibility.
              </li>
            </ul>

            <h4>Technologies Used</h4>
            <p className="text-secondary mb-4">
              This project leveraged several tools across the full development
              stack:
            </p>
            <div className="mb-3">
              <Badge bg="primary" className="me-1 p-2">
                MongoDB
              </Badge>
              <Badge bg="success" className="me-1 p-2">
                Express
              </Badge>
              <Badge bg="info" className="me-1 p-2">
                React
              </Badge>
              <Badge bg="primary" className="me-1 p-2">
                Node.js
              </Badge>
              <Badge bg="success" className="me-1 p-2">
                React Router
              </Badge>
              <Badge bg="info" className="me-1 p-2">
                React-Bootstrap
              </Badge>
              <Badge bg="primary" className="me-1 p-2">
                Postman
              </Badge>
              <Badge bg="success" className="me-1 p-2">
                JWT
              </Badge>
              <Badge bg="info" className="me-1 p-2">
                Git
              </Badge>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-primary"
              href="/case-studies/myFlixCaseStudy.pdf"
              target="_blank"
            >
              <BsDownload className="me-2" /> Download Full Case Study (PDF)
            </Button>
            <Button
              variant="primary"
              href="https://my-flix-hannah-hogan.netlify.app/"
              target="_blank"
            >
              <BsBoxArrowUpRight className="me-2" /> View Live Project
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default Projects;
