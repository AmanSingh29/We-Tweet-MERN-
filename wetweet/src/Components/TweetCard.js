import React from "react";
import styles from "../Css/tweet.module.css";
import Profile from "../Images/profile.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const TweetCard = () => {
  return (
    <div className={styles.tweetCont}>
      <div className={styles.profile}>
        <img src={Profile} alt="profile-img" />
      </div>
      <div className={styles.tweetDetails}>
        <div className={styles.tweetedPerson}>
          <div className={styles.person}>
            <span>@aman2987</span> - <span>3 days ago</span>
          </div>
          <div className={styles.deleteIcon}>
            <RiDeleteBin5Line />
          </div>
        </div>
        <div className={styles.tweetContent}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin
        </div>
        <div className={styles.tweetImage}>
          <img src={Profile} alt="tweet-img" />
        </div>
        <div className={styles.tweeteIcons}>
          <div className={`${styles.icons} ${styles.heartIcon}`}>
            <span>3</span>
            {/* <GoHeartFill /> */}
            <GoHeart />
          </div>
          <div className={`${styles.icons} ${styles.replyIcon}`}>
            <span>4</span>
            <BiMessageRounded />
          </div>
          <div className={`${styles.icons} ${styles.retweetIcon}`}>
            <span>2</span>
            <FaRetweet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
