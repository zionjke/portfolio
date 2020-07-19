import React from "react";
import styles from "./Skills/Skills.module.css";

const BlockTitle = ({title}) => {
    return (
        <div className={styles.blockTitle}>
            <h2 className={styles.myskills_title}>{title}</h2>
            <div className={styles.line}></div>
        </div>
    )
};

export default BlockTitle