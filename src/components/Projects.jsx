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
	const [showCaseStudy, setShowCaseStudy] = useState(null);

	const handleClose = () => setShowCaseStudy(null);
	const handleShowReactCaseStudy = () => setShowCaseStudy("react");
	const handleShowAngularCaseStudy = () => setShowCaseStudy("angular");
	const handleShowMobileCaseStudy = () => setShowCaseStudy("mobile");

	return (
		<section
			id="projects"
			className="projects-section py-5"
		>
			<Container className="py-5">
				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold">
						<span className="colored-text">Featured </span> Project
					</h2>
				</div>

				<Card className="h-100 border-opacity-25 project-card featured-card">
					<Card.Body>
						<Card.Title className="featured-title">
							Digits and Dragons
						</Card.Title>
						<Card.Subtitle className="mb-3 featured-subtitle">
							D&D themed math review game
						</Card.Subtitle>
						<div className="mb-3 featured-badges">
							<Badge className="me-1">Next.js</Badge>
							<Badge className="me-1">AI</Badge>
							<Badge className="me-1">JavaScript</Badge>
							<Badge className="me-1">CSS</Badge>
						</div>{" "}
						{/* <Card.Img
							variant="top"
							src="/images/Pokedex.png"
							alt="Pokedex App"
						/> */}
						<Card.Text className="featured-text">
							Digits and Dragons is a D&D themed review game. It is designed to
							be run in a classroom by a teacher with students participating by
							answering questions and selecting moves. Currently, all of the
							necessary components are in place to run very simple games, but I
							have a LOT that I want to add.
						</Card.Text>
					</Card.Body>
					<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
						<Button
							className="outline-button"
							size="sm"
							href="https://github.com/HIPgirl95/digits-and-dragons"
							target="_blank"
						>
							<BsGithub className="me-1" /> Code
						</Button>
						<Button
							className="colored-button"
							size="sm"
							href="https://digits-and-dragons.vercel.app/"
							target="_blank"
						>
							<BsBoxArrowUpRight className="me-1" /> Demo
						</Button>
					</Card.Footer>
				</Card>

				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold">
						Boot Camp <span className="colored-text"> Projects</span>
					</h2>
					<p
						className="lead mx-auto"
						style={{ maxWidth: "700px" }}
					>
						Projects I created during my time at CareerFoundry
					</p>
				</div>

				<Row>
					{/* Project 1*/}
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<Card.Body>
								<Card.Title>Pokedex App</Card.Title>
								<Card.Subtitle className="mb-3">
									Interactive Pokemon database
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">API</Badge>
									<Badge className="me-1">Bootstrap</Badge>
									<Badge className="me-1">JavaScript</Badge>
								</div>{" "}
								<Card.Img
									variant="top"
									src="/images/Pokedex.png"
									alt="Pokedex App"
								/>
								<Card.Text>
									Displays Pokemon data using the PokeAPI. Click on a Pokemon
									name to open a modal with more details.
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
									size="sm"
									href="https://github.com/HIPgirl95/Pokedex"
									target="_blank"
								>
									<BsGithub className="me-1" /> Code
								</Button>
								<Button
									className="colored-button"
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
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<Card.Body>
								<Card.Title>Movie API</Card.Title>
								<Card.Subtitle className="mb-3">
									From-scratch API development
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">Node.js</Badge>
									<Badge className="me-1">Postman</Badge>
									<Badge className="me-1">PostgreSQL</Badge>
									<Badge className="me-1">Express</Badge>
								</div>
								<Card.Img
									variant="top"
									src="/images/api.png"
									alt="Movie API"
									height="300"
								/>
								<Card.Text>
									I created an API from scratch using Node.js and Express. It
									allows users to search for movies, view details, and manage
									profiles
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
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
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<div className="position-relative">
								<Badge className="position-absolute top-0 end-0 m-2">
									Case Study
								</Badge>
							</div>
							<Card.Body>
								<Card.Title>React myFlix Client</Card.Title>
								<Card.Subtitle className="mb-3">
									React-based movie database client
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">MERN stack</Badge>
									<Badge className="me-1">React Router</Badge>
									<Badge className="me-1">React-Bootstrap</Badge>
								</div>
								<Card.Img
									variant="top"
									src="/images/myFlix-React.png"
									alt="React myFlix Client"
								/>
								<Card.Text>
									This is a client-side application for the myFlix movie
									database. It allows users to view and manage their favorite
									movies, including filtering and saving favorites.
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
									size="sm"
									href="https://github.com/HIPgirl95/myFlix-client"
									target="_blank"
								>
									<BsGithub className="me-1" /> Code
								</Button>
								<Button
									className="outline-button"
									size="sm"
									onClick={handleShowReactCaseStudy}
								>
									<BsFileText className="me-1" /> Case Study
								</Button>
								{/* <Button
									className="colored-button"
									size="sm"
									href="https://my-flix-hannah-hogan.netlify.app/"
									target="_blank"
								>
									<BsBoxArrowUpRight className="me-1" /> Demo
								</Button> */}
							</Card.Footer>
						</Card>
					</Col>
				</Row>
				<Row>
					{/* Project 4 */}
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<Card.Body>
								<Card.Title>Meet App</Card.Title>
								<Card.Subtitle className="mb-3">
									Displays events and allows filtering
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">Recharts</Badge>
									<Badge className="me-1">Jest</Badge>
									<Badge className="me-1">JavaScript</Badge>
									<Badge className="me-1">React</Badge>
								</div>{" "}
								<Card.Img
									variant="top"
									src="/images/meetApp.png"
									alt="Meet App"
								/>
								<Card.Text>
									Using React, I made an app where you can look at events! Some
									of the fun features of this include: an actual downloadable
									app, offline access, and data charts!
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
									size="sm"
									href="https://github.com/HIPgirl95/meet"
									target="_blank"
								>
									<BsGithub className="me-1" /> Code
								</Button>
								<Button
									className="colored-button"
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
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<div className="position-relative">
								<Badge className="position-absolute top-0 end-0 m-2">
									Case Study
								</Badge>
							</div>
							<Card.Body>
								<Card.Title>Mobile Chat App</Card.Title>
								<Card.Subtitle className="mb-3">
									Real-time messaging platform
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">React Native</Badge>
									<Badge className="me-1">GiftedChat</Badge>
									<Badge className="me-1">Firebase</Badge>
									<Badge className="me-1">Expo</Badge>
								</div>
								<Card.Img
									src="/images/Mobile-App.png"
									alt="Mobile Chat App"
								/>
								<Card.Text>
									This app allows users to send and receive messages in
									real-time. It also allows users to share images and their
									location, after asking for permission, of course. It uses
									Firebase for authentication and data storage, and GiftedChat
									for the chat interface.
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
									size="sm"
									href="https://github.com/HIPgirl95/mobile-app"
									target="_blank"
								>
									<BsGithub className="me-1" /> Code
								</Button>
								<Button
									className="outline-button"
									size="sm"
									onClick={handleShowMobileCaseStudy}
								>
									<BsFileText className="me-1" /> Case Study
								</Button>
							</Card.Footer>
						</Card>
					</Col>

					{/* Project 6 */}
					<Col
						lg={4}
						className="mb-4"
					>
						<Card className="h-100 border-opacity-25 project-card">
							<div className="position-relative">
								<Badge className="position-absolute top-0 end-0 m-2">
									Case Study
								</Badge>
							</div>
							<Card.Body>
								<Card.Title>Angular myFlix Client</Card.Title>
								<Card.Subtitle className="mb-3">
									Angular-based movie database client
								</Card.Subtitle>
								<div className="mb-3">
									<Badge className="me-1">Angular</Badge>
									<Badge className="me-1">Material</Badge>
									<Badge className="me-1">RxJS</Badge>
									<Badge className="me-1">TypeScript</Badge>
								</div>
								<Card.Img
									variant="top"
									src="/images/myFlix-Angular.png"
									alt="Angular myFlix Client"
								/>
								<Card.Text>
									This is a client-side application for the myFlix movie
									database, but made with Angular! It allows users to view and
									filter movies, as well as manage their favorites.
								</Card.Text>
							</Card.Body>
							<Card.Footer className="bg-transparent border-0 d-flex justify-content-between">
								<Button
									className="outline-button"
									size="sm"
									href="https://github.com/HIPgirl95/myFlix-Angular"
									target="_blank"
								>
									<BsGithub className="me-1" /> Code
								</Button>
								<Button
									className="outline-button"
									size="sm"
									onClick={handleShowAngularCaseStudy}
								>
									<BsFileText className="me-1" /> Case Study
								</Button>
								{/* <Button
                  className="colored-button"
                  size="sm"
                  href="https://hipgirl95.github.io/myFlix-Angular/welcome"
                  target="_blank"
                >
                  <BsBoxArrowUpRight className="me-1" /> Demo
                </Button> */}
							</Card.Footer>
						</Card>
					</Col>
				</Row>

				{/* React myFlix case study */}
				{showCaseStudy === "react" && (
					<Modal
						show={showCaseStudy}
						onHide={handleClose}
						size="lg"
					>
						<Modal.Header closeButton>
							<Modal.Title>myFlix React Client Case Study</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<>
								{/* ===== Overview =================================================== */}
								<h3 className="colored-text">Project Overview</h3>
								<p className="mb-4">
									<strong className="colored-text">myFlix</strong> was a project
									that I developed as part of my Full-Stack web development
									course at CareerFoundry to showcase what I learned about{" "}
									<strong>JavaScript and React</strong>. After building an API
									containing movie information, I realized I needed an effective
									way to present my work. To solve this, I created myFlix – an
									intuitive and user-friendly interface that allows users to
									seamlessly interact with my API.
								</p>
								<Image
									src="/images/myFlix-React.png"
									alt="myFlix React Client"
									fluid
									rounded
									className="mb-4 casestudy-picture"
								/>

								{/* ===== Team & Roles ============================================== */}
								<h5 className="colored-text">Team &amp; Mentorship</h5>
								<ul className=" mb-4 ps-3">
									<li>Lead Developer – Hannah Hogan</li>
									<li>Mentor – Drew Mercer</li>
									<li>Tutor – Davi Ferreira</li>
									<li>Consultants – Tim Pamplin &amp; Jason Pamplin</li>
								</ul>

								{/* ===== Tools & Tech ============================================== */}
								<h4>Tools &amp; Tech Stack</h4>
								<div className="mb-3">
									{[
										{ label: "MERN stack" },
										{ label: "Redux" },
										{ label: "Bootstrap" },
										{ label: "Heroku" },
										{ label: "Parcel" },
										{ label: "Netlify" },
										{ label: "Postman" },
										{ label: "Git/GitHub" },
										{ label: "VS Code" },
									].map(({ bg, label }) => (
										<Badge
											key={label}
											bg={bg}
											className="me-1 p-2"
										>
											{label}
										</Badge>
									))}
								</div>

								{/* ===== Architecture / Key Views ================================== */}
								<h4>Application Architecture &amp; Key Views</h4>
								<div className="mb-4">
									{/* Main View */}
									<div className="d-flex align-items-start mb-4">
										<Image
											src="/images/MainView.png"
											alt="Screenshot of main view"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "30%" }}
										/>
										<div>
											<strong className="colored-text">Main View:</strong> This
											view enables users to browse movies and see brief details
											about each one. To achieve this, I utilized
											React-Bootstrap’s Cards, allowing me to design a single
											card component and dynamically generate a new instance for
											each movie. This approach ensured a consistent and
											visually appealing layout while streamlining the
											development process.
										</div>
									</div>

									{/* Movie View */}
									<div className="d-flex align-items-start mb-4">
										<div>
											<strong className="colored-text">Movie View:</strong> This
											view provides users with detailed information about a
											selected movie. For example, instead of simply displaying
											the director's name, it includes a short biography to
											offer more context. Additionally, this view allows users
											to add the movie to their favorites list, enhancing
											personalization and user engagement.
										</div>
										<Image
											src="/images/MovieView.png"
											alt="Screenshot of movie view"
											fluid
											rounded
											className="me-3 casestudy-picture"
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
											className="me-3 casestudy-picture"
											style={{ width: "30%" }}
										/>
										<div>
											<strong className="colored-text">Profile View:</strong>{" "}
											This view enables users to view and edit their personal
											information while also providing access to their list of
											favorite movies. One unexpected challenge I encountered
											was formatting the user's birthday. By default, the date
											included an unnecessarily detailed time component down to
											the millisecond—an impractical level of precision for a
											birthdate. To resolve this, I used a split function to
											extract only the relevant parts, displaying the date in a
											more user-friendly format with just the month, day, and
											year.
										</div>
									</div>

									{/* Login / Signup View */}
									<div className="d-flex align-items-start mb-4">
										<div>
											<strong className="colored-text">
												Login / Signup View:
											</strong>{" "}
											To access movies or manage an account, users must first
											sign up. The signup view generates a unique user ID and an
											authentication token upon registration. When logging in,
											the system verifies the username and password against the
											stored credentials in the database. Additionally, the
											authentication token is checked to ensure it matches the
											one associated with the user before granting access.
										</div>
										<Image
											src="/images/Login.png"
											alt="Screenshot of login view"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "30%" }}
										/>
									</div>
								</div>

								{/* ===== UX & Responsive Work ====================================== */}
								<h4 className="colored-text">
									UX Highlights &amp; Mobile Accessibility
								</h4>
								<ul className="mb-4">
									<li>
										Card component made entirely tappable on phones, eliminating
										the need to hit tiny links and boosting{" "}
										<strong>mobile ergonomics</strong>.
									</li>
									<li>
										Bootstrap <strong>Navbar.Collapse</strong> converts the
										desktop nav bar into a drop-down menu for smaller screens.
									</li>
									<li>
										Global search powered by <strong>Redux filters</strong> the
										movie grid in real-time as you type, improving
										discoverability.
									</li>
								</ul>

								{/* ===== Development Journey ====================================== */}
								<h4 className="colored-text">Development Journey</h4>
								<p className="mb-3">
									I began thinking this was "just a front end for my API" but
									quickly discovered how many moving parts a complete web app
									entails. Breaking the work into bite-sized tasks kept me from
									feeling overwhelmed, and frequent code reviews with my mentor
									sped up problem-solving. The favorites feature alone required
									multiple iterations to synchronise UI state across several
									screens.
								</p>

								{/* ===== Challenges & Solutions =================================== */}
								<h5 className="colored-text">
									Notable Challenges & How I Solved Them
								</h5>
								<ul className="mb-4">
									<li>
										<strong>Real-time favorites status:</strong> Introduced
										global isFavorite state updates to keep cards and detail
										views in sync.{" "}
									</li>
									<Image
										src="/images/AddFav.png"
										alt="Screenshot of Add Favorite Button"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ height: "40px", width: "auto" }}
									/>
									<Image
										src="/images/RemoveFav.png"
										alt="Screenshot of Remove Favorite Button"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ height: "40px", width: "auto" }}
									/>

									<li>
										<strong>Birth-date formatting glitch:</strong> Split the ISO
										string before time data to display a concise MM/DD/YYYY
										field.
									</li>
								</ul>

								{/* ===== Outcome & Next Steps ===================================== */}
								<h4 className="colored-text">Outcome & Next Steps</h4>
								<p className="mb-2">
									Ultimately, I produced a final product that I am genuinely
									proud of. While the core functionality and content are
									well-implemented, I recognize that there is room for
									improvement—particularly in terms of styling and design. My
									next steps involve refining the user interface to create a
									more polished and cohesive visual experience.
								</p>
							</>
						</Modal.Body>
						<Modal.Footer>
							<Button
								className="colored-button"
								href="https://my-flix-hannah-hogan.netlify.app/"
								target="_blank"
							>
								<BsBoxArrowUpRight className="me-2" /> View Live Project
							</Button>
						</Modal.Footer>
					</Modal>
				)}

				{/* Angular myFlix case study */}
				{showCaseStudy === "angular" && (
					<Modal
						show={showCaseStudy}
						onHide={handleClose}
						size="lg"
					>
						<Modal.Header closeButton>
							<Modal.Title>myFlix Angular Client Case Study</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<>
								{/* ===== Overview =================================================== */}
								<h3 className="colored-text">Project Overview</h3>
								<p className="mb-4">
									This project is a second client for the myFlix API, but this
									time, it uses{" "}
									<strong className="colored-text"> Angular</strong>! Since this
									was my second time building a client for the same API, I was
									able to apply the lessons I learned from the React client to
									create a more polished and efficient application. While this
									client does not have a view for individual movie details, it
									does make use of a lot of fun modals and features that enhance
									the user experience.
								</p>
								<Image
									src="/images/myFlixAngularWelcome.png"
									alt="myFlix React Client"
									fluid
									rounded
									className="mb-4 casestudy-picture"
								/>

								{/* ===== Team & Roles ============================================== */}
								<h5 className="colored-text">Team &amp; Mentorship</h5>
								<ul className=" mb-4 ps-3">
									<li>Lead Developer – Hannah Hogan</li>
									<li>Mentor – Akunna Nwosu</li>
									<li>Tutor – Jubril Akolade</li>
									<li>Consultants – Tim Pamplin &amp; Jason Pamplin</li>
								</ul>

								{/* ===== Tools & Tech ============================================== */}
								<h4>Tools &amp; Tech Stack</h4>
								<div className="mb-3">
									{[
										{ label: "Angular" },
										{ label: "Node.js" },
										{ label: "Angular Material" },
										{ label: "SCSS" },
										{ label: "JSDoc" },
										{ label: "TypeDoc" },
										{ label: "VS Code" },
									].map(({ bg, label }) => (
										<Badge
											key={label}
											bg={bg}
											className="me-1 p-2"
										>
											{label}
										</Badge>
									))}
								</div>

								{/* ===== Architecture / Key Views ================================== */}
								<h4>Application Architecture &amp; Key Views</h4>
								<div className="mb-4">
									{/* Login / Signup View */}
									<div className="d-flex align-items-start mb-4">
										<div>
											<strong className="colored-text">
												Login / Signup View:
											</strong>{" "}
											I used modals to create a streamlined login and signup
											page, with more sytlized forms than the React version. To
											access movies or manage an account, users must first sign
											up. The signup view generates a unique user ID and an
											authentication token upon registration. When logging in,
											the system verifies the username and password against the
											stored credentials in the database. Additionally, the
											authentication token is checked to ensure it matches the
											one associated with the user before granting access.
										</div>
										<Image
											src="/images/AngularSignUp.png"
											alt="Screenshot of sign up view"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "30%" }}
										/>
									</div>
								</div>

								{/* Movie Card */}
								<div className="d-flex align-items-start mb-4">
									<Image
										src="/images/AngularMovieCard.png"
										alt="Screenshot of a single movie card"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ width: "30%" }}
									/>
									<div>
										<strong className="colored-text">Movie Card:</strong> The
										main view makes use of Angular Material's Card component to
										display a grid of movies. It primarily focuses on browsing
										movies, with buttons for modals with more information about
										the movie's plot, director, and genre. This view allows
										users to quickly scan through available movies and select
										one for more details.
									</div>
								</div>

								{/* Favorite Movies */}
								<div
									className="d-flex align-items-start mb-4"
									style={{ gap: "2rem" }}
								>
									<div style={{ flex: 2 }}>
										<strong className="colored-text">Favorite Movies:</strong>{" "}
										When creating this project, I knew that I wanted to
										dynamically change the "favorite button" based on whether
										the movie was already in the user's favorites list. This
										required me to create a global state that would update
										whenever a user added or removed a movie from their
										favorites. This way, the button would always reflect the
										current status of the movie in relation to the user's
										favorites. You might notice that any movies on the profile
										page simply have a trash can icon next to them, which allows
										users to remove them from their favorites list from their
										profile page. I also implemented a confirmation modal, to
										make sure users didn't accidentally remove a movie they
										wanted to keep.
									</div>
									<div
										className="d-flex flex-column"
										style={{ flex: 1 }}
									>
										<Image
											src="/images/AngularAddFav.png"
											alt="Screenshot of Add Favorite modal"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "100%", marginBottom: "1rem" }}
										/>
										<Image
											src="/images/AngularRemoveFav.png"
											alt="Screenshot of Remove Favorite modal"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "100%" }}
										/>
									</div>
								</div>

								{/* Profile View */}
								<div className="d-flex align-items-start mb-4">
									<Image
										src="/images/AngularProfile.png"
										alt="Screenshot of profile view"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ width: "30%" }}
									/>
									<div>
										<strong className="colored-text">Profile View:</strong>{" "}
										Unlike the React version, which only displayed a list of the
										user's favorite movies, this profile view has a nearly
										identical layout to the main view, but it only displays the
										user's favorite movies. This allows users to easily see
										their favorites in a familiar format. Additionally, this
										view allows users to edit their profile information, such as
										their username and password, making it a more comprehensive
										user management interface.
									</div>
								</div>

								{/* Other Highlights */}
								<h4 className="colored-text">Other Highlights</h4>
								<ul className="mb-4">
									<li>
										<strong>Modals</strong> used for anything that didn't
										require a full page. This way, users can quickly access
										information without navigating away from the main view, and
										can close the modal by either clicking the "close" button in
										the corner, clicking outside the modal, or pressing the
										"Escape" key, providing a more intuitive and
										<strong> user-friendly experience</strong>.
									</li>
									<li>
										Consistent styling across all components using
										<strong> Angular Material</strong>, ensuring a cohesive look
										and feel throughout the application. The blocky style of the
										buttons also makes them more accessible for users on mobile
										devices.
									</li>
									<li>
										Used Angular's <strong>Router</strong> to manage navigation
										between different views, allowing for a single-page
										application experience. This means that users can navigate
										between the main view, profile view, and modals without
										reloading the page, making the application feel more
										responsive and fluid.
									</li>
								</ul>

								{/* ===== Development Journey ====================================== */}
								<h4 className="colored-text">Development Journey</h4>
								<p className="mb-3">
									Having already built a client for the myFlix API using React,
									I had a specific vision for how I wanted this Angular version
									to look and function. Then, I had the struggle of trying to
									figure out how to implement that vision in Angular. I made use
									of a Kanban board to break down the work into manageable
									tasks, which helped me stay organized and focused. I also had
									frequent code reviews with my mentor, which helped me catch
									issues early and improve my code quality. The favorites
									feature alone required multiple iterations to synchronize UI
									state across several screens.
								</p>

								{/* ===== Challenges & Solutions =================================== */}
								<h5 className="colored-text">
									Notable Challenges & How I Solved Them
								</h5>
								<ul className="mb-4">
									<li>
										<strong>Favorite Icon swap:</strong> I really wanted to have
										a different icon and modal for adding and removing
										favorites, so I created a global state that updates whenever
										a user adds or removes a movie from their favorites. This
										way, the button would always reflect the current status of
										the movie in relation to the user's favorites.
									</li>
									<Image
										src="/images/AddIcon.png"
										alt="Screenshot of Add Favorite icon"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ maxWidth: "30%", height: "auto" }}
									/>
									<Image
										src="/images/FavIcon.png"
										alt="Screenshot of Favorited movie icon"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ maxWidth: "30%", height: "auto" }}
									/>

									<li>
										<strong>Standardizing cards:</strong> Since the movie
										posters are different dimensions, I had to standardize the
										size of the cards to ensure a consistent layout. I used
										Angular Material's Card component and set a fixed height for
										the cards, which allowed me to maintain a uniform appearance
										across different movie posters.
									</li>
								</ul>

								{/* ===== Outcome & Next Steps ===================================== */}
								<h4 className="colored-text">Outcome & Next Steps</h4>
								<p className="mb-2">
									This project was a great opportunity for me to apply what I
									had learned in my React client to a new framework. I was able
									to create a more complex application, while also learning more
									about Angular and its features. It still needs some work
									though. It definitely falls apart if viewed on a mobile
									device, and I would like to add more features, such as a view
									for individual movie details and a way to filter movies by
									genre or director.
								</p>
							</>
						</Modal.Body>
						<Modal.Footer>
							<Button
								className="colored-button"
								href="https://hipgirl95.github.io/myFlix-Angular/welcome"
								target="_blank"
							>
								<BsBoxArrowUpRight className="me-2" /> View Live Project
							</Button>
						</Modal.Footer>
					</Modal>
				)}

				{/* Mobile Chat App case study */}
				{showCaseStudy === "mobile" && (
					<Modal
						show={showCaseStudy}
						onHide={handleClose}
						size="lg"
					>
						<Modal.Header closeButton>
							<Modal.Title>Mobile Chat App Case Study</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<>
								{/* ===== Overview =================================================== */}
								<h3 className="colored-text">Project Overview</h3>
								<div className="d-flex align-items-start mb-4">
									<p className="mb-4">
										This project marked my introduction to mobile app
										development, Firebase, and real-time messaging. I developed
										a mobile chat application using React Native and Expo that
										enables users to send and receive messages instantly. The
										app also supports image and location sharing, with proper
										permission handling. Firebase powers the authentication and
										data storage, while the chat interface is built using
										GiftedChat.
									</p>
									<Image
										src="/images/Mobile-App.png"
										alt="Mobile Chat App"
										fluid
										rounded
										className="mb-4 casestudy-picture"
										style={{ width: "25%", height: "auto" }}
									/>
								</div>

								{/* ===== Team & Roles ============================================== */}
								<h5 className="colored-text">Team &amp; Mentorship</h5>
								<ul className=" mb-4 ps-3">
									<li>Lead Developer – Hannah Hogan</li>
									<li>Mentor – Akunna Nwosu</li>
									<li>Tutor – Jubril Akolade</li>
									<li>Consultant – Tim Pamplin</li>
								</ul>

								{/* ===== Tools & Tech ============================================== */}
								<h4>Tools &amp; Tech Stack</h4>
								<div className="mb-3">
									{[
										{ label: "React Native" },
										{ label: "Firebase" },
										{ label: "Expo" },
										{ label: "Gifted Chat" },
										{ label: "Action Sheet" },
										{ label: "Image Picker" },
										{ label: "Maps" },
									].map(({ bg, label }) => (
										<Badge
											key={label}
											bg={bg}
											className="me-1 p-2"
										>
											{label}
										</Badge>
									))}
								</div>

								{/* Capabilities*/}
								<h4>Capabilities</h4>
								<div className="mb-4">
									{/* Background Color Picker */}
									<div className="d-flex align-items-start mb-4">
										<div>
											<strong className="colored-text">
												Background Color Picker:
											</strong>
											I made use of React's <strong>useState</strong> hook to
											allow users to change the background color of the chat
											interface. This feature adds a personal touch to the app,
											allowing users to customize their experience.
										</div>
										<Image
											src="/images/BackgroundPicker.png"
											alt="Screenshot of background color picker"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "30%" }}
										/>
									</div>
								</div>

								{/* Cached Messages with Firestore */}
								<div className="d-flex align-items-start mb-4">
									<div>
										<strong className="colored-text">Cached Messages:</strong>{" "}
										The chat screen lets users send and receive messages in real
										time using Firebase Firestore, while also saving recent
										messages on the device. When the user is online, new
										messages appear instantly and are saved locally in case the
										connection drops. If the user is offline, the app loads the
										most recent messages from the device so they can still read
										past conversations. This makes the chat experience fast,
										reliable, and available even without internet access.
									</div>
								</div>

								{/* Asking Permission */}
								<div className="d-flex align-items-start mb-4">
									<div>
										<strong className="colored-text">Asking Permission:</strong>{" "}
										The app asks for permission to access certain device
										features only when needed, keeping the experience intuitive
										and respectful of user privacy. For example, permission to
										access the photo library is requested only when a user taps
										the image upload button, and location access is requested
										only if the user chooses to share their location in a
										message. These prompts are built to be clear and contextual,
										following platform best practices to ensure users understand
										why a permission is being asked at the moment it's relevant.
									</div>
								</div>

								{/* Send pictures and location */}
								<div
									className="d-flex align-items-start mb-4"
									style={{ gap: "2rem" }}
								>
									<div
										className="d-flex flex-column"
										style={{ flex: 1 }}
									>
										<Image
											src="/images/Actions.png"
											alt="Screenshot of Possible Actions"
											fluid
											rounded
											className="me-3 casestudy-picture"
											style={{ width: "100%", marginBottom: "1rem" }}
										/>
									</div>
									<div style={{ flex: 2 }}>
										<strong className="colored-text">Actions:</strong> Once
										permission has been granted, users can enhance their chats
										by sending photos directly from their device and optionally
										sharing their current location. These features make
										conversations more expressive and helpful—whether it’s
										sharing a picture from your day or letting a friend know
										where to meet. Both features are entirely optional and only
										activate when the user chooses to use them.
									</div>
								</div>

								{/* ===== UX & Responsive Work ====================================== */}
								<h4 className="colored-text">Other Highlights</h4>
								<ul className="mb-4">
									<li>
										The user can input their name at the beginning of the app,
										which is then used to identify them in the chat. This is a
										simple but effective way to personalize the chat experience.
									</li>
									<li>
										The user can choose whether to select a picture from their
										device or take a new one using the camera. This is done
										using the <strong>Image Picker</strong> library, which
										provides a simple interface for selecting images.
									</li>
								</ul>

								{/* ===== Development Journey ====================================== */}
								<h4 className="colored-text">Development Journey</h4>
								<p className="mb-3">
									Though it was simple, I enjoyed the challenge of building a
									mobile app from scratch. I had to learn how to use React
									Native and Expo, which was a new experience for me. I also had
									to learn how to use Firebase for data storage, which was a bit
									tricky at first, but I eventually got the hang of it. The
									biggest challenge was getting the chat interface to work
									properly, but I was able to use the GiftedChat library to make
									it easier.
								</p>

								{/* ===== Challenges & Solutions =================================== */}
								<h5 className="colored-text">
									Notable Challenges & How I Solved Them
								</h5>
								<ul className="mb-4">
									<li>
										<strong>Second User:</strong> In order to test the app, I
										needed to have a second user to chat with. I made use of an
										android Emulator, since I have an iphone, allowing me to
										test both major types of phones. This allowed me to see how
										the app would behave on different devices and ensure that it
										was responsive and functional across platforms.
									</li>
									<Image
										src="/images/SecondUser.png"
										alt="Screenshot of Second User"
										fluid
										rounded
										className="me-3 casestudy-picture"
										style={{ maxWidth: "50%", height: "auto" }}
									/>
									<li>
										<strong>Firebase Storage:</strong> I had to learn how to use
										Firebase Storage to store images and other media files. This
										was a bit tricky at first, but I was able to find some good
										documentation and examples online that helped me get
										started. I also had to learn how to use the Firebase
										Realtime Database to store messages, which was a bit
										different from what I was used to with traditional
										databases.
									</li>
								</ul>

								{/* ===== Outcome & Next Steps ===================================== */}
								<h4 className="colored-text">Outcome & Next Steps</h4>
								<p className="mb-2">
									All in all, this was a pretty simple app, but it was a great
									introduction to mobile app development. I learned a lot about
									how to build a mobile app from scratch, and I was able to
									apply some of the skills I had learned in my previous
									projects. I would like to add more features, such as push
									notifications and a way to filter messages by user or date. I
									would also like to improve the UI and make it more visually
									appealing.
								</p>
							</>
						</Modal.Body>
					</Modal>
				)}
			</Container>
		</section>
	);
}

export default Projects;
