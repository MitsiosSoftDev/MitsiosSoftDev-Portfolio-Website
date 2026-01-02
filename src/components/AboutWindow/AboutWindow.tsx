import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import "./_aboutWindow.scss";

export const AboutWidnow: React.FC = ({}) => {
	return (
		<div className="w-100 h-100 rounded-4 border">
			<div className="d-flex justify-content-around m-3 window-icons-width">
				<RiCheckboxBlankCircleFill color="red" size={"15px"} />
				<RiCheckboxBlankCircleFill color="yellow" size={"15px"} />
				<RiCheckboxBlankCircleFill color="green" size={"15px"} />
			</div>
			<hr />
		</div>
	);
};
