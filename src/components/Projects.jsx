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
  Image,
} from "react-bootstrap";
import { BsGithub, BsBoxArrowUpRight, BsFileText } from "react-icons/bs";

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
          <Col lg={4} className="mb-4">
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
          <Col lg={4} className="mb-4">
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
          <Col lg={4} className="mb-4">
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
          <Col lg={4} className="mb-4">
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
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25 project-card">
              <Card.Body>
                <Card.Title>Mobile Chat App</Card.Title>
                <Card.Subtitle className="mb-3 text-primary">
                  Real-time messaging platform
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="primary" className="me-1">
                    React Native
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    GiftedChat
                  </Badge>
                  <Badge bg="primary" className="me-1">
                    Firebase
                  </Badge>
                  <Badge bg="primary">Expo</Badge>
                </div>
                <Card.Img src="/images/Mobile-App.png" alt="Mobile Chat App" />
                <Card.Text className="text-primary">
                  This app allows users to send and receive messages in
                  real-time. It also allows users to share images and their
                  location, after asking for permission, of course. It uses
                  Firebase for authentication and data storage, and GiftedChat
                  for the chat interface.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
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
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25 project-card">
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

        {/* Case Study Modal */}
        <Modal show={showCaseStudy} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>myFlix React Client Case Study</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {/* ===== Overview =================================================== */}
              <h4>Project Overview</h4>
              <p className="text-primary mb-4">
                <strong>myFlix</strong> was a project that I developed as part
                of my Full-Stack web development course at CareerFoundry to
                showcase what I learned about JavaScript and React. After
                building an API containing movie information, I realized I
                needed an effective way to present my work. To solve this, I
                created myFlix – an intuitive and user-friendly interface that
                allows users to seamlessly interact with my API.
              </p>
              <Image
                src="/images/myFlix-React.png"
                alt="myFlix React Client"
                fluid
                rounded
                className="mb-4"
              />

              {/* ===== Team & Roles ============================================== */}
              <h5>Team &amp; Mentorship</h5>
              <ul className="text-info mb-4 ps-3">
                <li>Lead Developer – Hannah Hogan</li>
                <li>Mentor – Drew Mercer</li>
                <li>Tutor – Davi Ferreira</li>
                <li>Consultants – Tim Pamplin &amp; Jason Pamplin</li>
              </ul>

              {/* ===== Tools & Tech ============================================== */}
              <h4>Tools &amp; Tech Stack</h4>
              <div className="mb-3">
                {[
                  { bg: "primary", label: "MERN stack" },
                  { bg: "success", label: "Redux" },
                  { bg: "info", label: "Bootstrap" },
                  { bg: "primary", label: "Heroku" },
                  { bg: "success", label: "Parcel" },
                  { bg: "info", label: "Netlify" },
                  { bg: "primary", label: "Postman" },
                  { bg: "success", label: "Git/GitHub" },
                  { bg: "info", label: "VS Code" },
                ].map(({ bg, label }) => (
                  <Badge key={label} bg={bg} className="me-1 p-2">
                    {label}
                  </Badge>
                ))}
              </div>

              {/* ===== Architecture / Key Views ================================== */}
              <h4>Application Architecture &amp; Key Views</h4>
              <div className="text-primary mb-4">
                {/* Main View */}
                <div className="d-flex align-items-start mb-4">
                  <Image
                    src="/images/MainView.png"
                    alt="Screenshot of main view"
                    fluid
                    rounded
                    className="me-3"
                    style={{ width: "30%" }}
                  />
                  <div>
                    <strong>Main View:</strong> This view enables users to
                    browse movies and see brief details about each one. To
                    achieve this, I utilized React-Bootstrap’s Cards, allowing
                    me to design a single card component and dynamically
                    generate a new instance for each movie. This approach
                    ensured a consistent and visually appealing layout while
                    streamlining the development process.
                  </div>
                </div>

                {/* Movie View */}
                <div className="d-flex align-items-start mb-4">
                  <div>
                    <strong>Movie View:</strong> This view provides users with
                    detailed information about a selected movie. For example,
                    instead of simply displaying the director's name, it
                    includes a short biography to offer more context.
                    Additionally, this view allows users to add the movie to
                    their favorites list, enhancing personalization and user
                    engagement.
                  </div>
                  <Image
                    src="/images/MovieView.png"
                    alt="Screenshot of movie view"
                    fluid
                    rounded
                    className="me-3"
                    style={{ width: "30%" }}
                  />
                </div>

                {/* Profile View */}
                <div className="d-flex align-items-start mb-4">
                  <Image
                    src="/images/ProfileView.png"
                    alt="Screenshot of profile view"
                    fluid
                    rounded
                    className="me-3"
                    style={{ width: "30%" }}
                  />
                  <div>
                    <strong>Profile View:</strong> This view enables users to
                    view and edit their personal information while also
                    providing access to their list of favorite movies. One
                    unexpected challenge I encountered was formatting the user's
                    birthday. By default, the date included an unnecessarily
                    detailed time component down to the millisecond—an
                    impractical level of precision for a birthdate. To resolve
                    this, I used a split function to extract only the relevant
                    parts, displaying the date in a more user-friendly format
                    with just the month, day, and year.
                  </div>
                </div>

                {/* Login / Signup View */}
                <div className="d-flex align-items-start mb-4">
                  <div>
                    <strong>Login / Signup View:</strong> To access movies or
                    manage an account, users must first sign up. The signup view
                    generates a unique user ID and an authentication token upon
                    registration. When logging in, the system verifies the
                    username and password against the stored credentials in the
                    database. Additionally, the authentication token is checked
                    to ensure it matches the one associated with the user before
                    granting access.
                  </div>
                  <Image
                    src="/images/login.png"
                    alt="Screenshot of login view"
                    fluid
                    rounded
                    className="me-3"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>

              {/* ===== UX & Responsive Work ====================================== */}
              <h4>UX Highlights &amp; Mobile Accessibility</h4>
              <ul className="text-primary mb-4">
                <li>
                  Card component made entirely tappable on phones, eliminating
                  the need to hit tiny links and boosting mobile ergonomics.
                </li>
                <li>
                  Bootstrap Navbar.Collapse converts the desktop nav bar into a
                  drop-down menu for smaller screens.
                </li>
                <li>
                  Global search powered by Redux filters the movie grid in
                  real-time as you type, improving discoverability.
                </li>
              </ul>

              {/* ===== Development Journey ====================================== */}
              <h4>Development Journey</h4>
              <p className="text-info mb-3">
                I began thinking this was "just a front end for my API" but
                quickly discovered how many moving parts a complete web app
                entails. Breaking the work into bite-sized tasks kept me from
                feeling overwhelmed, and frequent code reviews with my mentor
                sped up problem-solving. The favorites feature alone required
                multiple iterations to synchronise UI state across several
                screens.
              </p>

              {/* ===== Challenges & Solutions =================================== */}
              <h5>Notable Challenges & How I Solved Them</h5>
              <ul className="text-primary mb-4">
                <li>
                  <em>Real-time favorites status:</em> Introduced global
                  isFavorite state updates to keep cards and detail views in
                  sync.
                </li>
                <li>
                  <em>Birth-date formatting glitch:</em> Split the ISO string
                  before time data to display a concise MM/DD/YYYY field.
                </li>
              </ul>

              {/* ===== Outcome & Next Steps ===================================== */}
              <h4>Outcome & Next Steps</h4>
              <p className="text-primary mb-2">
                Ultimately, I produced a final product that I am genuinely proud
                of. While the core functionality and content are
                well-implemented, I recognize that there is room for
                improvement—particularly in terms of styling and design. My next
                steps involve refining the user interface to create a more
                polished and cohesive visual experience.
              </p>
            </>
          </Modal.Body>
          <Modal.Footer>
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
