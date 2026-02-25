import style from "./BtnGitHub.module.css";
import githubIcon from "./gitHub-black.svg";

interface BtnGitHubProps {
  link: string;
}

const BtnGitHub = ({ link }: BtnGitHubProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={style.btn_outline}
    >
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
