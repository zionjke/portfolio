import React from 'react';
import styles from './Projects.module.css'
import ProjectsItem from "./Item/ProjectsItem";
import BlockTitle from "../BlockTitle";
import todo from '../../assets/projects/todo.png'
import {particleOpt} from "../../App";
import Particles from "react-particles-js";


function Projects() {

    const arr = [
        {
            title:'ToDo',
            descr: 'ReactJS,Redux,Redux-Thunk,TypeScript,SCSS,React-Router,REST-API',
            urlDemo: 'https://zionjke.github.io/toDoList',
            urlCode: 'https://github.com/zionjke/toDoList',
            projectBack: todo
        },

    ]

  return (
      <div id='projects' className={styles.projects}>
          <Particles className='particles' params={particleOpt}/>
          <div className={styles.container}>
                  <BlockTitle title='My projects'/>
              <div className={styles.myprojects_items}>
                  {arr.map((item,index)=><ProjectsItem key={index} {...item}/>)}
              </div>
          </div>
      </div>
  );
}

export default Projects;
