import React from 'react';
import styles from './Skills.module.css'


function Skills() {
  return (
      <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.myskills}>
                    <span>Мои Скиллы</span>
                </div>
            </div>
      </div>
  );
}

export default Skills;
