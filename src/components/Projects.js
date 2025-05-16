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
                    React
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    React Router
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    MongoDB
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
            <Modal.Title>E-commerce Platform Case Study</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-secondary mb-4">
              A comprehensive overview of the project, challenges, and
              solutions.
            </p>

            <h4>Project Overview</h4>
            <p className="text-secondary mb-4">
              This e-commerce platform was developed for a client in the fashion
              industry who needed a scalable solution to sell their products
              online. The project involved creating a complete shopping
              experience from product browsing to checkout and order management.
            </p>

            <div className="mb-4">
              <img
                src="https://via.placeholder.com/800x400"
                alt="E-commerce Platform Screenshot"
                className="img-fluid rounded mb-3"
              />
            </div>

            <h4>Challenges</h4>
            <ul className="text-secondary mb-4">
              <li>
                Implementing a secure payment processing system that complied
                with PCI standards
              </li>
              <li>
                Creating a responsive design that worked seamlessly across all
                devices
              </li>
              <li>
                Building a robust inventory management system with real-time
                stock updates
              </li>
              <li>
                Optimizing performance for a large product catalog with complex
                filtering options
              </li>
            </ul>

            <h4>Solutions</h4>
            <ul className="text-secondary mb-4">
              <li>
                Integrated Stripe for secure payment processing with custom
                checkout flow
              </li>
              <li>
                Implemented a mobile-first design approach using Bootstrap and
                responsive components
              </li>
              <li>
                Developed a custom inventory system with webhooks for real-time
                updates
              </li>
              <li>
                Utilized Redis caching and optimized database queries for faster
                product browsing
              </li>
            </ul>

            <h4>Results</h4>
            <ul className="text-secondary mb-4">
              <li>
                50% increase in mobile conversions compared to the client's
                previous platform
              </li>
              <li>99.9% uptime even during high-traffic sales events</li>
              <li>30% reduction in cart abandonment rate</li>
              <li>
                Seamless integration with existing inventory and fulfillment
                systems
              </li>
            </ul>

            <h4>Technologies Used</h4>
            <div className="mb-3">
              <Badge bg="primary" className="me-1 p-2">
                React
              </Badge>
              <Badge bg="success" className="me-1 p-2">
                Node.js
              </Badge>
              <Badge bg="info" className="me-1 p-2">
                MongoDB
              </Badge>
              <Badge bg="primary" className="me-1 p-2">
                Stripe API
              </Badge>
              <Badge bg="success" className="me-1 p-2">
                Redis
              </Badge>
              <Badge bg="info" className="me-1 p-2">
                AWS S3
              </Badge>
              <Badge bg="primary" className="me-1 p-2">
                Bootstrap
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
