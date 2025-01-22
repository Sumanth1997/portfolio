// Education.jsx
import React from 'react';
import styles from './Education.module.css';

export const Education = () => {
  const educationData = [
    {
      university: "Purdue University Fort Wayne",
      location: "Fort Wayne, Indiana",
      degree: "MS in Computer Science",
      duration: "Jan. 2024 – Dec 2025",
      courses: [
        "Natural Language Processing",
        "Operating Systems",
        "Software Engineering",
        "Full Stack Web Development",
        "Machine Learning",
        "Cyberware Info Operations",
      ],
    },
    {
      university: "Visvesvarya Technological University",
      location: "Bangalore, India",
      degree: "B.E. Computer Science & Engineering",
      duration: "Aug. 2015 – Jun 2019",
      courses: [
        "Python Application Programming",
        "Advanced Java & J2EE",
        "Data Mining & Data Warehousing",
        "Database Management System",
      ],
    },
  ];

  return (
    <div className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      
      <div className={styles.content}>
        
        {educationData.map((item, index) => (
          
          <div key={index} className={styles.educationItem}>
            <div className={styles.educationDetails}>
              <h3>{item.university}</h3>
              
              <p className={styles.location}>{item.location}</p>
              <p>
                <strong>{item.degree}</strong> | {item.duration}
              </p>
              <div> {/* Relevant Coursework Container */}
                <p className={styles.courseworkTitle}>Relevant Coursework:</p>
                <div className={styles.courses}>
                  {item.courses.map((course, cIndex) => (
                    <span key={cIndex} className={styles.course}>
                      {course}
                      {cIndex < item.courses.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
