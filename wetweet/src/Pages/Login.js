import React, { useEffect, useRef, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import styles from "../Css/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import { URL } from "../config";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLoginSubmit = function (e) {
    setLoader(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        emailRef.current.value = "";
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        setLoader(false);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.tweetLogo} data-aos="fade-right">
          <FaTwitter />
        </div>
        <div className={styles.form} data-aos="zoom-in">
          <h1>Welcome</h1>
          <h2>Login to continue..</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter username.."
            />
            <input ref={emailRef} type="email" placeholder="Enter email.." />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password.."
            />
            <button type="submit">
              {loader ? (
                <RotatingLines height="25" width="25" strokeColor="white" />
              ) : (
                "Login"
              )}
            </button>
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
