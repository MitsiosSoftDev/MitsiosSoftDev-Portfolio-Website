import { BsCodeSlash } from "react-icons/bs";
import { TECHNOLOGIES } from "../../constants";
import type { ProjectCardProps } from "../../types/types";
import "../../styles/_projectCard.scss";

export const ProjectCard: React.FC<ProjectCardProps> = ({
	projectTitle,
	projectDescription,
	projectImageUrl,
	projectLink,
	technologies,
	feature,
}) => (
	<article className={feature ? "featured" : "project-card"}>
		<div className={feature ? "featured-copy" : "project-copy"}>
			{projectImageUrl && <img className="project-image" src={projectImageUrl} alt="" />}
			<span className="project-mark" aria-hidden="true">
				<BsCodeSlash size={18} />
			</span>
			{feature && <p className="kicker">{feature.label}</p>}
			<h3>{projectTitle}</h3>
			<p className="description">{projectDescription}</p>
			{!!technologies?.length && (
				<ul className="project-stack" role="list" aria-label="Technologies">
					{technologies.map((key) => {
						const { label, icon: Icon } = TECHNOLOGIES[key];

						return (
							<li key={key} title={label}>
								<Icon size={18} role="img" aria-label={label} />
							</li>
						);
					})}
				</ul>
			)}
			{projectLink && (
				<a
					className="text-link"
					href={projectLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${projectTitle} on GitHub`}
				>
					View repository{" "}
					<span aria-hidden="true">↗</span>
				</a>
			)}
		</div>
		{feature?.visual}
	</article>
);
