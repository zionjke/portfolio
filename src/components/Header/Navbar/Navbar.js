import React from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-scroll";


function Navbar() {
  return (

              <div className={styles.nav}>
                  <Link smooth={true}  to='main'><a href className={styles.link}>Main</a></Link>
                  <Link smooth={true}  to='skills'><a href className={styles.link}>Skills</a></Link>
                  <Link smooth={true} to='projects'><a href className={styles.link}>Projects</a></Link>
                  <Link smooth={true} to='contacts'><a href className={styles.link}>Contacts</a></Link>
                  <Link smooth={true} to='socials'><a href className={styles.link}>Socials</a></Link>
              </div>
  );

}

export default Navbar;

