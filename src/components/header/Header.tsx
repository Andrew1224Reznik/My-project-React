import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h1 className={style.header__title}>
          <strong>
            Hi, my name is <em>Andrii</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={style.header__text}>
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="/public/Andrii_Reznichenko_Front-End_Developer.pdf"
          download
          className={style.btn}
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
