import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>AI &amp; ML Engineer</p>
        <h1 className={styles.title}>Building Intelligent Systems at Scale</h1>
        <p className={styles.description}>
          Software Engineer + AI Engineer. I build LLM-powered applications, RAG architectures, and distributed training pipelines. MS in Computer Science from Purdue University Fort Wayne.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.contactBtn}>
            View My Work
          </a>
          <a href="mailto:sumanthmylar@gmail.com" className={styles.projectsBtn}>
            Get In Touch
          </a>
        </div>
        <div className={styles.techBadges}>
          <span className={styles.techBadge}>PyTorch</span>
          <span className={styles.techBadge}>LangChain</span>
          <span className={styles.techBadge}>AWS SageMaker</span>
          <span className={styles.techBadge}>RAG Architecture</span>
          <span className={styles.techBadge}>LangGraph</span>
        </div>
      </div>
      <div className={styles.heroImgWrapper}>
        <img
          src="assets/hero/profilePhoto.png"
          alt="Sumanth Mylar"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
