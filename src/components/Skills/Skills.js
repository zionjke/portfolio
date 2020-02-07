import React from 'react';
import styles from './Skills.module.css'


function Skills() {
  return (
      <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.myskills}>
                    <span>Мои Скиллы</span>
                </div>
                <div className={styles.myskill_items}>
                        <div className={styles.myskill_item}>
                            <div className={styles.myskill_item_image}>
                                <img src="" alt=""/>
                            </div>
                            <span>REACT</span>
                            <div className={styles.myskill_item_description}>
                                    <span>Подробное описание навыка</span>
                            </div>

                        </div>
                </div>
            </div>
      </div>
  );
}

export default Skills;
