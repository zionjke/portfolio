import React from 'react';
import styles from './ProjectsItem.module.css'


function ProjectsItem() {
  return (

                  <div className={styles.myprojects_item}>
                        <div className={styles.myprojects_item_image}>
                            <img src="" alt=""/>
                            <button>Смотреть</button>
                        </div>
                      <div className={styles.myprojects_item_name}>
                            <span>Название проекта</span>
                             <p>Краткое описание проекта</p>
                      </div>

                  </div>

  );
}

export default ProjectsItem;
