import type { CSSProperties } from "react";
import { TECH_STACK_ICONS } from "../../constants";
import "../../styles/_techStack.scss";

const trackStyle = { "--tech-stack-count": TECH_STACK_ICONS.length } as CSSProperties;

export const TechStack: React.FC = () => (
	<div className="tech-stack-wrapper">
		<div className="tech-stack-track" style={trackStyle}>
			{[false, true].map((isDuplicate) => (
				<ul
					key={String(isDuplicate)}
					className="tech-stack-set"
					role="list"
					aria-label={isDuplicate ? undefined : "Technologies and tools"}
					aria-hidden={isDuplicate || undefined}
				>
					{TECH_STACK_ICONS.map(({ key, label, icon: Icon }) => (
						<li
							key={key}
							className="tech-stack-item"
							title={label}
						>
							<Icon className="tech-stack-icon" role="img" aria-label={label} />
						</li>
					))}
				</ul>
			))}
		</div>
	</div>
);
