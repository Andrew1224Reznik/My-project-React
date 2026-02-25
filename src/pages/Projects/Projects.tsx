import style from "./Projects.module.css";
import "../../styles/main.css";
import Project from "../../components/project/Project";
import projects from "./../../helpers/projectList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title_1">Projects</h2>
        <ul className={style.projects}>
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
