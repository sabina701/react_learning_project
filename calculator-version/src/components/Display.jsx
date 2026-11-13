import React from "react";
import styles from "./Display.module.css";
const Display = ({ calVal }) => {
  return (
    <div>
      <input type="text" value={calVal} className={`${styles["display"]}`} />
    </div>
  );
};

export default Display;
