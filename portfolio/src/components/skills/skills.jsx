import skillsData from '../../data/skills.json';
import styles from './skills.module.css';

const AI_CATEGORIES = ["AI & LLM Engineering", "Distributed Training & Inference", "Frameworks & ML"];

export const Skills = () => (
  <section className={styles.container} id="skills">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      {skillsData.categories.map((category) => {
        const isAi = AI_CATEGORIES.includes(category.name);
        return (
          <div
            key={category.name}
            className={`${styles.categoryContainer} ${isAi ? styles.categoryContainerAi : ''}`}
          >
            <h3 className={`${styles.categoryTitle} ${isAi ? styles.categoryTitleAi : ''}`}>
              {category.name}
            </h3>
            <div className={styles.categorySkills}>
              {category.skills.map((skill) => (
                <div key={skill.title} className={styles.skill}>
                  <span className={styles.skillPill}>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
