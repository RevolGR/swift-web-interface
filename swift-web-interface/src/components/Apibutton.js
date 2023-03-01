import { useCallback } from "react";
import styles from "./Apibutton.module.css";
import {useEffect, useState} from 'react';

export const Apibutton = () => {
  const [initialState, setInitialState] = useState([])
    const onButtonClick = useCallback(() => {
      window.location.href = "http://localhost:53134/auth";
    }, []);
  useEffect(() => {
    fetch('/auth').then(res =>{
      if(res.ok){
        return res.json()
      }
      }).then(jsonResponse => setInitialState(jsonResponse))
    },[])
  console.log(initialState)
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
