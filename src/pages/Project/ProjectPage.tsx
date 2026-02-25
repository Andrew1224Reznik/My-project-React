import { useParams } from "react-router-dom";
import projects from "../../helpers/projectList";
import style from "./ProjectPage.module.css";
import "../../styles/main.css";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  console.log(project);

  return (
    <main className="section">
      <div className="container">
        <div className={style.project_details}>
          <h1 className="title_1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className={style.project_details__cover}
          />

          <div className={style.project_details_text}>
            <p>{project.text}</p>
          </div>

          <div className={style.project_details__desc}>
            <p>Skills: {project.skills}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
