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
            <img src="assets/about/deep-learning.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>
                I design and deploy advanced AI systems, specializing in LLMs, RAG architectures, and agentic workflows. I leverage frameworks like PyTorch and tools like LangChain to build intelligent, production-grade solutions.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
