import { useEffect } from "react";
import { useLocalStorage } from "./../../utils/useLocalStorage";

import sun from "./sun.svg";
import moon from "./moon.svg";
import style from "./BtnDarkMode.module.css";
import detectDarkMode from "../../utils/detectDarkMode";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage<string>(
    "darkMode",
    detectDarkMode()
  );

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, []);

  return (
    <button
      className={`${style.dark_mode_btn} ${
        darkMode === "dark" ? style.dark_mode_btn__active : ""
      }`}
      onClick={toggleDarkMode}
      type="button"
    >
      <img src={sun} alt="Light mode" className={style.dark_mode_btn__icon} />
      <img src={moon} alt="Dark mode" className={style.dark_mode_btn__icon} />
    </button>
  );
};

export default BtnDarkMode;
