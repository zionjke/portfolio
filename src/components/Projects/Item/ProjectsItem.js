import React from 'react';
import styles from './ProjectsItem.module.css'


function ProjectsItem({title,descr,urlDemo,projectBack}) {

    const projectImgStyle = {
        backgroundImage: 'url(' + projectBack + ')',
        // backgroundPosition: 'center',
        backgroundSize: '200%',
        backgroundRepeat: 'no-repeat',
    }

  return (
                  <div className={styles.myprojects_item}>
                        <div style={projectImgStyle} className={styles.myprojects_item_image}>
                            <div className={styles.buttons}>
                                <form action={urlDemo} target='_blank'>
                                    <button className={styles.projectButton}>Demo</button>
                                </form>
                            </div>
                        </div>
                      <div className={styles.myprojects_item_name}>
                          <div className={styles.title}>
                              {title}
                          </div>
                          <div className={styles.descr}>
                              {descr}
                          </div>
                      </div>

                  </div>
  );
}

export default ProjectsItem;
