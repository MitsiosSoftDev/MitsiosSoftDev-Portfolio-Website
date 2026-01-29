import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import "../../styles/_aboutWindow.scss";

export const AboutWindow: React.FC = ({}) => {
	return (
		<div className="w-100 rounded-4 border shadow pt-2 mb-5 bg-body-tertiary rounded">
			<div className="d-flex justify-content-around m-3 window__icons">
				<RiCheckboxBlankCircleFill color="#FF605C" size={"15px"} />
				<RiCheckboxBlankCircleFill color="#FFBD44" size={"15px"} />
				<RiCheckboxBlankCircleFill color="#00CA4E" size={"15px"} />
			</div>
			<hr />
			<section id="about-section">
				<div className="text-start m-4">
					<p>
						A Full Stack Developer passionate about building complete web
						solutions from front to back.
					</p>
					<p>
						I specialize in crafting modern, responsive frontends with React and
						TypeScript, while developing robust backend systems using C#,
						ASP.NET, and SQL Server.
					</p>
					<p>
						I enjoy solving complex problems across the entire stack and
						delivering seamless, high-performance applications that users love.
					</p>
				</div>
			</section>
			<hr className="m-0" />
			<div className="container-fluid d-flex">
				<div className="d-flex">
					<button type="button" className="btn mt-3 mb-3 ms-3">
						<a
							href="#stack"
							className="window__btn-link link-underline link-underline-opacity-0"
						>
							Stack
						</a>
					</button>
					<button type="button" className="btn m-3">
						<a
							href="#projects"
							className="window__btn-link link-underline link-underline-opacity-0"
						>
							Projects
						</a>
					</button>
				</div>
				<div className="d-flex justify-content-end w-100">
					<button
						type="button"
						className="btn m-3 ps-3 border border-1 border-rounded window__download-btn"
					>
						<a
							className="d-flex align-items-center link-underline link-underline-opacity-0 window__btn-link"
							href="/Resume/Erotokritou-Dimitris-CV.pdf"
							download=""
						>
							Download CV
							<GoDownload size={25} className="ms-2 pb-1" />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};
