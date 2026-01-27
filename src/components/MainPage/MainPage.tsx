import { AboutWindow } from "../AboutWindow/AboutWindow";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "../../styles/_mainPage.scss";
import { TechStack } from "../TechStack/TechStack";
export const MainPage: React.FC = () => {
	return (
		<div className="container-fluid h-100">
			<section id="hero-about">
				<div className="row mt-5 mb-5">
					<div className="col-6 d-flex flex-column justify-content-center ps-5">
						<h1 className="text-start fs-1 mb-0">Hi 👋</h1>
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
									projectTitle="Test 1"
									projectDescription="lalala"
								/>
							</div>
							<div className="col-sm-6">
								<ProjectCard
									projectTitle="Test 2"
									projectDescription="lelele"
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
						<div className="pt-5">
							<TechStack />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
