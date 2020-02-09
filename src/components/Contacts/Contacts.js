import React from 'react';
import styles from './Contacts.module.css'


function Contacts() {
  return (
      <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contacts_block}>
                    <span>Контакты</span>

                        <form className={styles.contacts_block_form}>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea ></textarea>
                        </form>

                    <button>
                        Отправить
                    </button>

                </div>
            </div>
      </div>
  );
}

export default Contacts;
