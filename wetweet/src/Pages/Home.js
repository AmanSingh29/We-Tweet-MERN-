import React from "react";
import styles from "../Css/home.module.css";
import Sidebar from "../Components/Sidebar";
import TweetCard from "../Components/TweetCard";

const Home = () => {
  return (
    <div>
      <div className={styles.homeContainer}>
        <Sidebar />
        <div className={styles.homeMain}>
          <TweetCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
