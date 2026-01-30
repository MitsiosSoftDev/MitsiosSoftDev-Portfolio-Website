import { AboutWindow } from "../AboutWindow/AboutWindow";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "../../styles/_mainPage.scss";
import { TechStack } from "../TechStack/TechStack";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const MainPage: React.FC = () => {
	return (
		<div className="container-fluid h-100">
			<section id="hero-about">
				<div className="d-flex justify-content-end gap-4 ps-5">
					<a
						href="https://github.com/MitsiosSoftDev"
						target="_blank"
						className="window__btn-link link-underline link-underline-opacity-0"
					>
						<BsGithub size={30} />
					</a>
					<a
						href="https://www.linkedin.com/in/dimitris-erotokritou/"
						target="_blank"
						className="window__btn-link link-underline link-underline-opacity-0"
					>
						<BsLinkedin size={30} />
					</a>
				</div>
				<div className="row mt-5 mb-5">
					<div className="col-6 d-flex flex-column justify-content-center ps-5">
						<h1 className="text-start fs-1 mb-0">Hi 👋🏻</h1>
						<p className="text-start fs-1 mb-0">I'm Dimitris Erotokritou</p>
						<div className="text-changer">
							<div className="roles-wrapper">
								<div className="roles">
									<span>Full-Stack</span>
									<span>Front-End</span>
									<span>Back-End</span>
								</div>
							</div>
							<p className="text-start fs-1">Software Developer</p>
						</div>
					</div>
					<div className="col-6">
						<AboutWindow />
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="row mt-5">
					<div className="col w-100">
						<h1 id="projects" className="text-center m-5">
							Projects
						</h1>
						<div className="row pt-5 pb-5">
							<div className="col-sm-6">
								<ProjectCard
									projectTitle="Tool for Detection and Mitigation of IoT Threats"
									projectDescription="This tool was developed by me as the Thesis Project for my BSc Degree in Computer Science. The project was implemented in Python using JetBrains PyCharm Professional. It is based on a Server - Client Architecture, with communication between the two programs achieved through sockets. This was my Thesis project for "
									projectLink="https://github.com/MitsiosSoftDev/Tool_Development_for_Detection_and_Mitigation_of_IoT_Threats"
								/>
							</div>
							<div className="col-sm-6">
								<ProjectCard
									projectTitle="Pokédex"
									projectDescription="This was developed in JavaScript, following a youtube tutorial for building the Pokédex. It calls and API to fetch and display the data of each Pokémon. It was a good practise in the earliest days of my career and helped me train and understand in more depth the consepts and flow of JavaScript programming language"
									projectLink="https://github.com/MitsiosSoftDev/Pokedex"
								/>
							</div>
							<div className="col-sm-6">
								<ProjectCard
									projectTitle="Personal Website Portfolio"
									projectDescription="This website is part of one of my side projects, where I wanted to build a personal website portfolio to show my work throughout my experience with React, Typescript and Bootstrap. This is a simple landing page that was created and deployed by myself."
									projectLink="https://github.com/MitsiosSoftDev/MitsiosSoftDev-Portfolio-Website"
								/>
							</div>
							<div className="col-sm-6">
								<ProjectCard
									projectTitle="Snake Game"
									projectDescription="This was developed in JavaScript, following a youtube tutorial for building the Snake Game. It was a good practise in the earliest days of my career and helped me train and understand in depth the consepts and flow of JavaScript programming language"
									projectLink="https://github.com/MitsiosSoftDev/Snake-Game-Javascript"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="tech-stack">
				<div className="row mt-5">
					<div className="col w-100">
						<h1 id="stack" className="text-center m-5">
							Stack
						</h1>
						<div className="pt-5 pb-5">
							<TechStack />
						</div>
					</div>
				</div>
			</section>
			<section id="footer" className="mt-5">
				<footer>
					<footer className="text-center">
						<span>
							&copy; {new Date().getFullYear()}
							<a
								href="https://www.linkedin.com/in/dimitris-erotokritou/"
								target="_blank"
								className="window__btn-link link-underline link-underline-opacity-0"
							>
								Dimitris Erotokritou
							</a>
						</span>
					</footer>
				</footer>
			</section>
		</div>
	);
};
