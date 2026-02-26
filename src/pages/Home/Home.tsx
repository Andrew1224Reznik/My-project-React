import Header from "../../components/header/Header";
import style from "./Home.module.css";
import "../../styles/main.css";

const Home = () => {
  return (
    <>
      <div className={style.neon_line}></div>
      <Header />
      <div className={style.neon_line}></div>
      <main className="section">
        <div className="container">
          <ul className={style.content_list}>
            <li className={style.content_list__item}>
              <h2 className="title_2">Frontend</h2>
              <p>HTML, CSS, JavaScript, TypeScript, React, Next.js</p>
            </li>
            <li className={style.content_list__item}>
              <h2 className="title_2">Backend</h2>
              <p>NodeJS</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
