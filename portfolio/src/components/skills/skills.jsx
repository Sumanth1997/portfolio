import skillsData from '../../data/skills.json';
import { skillIcons } from './skillIcons';
import styles from './skills.module.css';

export const Skills = () => (
  <section className={styles.container} id="skills">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      {skillsData.categories.map((category) => (
        <div key={category.name} className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>{category.name}</h3>
          <div className={styles.categorySkills}>
            {category.skills.map((skill) => {
              const IconComponent = skillIcons[skill.title];
              return (
                <div key={skill.title} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    {IconComponent ? (
                      <IconComponent className={styles.skillIcon} size={40} />
                    ) : (
                      <span className={styles.placeholderIcon}>?</span>
                    )}
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);
