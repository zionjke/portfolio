import React from 'react';
import styles from './Skills.module.css'
import Item from "./Item/Item";
import BlockTitle from "../BlockTitle";


function Skills() {

    let itemSkill = [
        {title:'Javascript',description:'JS',icon:''},
        {title:'ReactJS',description:'REACT',icon:''},
        {title:'HTML/CSS',description:'HTML',icon:''},
        {title:'NodeJS',description:'NODEJS',icon:''},
    ];

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <BlockTitle title='Мои скиллы'/>
                <div className={styles.myskill_items}>
                    {itemSkill.map((item,index) => <Item title={item.title}
                              description={item.description}
                              icon={item.icon}/>)}

                </div>
            </div>
        </div>
    );
}

export default Skills;
