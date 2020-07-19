import React from 'react';
import styles from './Item.module.css'


function Item({title,icon,description}) {
  return (
      <div className={styles.myskill_item}>
          <div className={styles.myskill_item_icon}>
              <img src={icon} alt=""/>
          </div>
          <span className={styles.myskill_item_title}>{title}</span>
          <div className={styles.myskill_item_description}>
              <span>{description}</span>
          </div>

      </div>

  );
}

export default Item;
