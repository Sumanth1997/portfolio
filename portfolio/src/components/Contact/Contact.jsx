import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <section id="contact" className={styles.section}>
        <h2 className={styles.heading}>Let's Build Something Together</h2>
        <p className={styles.subheading}>
          Open to AI/ML engineering roles and interesting projects.
        </p>
        <div className={styles.contactCards}>
          <a href="mailto:sumanthmylar@gmail.com" className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <FaEnvelope />
            </div>
            <span className={styles.cardLabel}>Email</span>
            <span className={styles.cardValue}>sumanthmylar@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/sumanthmylar/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <FaLinkedin />
            </div>
            <span className={styles.cardLabel}>LinkedIn</span>
            <span className={styles.cardValue}>linkedin.com/sumanthmylar</span>
          </a>
          <a href="https://www.github.com/sumanth1997" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <FaGithub />
            </div>
            <span className={styles.cardLabel}>GitHub</span>
            <span className={styles.cardValue}>github.com/sumanth1997</span>
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Built with React + Vite &nbsp;·&nbsp; Deployed on Netlify &nbsp;·&nbsp; © 2026 Sumanth Mylar</p>
      </footer>
    </>
  );
};
