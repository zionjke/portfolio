import React from 'react';
import styles from './Skills.module.css'
import Item from "./Item/Item";
import BlockTitle from "../BlockTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3, faHtml5, faJs, faJsSquare, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";


function Skills() {

    let itemSkill = [
        {title:'Javascript',description:'JS',icon:<FontAwesomeIcon icon={faJsSquare}/>},
        {title:'ReactJS',description:'REACT',icon:<FontAwesomeIcon icon={faReact}/>},
        {title:'HTML',description:'HTML',icon:<FontAwesomeIcon icon={faHtml5}/>},
        {title:'NodeJS',description:'NODEJS',icon:<FontAwesomeIcon icon={faNodeJs}/>},
        {title:'CSS',description:'CSS',icon:<FontAwesomeIcon icon={faCss3}/>}
    ];

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <BlockTitle title='Skills'/>
                <div className={styles.myskill_items}>
                    {itemSkill.map((item) => <Item title={item.title}
                              description={item.description}
                              icon={item.icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
