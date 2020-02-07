import React from 'react';
import styles from './Skills.module.css'
import Item from "./Item/Item";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.myskills}>
                    <span>Мои Скиллы</span>
                </div>
                <div className={styles.myskill_items}>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
