import type { ProjectCardProps } from "../../types/types";
import "../../styles/_projectCard.scss";

export const ProjectCard: React.FC<ProjectCardProps> = ({
	projectTitle,
	projectDescription,
	projectImageUrl,
	projectLink,
}) => {
	return (
		<div className="card project-card w-100 rounded-4 border shadow pt-2 mb-5 bg-body-tertiary rounded">
			<img src={projectImageUrl} />
			<div className="card-body ps-0 pe-0 project-card">
				<h5 className="card-title">{projectTitle}</h5>
				<hr />
				<p className="card-text m-4 text-start">{projectDescription}</p>
				<button
					type="button"
					className="btn m-3 ps-3 border border-1 border-rounded button__download-btn"
				>
					<a
						className="d-flex align-items-center link-underline link-underline-opacity-0 button__btn-link"
						href={projectLink}
					>
						Check it out
					</a>
				</button>
			</div>
		</div>
	);
};
