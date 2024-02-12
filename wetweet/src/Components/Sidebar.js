import React from "react";
import styles from "../Css/sidebar.module.css";
import { FaTwitter, FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebarCont}>
      <div className={styles.sidebarTop}>
        <div className={styles.homeLogo}>
          <div className={styles.logo}>
            <FaTwitter />
          </div>
          <div className={styles.title}>We-Tweet</div>
        </div>
        <div className={styles.homeLinks}>
          <div>
            <Link to={"/home"}>
              <FaHome /> Home
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <BsPersonFill /> Profile
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <BiExit /> Log Out
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.sidebarBottom}>Bottom</div>
    </div>
  );
};

export default Sidebar;
