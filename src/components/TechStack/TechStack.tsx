import React from "react";
import "../../styles/_techStack.scss";
import { TECH_STACK_ICONS } from "../../constants";

export const TechStack: React.FC = () => {
  return (
    <div className="tech-stack-wrapper">
      <div className="tech-stack-track">
        <div className="tech-stack-set">
          {TECH_STACK_ICONS.map(({ key, icon: Icon }) => (
            <div key={`first-${key}`} className="tech-stack-item" title={key}>
              <Icon className="tech-stack-icon" />
            </div>
          ))}
        </div>

        <div className="tech-stack-set" aria-hidden="true">
          {TECH_STACK_ICONS.map(({ key, icon: Icon }) => (
            <div key={`second-${key}`} className="tech-stack-item" title={key}>
              <Icon className="tech-stack-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
