import React from 'react';
import styles from './Main.module.css'
import Particles from "react-particles-js";
import {particleOpt} from "../../App";


function Main() {
    return (
        <div id='main' className={styles.main}>
            <Particles className='particles' params={particleOpt}/>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hey!</span>
                    <span>I`m <span>Vasyliev</span> Artem</span>
                    <h1>a Front-end Developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
