import { useCallback } from "react";
import styles from "./Apibutton.module.css";

const Apibutton = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "http://google.com";
  }, []);

  return (
    <button className={styles.button} onClick={onButtonClick}>
      <div className={styles.buttonChild} />
      <div className={styles.login}>Login</div>
      <img
        className={styles.reactIconsriridiscordfill}
        alt=""
        src="../reacticonsriridiscordfill.svg"
      />
    </button>
  );
};

export default Apibutton;
