import React from 'react';
import styles from './Contacts.module.css'
import BlockTitle from "../BlockTitle";


function Contacts() {
  return (
      <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contacts_block}>
                    <BlockTitle title='Контакты'/>
                        <div className={styles.contacts_block_form}>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea ></textarea>
                        </div>

                    <button>
                        Отправить
                    </button>

                </div>
            </div>
      </div>
  );
}

export default Contacts;
