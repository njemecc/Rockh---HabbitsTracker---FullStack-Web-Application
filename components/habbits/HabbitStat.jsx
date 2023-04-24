import React from "react";
import styles from "./HabbitStat.module.css";

const HabbitStat = (props) => {
  return (
    <div className={styles["container"]}>
      {" "}
      <div className={styles["gornji-deo"]}>
        {props.emoji}
        <span className={styles["text"]}>{props.text}</span>
      </div>
      <div className={styles["donji-deo"]}>
        <p>{`${props.number} ${props.currency}`}</p>
      </div>
    </div>
  );
};

export default HabbitStat;
