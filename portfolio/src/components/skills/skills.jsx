import skillsData from '../../data/skills.json'; // Import the updated JSON
// import { getImageUrl } from '../utils';
import styles from './skills.module.css';

export const Skills = () => (
  <div className={styles.container}>
  <h2 className={styles.title}>Skills</h2>
  <div className={styles.content}>
    {skillsData.categories.map((category) => (
      <div key={category.name} className={styles.categoryContainer}> {/* Container for each category */}
        <h3 className={styles.categoryTitle}>{category.name}</h3> {/* Category title */}
        <div className={styles.categorySkills}> {/* Container for the skills within the category */}
          {category.skills.map((skill) => (
            <div key={skill.title} className={styles.skill}>
               <img src={skill.imageSrc} alt={skill.title} className={styles.logo}/> {/* Skill logo */}
               <span className={styles.skillName}>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

);
