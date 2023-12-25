import "./Portfolio.css";
import ProjectsCategories from "./ProjectsCategories";
import Projects from "./Projects";
import Pdata from "./Pdata";
import { useContext, useState } from "react";
import { colorTemContext } from "../../context/TemColorContext";

const Portfolio = () => {
  const { colors} = useContext(colorTemContext);
  const [projects, setProjects] = useState(Pdata);
  // const categories = Pdata.map((item) => item.category);
  // const uniqueCategories = ["All", ...new Set(categories)];
  const uniqueCategories = ["ReactJS"];

  const filterProjectsHandler = (category) => {
    if (category === "All") {
      setProjects(Pdata);
      return;
    }
    const filterProjects = Pdata.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <>

      <section className={`${colors.backColor + "a"} pb-5`} id="portfolio">
        <h2 className="pt-5">Recent Projects</h2>
        <p className="text-center">
          Check out some of the projects I recently worked on.
        </p>
        <div className="container portfolio__container">
          <ProjectsCategories
            categories={uniqueCategories}
            onFilterProjects={filterProjectsHandler}
          />
          <Projects projects={projects} />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
