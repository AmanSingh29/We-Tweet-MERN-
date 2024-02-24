import React from "react";
import styles from "../Css/sidebar.module.css";
import { FaTwitter, FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import Profile from "../Images/profile.jpg";

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
      <div className={styles.homeBottom}>
        <div className={styles.profileImg}>
          <img src={Profile} alt="profile-img" />
        </div>
        <div className={styles.profileDetails}>
          <p className={styles.username}>@aman2987</p>
          <p className={styles.name}>Aman Singh</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
