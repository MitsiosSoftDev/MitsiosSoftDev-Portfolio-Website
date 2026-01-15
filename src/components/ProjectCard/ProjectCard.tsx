import type { ProjectCardProps } from "../../types/types";
import "./_projectCard.scss";

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
        <p className="card-text">{projectDescription}</p>
        <a
          className="link-underline link-underline-opacity-0 item-center"
          href={projectLink}
        >
          Check it out
        </a>
      </div>
    </div>
  );
};
