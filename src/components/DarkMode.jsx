import styles from "./DarkMode.module.css";

function DarkMode() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className={styles.dark_mode}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}

export default DarkMode;
