import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./Item/ProjectsItem";


function Projects() {
  return (
      <div className={styles.projects}>
          <div className={styles.container}>
                  <span className={styles.myprojects_title}>Мои работы</span>
              <div className={styles.myprojects_items}>
                  <ProjectsItem/>
                  <ProjectsItem/>
                  <ProjectsItem/>
                  <ProjectsItem/>
                  <ProjectsItem/>
              </div>
          </div>

      </div>
  );
}

export default Projects;
