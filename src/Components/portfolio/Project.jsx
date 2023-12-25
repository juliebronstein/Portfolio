import { useContext } from "react";
import Card from "../../layout/Card";
import { colorTemContext } from "../../context/TemColorContext";


const Project = ({ project }) => {
  const {colors} = useContext(colorTemContext);
  return (
    <>
      <Card className={`portfolio__project ${colors.backColor+"b"}`}>
        <div className="portfolio__project-image">
          <img className="col-12" src={project.image} alt="" />
        </div>
        <h4 className="f-s-b mb-0">{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
          <a
            href={project.demo}
            className={`btn sm  ${colors.backColor+"a"}`}
            // target="_blank"
            rel="noopener"
          >
            Demo
          </a>
          <a
            href={project.github}
            className={`btn sm primary ${colors.primaryColor}`}
            // target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      </Card>
    </>
  );
};

export default Project;
