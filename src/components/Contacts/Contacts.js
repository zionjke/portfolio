import React from 'react';
import styles from './Contacts.module.css'


function Contacts() {
  return (
      <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contacts_block}>
                    <span>Контакты</span>
                    <div className={styles.contacts_block_form}>
                        <form>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea ></textarea>
                        </form>
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
