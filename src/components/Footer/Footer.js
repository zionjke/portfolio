import React from 'react';
import styles from './Footer.module.css'


function Footer() {
  return (
      <div className={styles.footer}>
          <div className={styles.container}>
                <div className={styles.footer_block}>
                    <span>Васильев Артем</span>
                    <div className={styles.footer_block_sociallinks}>
                            <div className={styles.footer_block_sociallinks_item}></div>
                            <div className={styles.footer_block_sociallinks_item}></div>
                            <div className={styles.footer_block_sociallinks_item}></div>
                            <div className={styles.footer_block_sociallinks_item}></div>
                    </div>
                    <span>2020 Все права защищены</span>
                </div>
          </div>

      </div>
  );
}

export default Footer;
