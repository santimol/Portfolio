import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../assets/GithubLogo.tsx";

type ProjectType = {
  name: string;
  description: string;
  url: string;
  languages: string[];
  stars: number;
  updatedAt: string;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as {
    [key: string]: ProjectType;
  };

  return (
    <section id="projects">
      <h3>{t("projects.title")}</h3>
      <ul className="projects-list">
        {Object.entries(projects).map(([key, project]) => (
          <li key={key}>
            <div className="project-header">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GithubLogo />
                <h4>{project.name}</h4>
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <div className="project-languages">
                {project.languages.map((language, index) => (
                  <span key={index} className="language-tag">
                    {language}
                  </span>
                ))}
              </div>
              <div className="project-stats">
                <span className="stat-item">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  {project.updatedAt}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
