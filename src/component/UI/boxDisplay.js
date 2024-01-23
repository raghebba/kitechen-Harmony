import React from "react"
import styles from "./boxDisplay.module.css"

const BoxDisplay = (props) => {
    return(
        <div className={styles.boxDisplay}>
            {props.children}
        </div>
    )
}

export default BoxDisplay