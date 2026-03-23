import React from "react";

import styles from "./ProjectCard.module.css";

const AI_SKILLS = ["TensorFlow", "PyTorch", "BERT", "RoBERTa", "XLNet", "CNN", "Keras", "Transformers"];

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const isAI = skills.some((s) => AI_SKILLS.includes(s));

  return (
    <div className={styles.container}>
      {isAI && <span className={styles.aiBadge}>AI</span>}
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={source} className={styles.link}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
