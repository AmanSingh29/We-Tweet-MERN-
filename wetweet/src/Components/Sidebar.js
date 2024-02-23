import React from "react";
import styles from "../Css/sidebar.module.css";
import { FaTwitter, FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className={styles.sidebarCont}>
      <div className={styles.homeTop}>
        <div className={styles.homeLogo}>
          <div className={styles.logo}>
            <FaTwitter />
          </div>
          <div className={styles.title}>We-Tweet</div>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <FaHome className={styles.icons} /> HOME
          </div>
          <div className={styles.links}>
            <BsPersonFill className={styles.icons} /> PROFILE
          </div>
          <div className={styles.links}>
            <BiExit className={styles.icons} /> LOGOUT
          </div>
        </div>
      </div>
      <div className={styles.homeBottom}>hello</div>
    </div>
  );
};

export default Sidebar;
