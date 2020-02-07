import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./Item/ProjectsItem";


function Projects() {
  return (
      <div className={styles.projects}>
          <div className={styles.container}>
              <div className={styles.myprojects}>
                  <span>Мои работы</span>
              </div>
              <div className={styles.myprojects_items}>
                  <ProjectsItem/>
                  <ProjectsItem/>
              </div>
          </div>

      </div>
  );
}

export default Projects;
