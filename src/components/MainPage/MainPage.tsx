import { AboutWindow } from "../AboutWindow/AboutWindow";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "../../styles/_mainPage.scss";
import { TechStack } from "../TechStack/TechStack";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { MdMail } from "react-icons/md";
import { projects } from "../../data/projects";

export const MainPage: React.FC = () => {
	return (
		<div className="container-fluid h-100">
			<motion.section
				id="hero-about"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="relative isolate container mx-auto w-full py-5 md:py-8 lg:py-3"
			>
				<div className="d-flex justify-content-end gap-4 ps-5 pb-3">
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
					<a
						href="mailto:derotokritou97@gmail.com"
						target="_blank"
						className="window__btn-link link-underline link-underline-opacity-0"
					>
						<MdMail size={30} />
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
			</motion.section>
			<motion.section
				id="projects"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="relative isolate container mx-auto w-full py-5 md:py-8 lg:py-3"
			>
				<div className="row mt-5">
					<div className="col w-100">
						<h1 id="projects" className="text-center m-5">
							Projects
						</h1>
						<div className="row pt-5 pb-5">
							{projects.map((project) => (
								<div className="col-sm-6" key={project.id}>
									<ProjectCard
										projectTitle={project.title}
										projectDescription={project.description}
										projectLink={project.githubUrl}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section
				id="tech-stack"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="relative isolate container mx-auto w-full py-5 md:py-8 lg:py-3"
			>
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
			</motion.section>
			<section id="footer">
				<footer className="text-center mt-5 mb-0">
					<span>&copy; {new Date().getFullYear()}</span>
					<a
						href="https://www.linkedin.com/in/dimitris-erotokritou/"
						target="_blank"
						className="ms-1 window__btn-link link-underline link-underline-opacity-0"
					>
						Dimitris Erotokritou
					</a>
				</footer>
			</section>
		</div>
	);
};
