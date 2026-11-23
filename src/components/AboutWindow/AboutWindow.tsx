import "../../styles/_aboutWindow.scss";

export const AboutWindow: React.FC = () => (
	<div className="about-window">
		<div className="window-bar" aria-hidden="true">
			<span />
			<span />
			<span />
		</div>
		<div className="about-copy">
			<p>
				I like following a feature all the way through: from the dashboard
				or form someone uses, to the API that validates their input and the
				database that stores it.
			</p>
			<p>
				I hold a BSc in Applied Informatics and an MSc in Artificial
				Intelligence. For my master’s thesis, I explored diffusion models
				and gained hands-on experience training and evaluating models in
				Python.
			</p>
		</div>
	</div>
);
