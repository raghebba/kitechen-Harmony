import React from "react";
import Styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={Styles.loadingContainer}>
      <div className={Styles.loadingSpinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;