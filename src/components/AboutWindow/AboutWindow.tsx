import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import "./_aboutWindow.scss";
import { GoDownload } from "react-icons/go";

export const AboutWindow: React.FC = ({}) => {
  return (
    <div className="w-100 rounded-4 border shadow pt-2 mb-5 bg-body-tertiary rounded">
      <div className="d-flex justify-content-around m-3 window-icons-width">
        <RiCheckboxBlankCircleFill color="red" size={"15px"} />
        <RiCheckboxBlankCircleFill color="yellow" size={"15px"} />
        <RiCheckboxBlankCircleFill color="green" size={"15px"} />
      </div>
      <hr />
      <section id="about-section">
        <div className="text-start m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo,
          quisquam aliquid nisi harum minima sapiente maiores modi, dignissimos
          omnis nobis id amet pariatur, aliquam optio veritatis doloribus odio
          corrupti.
        </div>
      </section>
      <hr className="m-0" />
      <div className="container-fluid d-flex">
        <div className="d-flex">
          <button type="button" className="btn mt-3 mb-3 ms-3">
            <a
              href="#stack"
              className="link-underline link-underline-opacity-0"
            >
              Stack
            </a>
          </button>
          <button type="button" className="btn m-3">
            <a
              href="#projects"
              className="link-underline link-underline-opacity-0"
            >
              Projects
            </a>
          </button>
        </div>
        <div className="d-flex justify-content-end w-100">
          <button
            type="button"
            className="btn m-3 ps-3 border border-2 border-rounded download-btn"
          >
            <a
              href="/Resume/Erotokritou-Dimitris-CV.pdf"
              className="d-flex align-items-center link-underline link-underline-opacity-0"
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
