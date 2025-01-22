import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sumanth Mylar</h1>
        <p className={styles.description}>
         I'm a former Software Engineer with 4.6 years of experience, currently pursuing a Master's in Computer Science at Purdue University Fort Wayne. Feel free to reach out if you'd like to learn more!
        </p>
        <a href="mailto:sumanthmylar@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
    src="assets/hero/profilePhoto.png" // Path from the public directory root
    alt="Hero image of me"
    className={styles.heroImg}
/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
