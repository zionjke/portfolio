import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./Item/ProjectsItem";
import BlockTitle from "../BlockTitle";


function Projects() {
  return (
      <div className={styles.projects}>
          <div className={styles.container}>
                  <BlockTitle title='Мои проекты'/>
              <div className={styles.myprojects_items}>
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
