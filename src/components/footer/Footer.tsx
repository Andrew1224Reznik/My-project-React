import style from "./Footer.module.css";

import telegram from "./../../img/icons/telegram.svg";
import email from "./../../img/icons/email.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__wrapper}>
          <ul className={style.social}>
            <li className={style.social__item}>
              <a href="#!">
                <img src={telegram} alt="Link" width={40} />
              </a>
            </li>
            <li className={style.social__item}>
              <a href="#!">
                <img src={email} alt="Link" width={43} />
              </a>
            </li>
            <li className={style.social__item}>
              <a href="#!">
                <img src={gitHub} alt="Link" width={40} />
              </a>
            </li>
            <li className={style.social__item}>
              <a href="#!">
                <img src={linkedIn} alt="Link" width={40} />
              </a>
            </li>
          </ul>
          <div className={style.copyright}>
            <p>© 2026 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
