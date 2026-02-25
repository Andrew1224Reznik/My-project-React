import "./../../styles/main.css";
import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title_1">Contacts</h1>

        <ul className={style.content_list}>
          <li className={style.content_list__item}>
            <h2 className="title_2">Location</h2>
            <p>Odesa, Ukraine</p>
          </li>
          <li className={style.content_list__item}>
            <h2 className="title_2">Telegram</h2>
            <p>
              <a href="tel:+79051234567">+380 (95) 398-25-13</a>
            </p>
          </li>
          <li className={style.content_list__item}>
            <h2 className="title_2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">reznik1224@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
