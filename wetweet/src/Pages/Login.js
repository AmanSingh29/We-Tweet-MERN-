import React, { useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import styles from "../Css/login.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";

const Login = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.tweetLogo} data-aos="fade-right">
          <FaTwitter />
        </div>
        <div className={styles.form} data-aos="zoom-in">
          <h1>Welcome</h1>
          <h2>Login to continue..</h2>
          <form>
            <input type="text" placeholder="Enter username.." />
            <input type="email" placeholder="Enter email.." />
            <input type="password" placeholder="Enter password.." />
            <button type="submit">Login</button>
          </form>
          <p>
            Not have account ? <Link to={"/register"}>Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
