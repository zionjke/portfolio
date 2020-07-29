import React from 'react';
import styles from './Footer.module.css'
import BlockTitle from "../BlockTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
      <div id='socials' className={styles.footer}>
          <div className={styles.container}>
                <div className={styles.social_block}>
                    <BlockTitle title='Vasyliev Artem'/>
                    <div className={styles.icons}>
                            <div className={styles.icon}>
                                <a className={styles.link} href="https://www.facebook.com/profile.php?id=100001800740886"><FontAwesomeIcon icon={faFacebook}/></a>
                            </div>
                            <div className={styles.icon}>
                                <a className={styles.link} href="https://www.linkedin.com/in/artem-vasiliev-3498061b2/"><FontAwesomeIcon icon={faLinkedin}/></a>
                            </div>
                            <div className={styles.icon}>
                                <a className={styles.link} href="https://github.com/zionjke"><FontAwesomeIcon icon={faGithub}/></a>
                            </div>
                    </div>
                </div>
          </div>

      </div>
  );
}

export default Footer;
