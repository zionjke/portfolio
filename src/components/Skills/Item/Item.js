import React from 'react';
import styles from './Item.module.css'


function Item() {
  return (
      <div className={styles.myskill_item}>
          <div className={styles.myskill_item_image}>
              <img src="" alt=""/>
          </div>
          <span>REACT</span>
          <div className={styles.myskill_item_description}>
              <span>Подробное описание навыка</span>
          </div>

      </div>

  );
}

export default Item;
