import { useState } from "react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { BsGithub, BsLinkedin, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { featuredProject, projects } from "../../data/projects";
import { AboutWindow } from "../AboutWindow/AboutWindow";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { TechStack } from "../TechStack/TechStack";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import "../../styles/_mainPage.scss";

const baseUrl = import.meta.env.BASE_URL;

export const MainPage: React.FC = () => {
  const [animationsPlaying, setAnimationsPlaying] = useState(true);
  const AnimationIcon = animationsPlaying ? BsPauseFill : BsPlayFill;
  const animationAction = animationsPlaying
    ? "Pause hero and diagram animations"
    : "Resume hero and diagram animations";
  const reducedMotion = useReducedMotion();
  const reveal: MotionProps = {
    initial: reducedMotion ? false : { opacity: 0.68, y: 9 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.48, ease: "easeOut" },
  };

  return (
    <div
      className="portfolio"
      data-motion={animationsPlaying ? "playing" : "paused"}
    >
      <header className="site-bar">
        <div className="wrap chrome">
          <button
            className="identity"
            type="button"
            aria-label="Dimitris Erotokritou, reload page"
            onClick={() => window.location.reload()}
          >
            <img
              src={`${baseUrl}favicon-48x48.png`}
              alt=""
              width="34"
              height="34"
            />
            <span>Dimitris Erotokritou</span>
          </button>

          <nav className="section-nav" aria-label="Portfolio sections">
            <a href="#projects">Work</a>
            <a href="#about-section">About</a>
            <a href="#experience">Experience</a>
            <a href="#stack">Skills</a>
            <a href="#footer">Contact</a>
          </nav>

          <div className="header-controls">
            <button
              className="btn btn-light motion-toggle"
              type="button"
              aria-label={animationAction}
              title={animationAction}
              onClick={() => setAnimationsPlaying((playing) => !playing)}
            >
              <AnimationIcon size={17} aria-hidden="true" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero-about"
          className="hero-band"
          aria-labelledby="portfolio-name"
        >
          <div className="wrap hero">
            <div className="hero-copy">
              <h1 id="portfolio-name">
                <span>Dimitris</span> <span>Erotokritou</span>
              </h1>
              <p className="role">
                <span className="typed-label">
                  Full-Stack Software Developer
                </span>
              </p>
              <p className="hero-lead">
                I build web applications from the interface to the database,
                using React, TypeScript, ASP.NET Core and SQL Server.
              </p>
              <div className="actions">
                <a className="button" href="#projects">
                  View projects <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="window-link"
                  href={`${baseUrl}Resume/Erotokritou-Dimitris-CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <figure className="code-sketch" aria-hidden="true">
              <figcaption>build.ts</figcaption>
              <pre>
                <code>
                  <span className="code-line">
                    <span className="code-keyword">const</span> build =
                    (feature) =&gt;
                  </span>
                  <span className="code-line">{"  feature"}</span>
                  <span className="code-line">
                    {"    ."}
                    <span className="code-method">design</span>()
                  </span>
                  <span className="code-line">
                    {"    ."}
                    <span className="code-method">connectApi</span>()
                  </span>
                  <span className="code-line">
                    {"    ."}
                    <span className="code-method">ship</span>();
                  </span>
                  <span className="code-line code-guide">
                    // from interface to database
                  </span>
                </code>
              </pre>
            </figure>
          </div>
        </section>

        <section
          id="projects"
          className="wrap section work-section"
          aria-labelledby="work-title"
        >
          <h2 id="work-title">Selected work</h2>
          <motion.div {...reveal}>
            <ProjectCard
              projectTitle={featuredProject.title}
              projectDescription={featuredProject.description}
              projectLink={featuredProject.githubUrl}
              technologies={featuredProject.technologies}
              feature={{
                label: "BSc thesis",
                visual: (
                  <figure
                    className="diagram"
                    aria-label="A Python client and server communicate over sockets"
                  >
                    <figcaption>Client-server architecture</figcaption>
                    <div className="diagram-chain" aria-hidden="true">
                      <span className="diagram-node">Python client</span>
                      <span className="diagram-connection">
                        <span className="diagram-route">↔</span>
                        Sockets
                      </span>
                      <span className="diagram-node">Python server</span>
                    </div>
                  </figure>
                ),
              }}
            />
          </motion.div>
          <motion.div className="project-grid" {...reveal}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                projectTitle={project.title}
                projectDescription={project.description}
                projectLink={project.githubUrl}
                technologies={project.technologies}
              />
            ))}
          </motion.div>
        </section>

        <div className="story-band">
          <div className="wrap section story">
            <section id="about-section" aria-labelledby="about-title">
              <h2 id="about-title">About me</h2>
              <motion.div {...reveal}>
                <AboutWindow />
              </motion.div>
            </section>

            <section id="experience" aria-labelledby="experience-title">
              <h2 id="experience-title">Experience</h2>
              <motion.ol className="timeline" {...reveal}>
                <li>
                  <p className="kicker">Mar 2025 - Present</p>
                  <h3>Software Developer</h3>
                  <p>
                    I work on an enterprise change management platform, building
                    dashboards and editable grids, developing REST APIs,
                    handling data validation, imports and database migrations.
                  </p>
                </li>
                <li>
                  <p className="kicker">Jul 2024 - Mar 2025</p>
                  <h3>Graduate Software Developer</h3>
                  <p>
                    I built responsive web interfaces and helped with testing,
                    bug fixes and WordPress maintenance.
                  </p>
                </li>
              </motion.ol>
            </section>
          </div>
        </div>

        <section
          id="tech-stack"
          className="wrap section"
          aria-labelledby="stack"
        >
          <h2 id="stack">Skills</h2>
          <motion.div {...reveal}>
            <TechStack />
          </motion.div>
        </section>
      </main>

      <footer
        id="footer"
        className="contact-band"
        aria-labelledby="contact-title"
      >
        <div className="wrap section contact">
          <h2 id="contact-title">Get in touch</h2>
          <div className="contact-links">
            <a
              className="contact-icon"
              href="https://github.com/MitsiosSoftDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BsGithub size={21} aria-hidden="true" />
            </a>
            <a
              className="contact-icon"
              href="https://www.linkedin.com/in/dimitris-erotokritou/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={21} aria-hidden="true" />
            </a>
            <a
              className="contact-icon"
              href="mailto:derotokritou97@gmail.com"
              aria-label="Email"
            >
              <MdMail size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
