import React from "react";
import styles from "./boxDisplay.module.css";

const BoxDisplay = (props) => {
  const instyles = {
    direction: "rtl",
    textAlign: "right",
  };
  const combinedStyles = props.language === "tunisian" ? instyles : {};

  return (
    <div
      style={combinedStyles}
      className={styles.boxDisplay}
    >
      {props.children}
    </div>
  );
};

export default BoxDisplay;
