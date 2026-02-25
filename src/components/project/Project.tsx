import { NavLink } from "react-router-dom";

import style from "./Project.module.css";

interface ProjectProps {
  title: string;
  img: string;
  id: string;
}
const Project: React.FC<ProjectProps> = ({ title, img, id }) => {
  return (
    <NavLink to={`/projects/${id}`}>
      <li className={style.project}>
        <img src={img} alt={title} className={style.project__img} />
        <h3 className={style.project__title}>{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
