import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
              I am a software engineer with expertise in building scalable and efficient applications. My experience spans frontend and backend development, ensuring robust, optimized, and user-friendly solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/web-developer.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              I develop and maintain high-quality software solutions using modern technologies and best practices. My skill set covers frontend, backend, databases, and cloud services to create end-to-end applications. </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/deep-learning.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
              I develop and implement machine learning models to solve complex problems and generate data-driven insights. My expertise includes deep learning, NLP, and computer vision, leveraging frameworks like TensorFlow and PyTorch.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/FlutterIconv2.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Flutter Developer</h3>
              <p>
              I create cross-platform mobile applications using Flutter, delivering performant and visually appealing user experiences. My focus is on seamless UI/UX, efficient state management, and smooth app performance.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
