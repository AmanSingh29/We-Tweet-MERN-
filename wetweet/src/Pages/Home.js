import React from "react";
import styles from "../Css/home.module.css";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.homeSidebar}>
          <Sidebar />
        </div>
        <div className={styles.homeMain}>Main</div>
      </div>
    </div>
  );
};

export default Home;
