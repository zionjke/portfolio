import React from 'react';
import styles from './Slogan.module.css'


function Slogan() {
  return (
      <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.slogan_block}>
                    <span>Рассматриваю варианты удаленной работы</span>
                    <button>Нанять меня</button>
                </div>
            </div>
      </div>
  );
}

export default Slogan;
