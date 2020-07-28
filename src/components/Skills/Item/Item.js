import React from 'react';
import styles from './Item.module.css'


function Item({title,icon,description}) {
  return (
      <div className={styles.myskill_item}>
          <div className={styles.myskill_item_icon}>
              {icon}
          </div>
          <h3 className={styles.myskill_item_title}>{title}</h3>
          <div className={styles.myskill_item_description}>
              <p>{description}</p>
          </div>

      </div>

  );
}

export default Item;
