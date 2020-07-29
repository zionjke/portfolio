import React from 'react';
import styles from './Slogan.module.css'
import BlockTitle from "../BlockTitle";


function Slogan() {
  return (
      <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.slogan_block}>
                    <BlockTitle title='available for freelance'/>
                </div>
            </div>
      </div>
  );
}

export default Slogan;
