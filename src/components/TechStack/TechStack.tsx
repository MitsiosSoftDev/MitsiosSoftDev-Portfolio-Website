import { FaCss3, FaDatabase, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { FaBootstrap, FaJava, FaPython } from "react-icons/fa6";
import { SiDotnet, SiJavascript, SiRider, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

export const TechStack: React.FC = () => {
  return (
    <div className="d-flex justify-content-evenly">
      <SiTypescript size={50} />
      <SiJavascript size={50} />
      <FaJava size={50} />
      <FaPython size={50} />
      <SiDotnet size={50} />
      <VscAzure size={50} />
      <VscVscode size={50} />
      <SiRider size={50} />
      <FaHtml5 size={50} />
      <FaCss3 size={50} />
      <FaReact size={50} />
      <TbBrandCSharp size={50} />
      <FaDatabase size={50} />
      <FaGitAlt size={50} />
      <FaBootstrap size={50} />
    </div>
  );
};
