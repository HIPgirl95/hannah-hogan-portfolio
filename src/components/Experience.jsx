import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { BsBriefcase, BsGeoAlt } from "react-icons/bs";

function Experience() {
	return (
		<section
			id="experience"
			className="experience-section py-5 bg-light"
		>
			<Container className="py-5">
				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold">
						Work <span className="colored-text"> Experience</span>
					</h2>
					<p
						className="lead mx-auto"
						style={{ maxWidth: "700px" }}
					>
						My professional journey and the companies I've worked with
					</p>
				</div>

				<div className="timeline">
					{/* Job 1 */}
					<Row className="mb-5 position-relative timeline-item">
						<Col
							lg={{ span: 6, offset: 6 }}
							md={{ span: 8, offset: 4 }}
							className="position-relative"
						>
							<div className="timeline-marker">
								<BsBriefcase size={20} />
							</div>
							<Card className="border-0 shadow-sm">
								<Card.Body>
									<div className="d-flex justify-content-between align-items-center mb-2">
										<h3 className="h5 fw-bold mb-0 colored-text">
											High School Teacher
										</h3>
										<Badge
											bg="primary"
											className="date-badge"
										>
											2021 - 2025
										</Badge>
									</div>
									<h4 className="h6 fw-bold mb-2">
										Master's Academy Art and Academics
									</h4>
									<div className="d-flex align-items-center mb-3">
										<BsGeoAlt className="me-1 colored-text" /> Marietta, GA
									</div>
									<p>
										Taught diverse subjects including math, chemistry, and
										physics, adapting quickly as a substitute or full-time
										instructor. Designed comprehensive lesson plans and
										assessments, while delivering personalized support to foster
										student growth.
									</p>
									<div className="mt-3">
										<Badge className="me-1">Problem Solving</Badge>
										<Badge className="me-1">Project planning</Badge>
										<Badge>Classroom management</Badge>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					{/* Job 2 */}
					<Row className="mb-5 position-relative timeline-item">
						<Col
							lg={6}
							md={8}
							className="position-relative"
						>
							<div className="timeline-marker timeline-marker-left">
								<BsBriefcase size={20} />
							</div>
							<Card className="border-0 shadow-sm">
								<Card.Body>
									<div className="d-flex justify-content-between align-items-center mb-2">
										<h3 className="h5 fw-bold mb-0 colored-text">
											Online Math Teacher
										</h3>
										<Badge className="date-badge">2019 - 2024</Badge>
									</div>
									<h4 className="h6 fw-bold mb-2">Wonder Math</h4>
									<div className="d-flex align-items-center mb-3">
										<BsGeoAlt className="me-1 colored-text" /> Online
									</div>
									<p>
										Delivered online math instruction to elementary students
										using interactive storytelling and gamification. Integrated
										digital tools to enhance learning and partnered with
										teachers and parents to monitor progress and tailor lessons.
									</p>
									<div className="mt-3">
										<Badge className="me-1">Tech Integration</Badge>
										<Badge className="me-1">Collaboration</Badge>
										<Badge>Student Engagement</Badge>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					{/* Job 3 */}
					<Row className="position-relative timeline-item">
						<Col
							lg={{ span: 6, offset: 6 }}
							md={{ span: 8, offset: 4 }}
							className="position-relative"
						>
							<div className="timeline-marker">
								<BsBriefcase size={20} />
							</div>
							<Card className="border-0 shadow-sm">
								<Card.Body>
									<div className="d-flex justify-content-between align-items-center mb-2">
										<h3 className="h5 fw-bold mb-0 colored-text">
											Professional Tutor
										</h3>
										<Badge className="date-badge">2017 - 2019</Badge>
									</div>
									<h4 className="h6 fw-bold mb-2">Revolution Prep</h4>
									<div className="d-flex align-items-center mb-3">
										<BsGeoAlt className="me-1 colored-text" /> Online
									</div>
									<p>
										Provided personalized tutoring in math, science, and test
										preparation through virtual platforms. Crafted
										individualized lesson plans and assessments to meet student
										needs, and offered detailed feedback to learners and
										parents.
									</p>
									<div className="mt-3">
										<Badge className="me-1">Customized Instruction</Badge>
										<Badge className="me-1">Data Analysis</Badge>
										<Badge>Feedback Delivery</Badge>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
}

export default Experience;
