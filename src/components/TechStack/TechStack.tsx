import "../../styles/_techStack.scss";
import { TECH_STACK_ICONS } from "../../constants";

export const TechStack: React.FC = () => {
	const techStackIcons = TECH_STACK_ICONS;

	return (
		<div className="tech-stack-wrapper">
			<div className="tech-stack-track">
				{techStackIcons.map(({ key, icon: Icon }) => (
					<div key={`first-${key}`} className="tech-stack-item">
						<Icon size={45} />
					</div>
				))}
				{techStackIcons.map(({ key, icon: Icon }) => (
					<div key={`first-${key}`} className="tech-stack-item">
						<Icon size={45} />
					</div>
				))}
			</div>
		</div>
	);
};
