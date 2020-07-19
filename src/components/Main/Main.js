import React from 'react';
import styles from './Main.module.css'


function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я <span>Васильев</span> Артем</span>
                    <h1>Я Front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
