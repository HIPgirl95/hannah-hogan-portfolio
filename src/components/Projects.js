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
          <Badge
            bg="light"
            text="primary"
            className="mb-2 px-3 py-2 border border-primary"
          >
            Portfolio
          </Badge>
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            A selection of my recent work and personal projects.
          </p>
        </div>

        <Row>
          {/* Project 1 with Case Study */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25 project-card">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/600x400"
                  alt="E-commerce Platform"
                />
                <Badge
                  bg="primary"
                  className="position-absolute top-0 end-0 m-2"
                >
                  Case Study
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>E-commerce Platform</Card.Title>
                <Card.Subtitle className="mb-3 text-secondary">
                  Full-stack online shopping platform
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">
                    React
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    Node.js
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    MongoDB
                  </Badge>
                  <Badge bg="secondary">Stripe</Badge>
                </div>
                <Card.Text className="text-secondary">
                  A complete e-commerce solution with product management, cart
                  functionality, and secure payment processing.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://github.com"
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
                  href="https://example.com"
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
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/600x400"
                alt="Task Management App"
              />
              <Card.Body>
                <Card.Title>Task Management App</Card.Title>
                <Card.Subtitle className="mb-3 text-secondary">
                  Collaborative project management tool
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">
                    Next.js
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    TypeScript
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    Prisma
                  </Badge>
                  <Badge bg="secondary">PostgreSQL</Badge>
                </div>
                <Card.Text className="text-secondary">
                  A real-time task management application with team
                  collaboration features and progress tracking.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-success"
                  size="sm"
                  href="https://github.com"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  href="https://example.com"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Project 3 */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-info border-opacity-25 project-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/600x400"
                alt="Weather Dashboard"
              />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Subtitle className="mb-3 text-secondary">
                  Real-time weather visualization
                </Card.Subtitle>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">
                    React
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    Chart.js
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    Weather API
                  </Badge>
                  <Badge bg="secondary">Bootstrap</Badge>
                </div>
                <Card.Text className="text-secondary">
                  An interactive weather dashboard with location-based
                  forecasts, historical data, and visual charts.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
                <Button
                  variant="outline-info"
                  size="sm"
                  href="https://github.com"
                  target="_blank"
                >
                  <BsGithub className="me-1" /> Code
                </Button>
                <Button
                  variant="info"
                  size="sm"
                  href="https://example.com"
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
            variant="outline-primary"
            href="https://github.com"
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
              href="/case-study.pdf"
              target="_blank"
            >
              <BsDownload className="me-2" /> Download Full Case Study (PDF)
            </Button>
            <Button
              variant="primary"
              href="https://example.com"
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
