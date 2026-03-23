import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const isCurrent = historyItem.endDate === "Present";
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.logoWrapper}>
                  <img
                    src={historyItem.imageSrc}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <div className={styles.dateRow}>
                    <span className={styles.date}>{`${historyItem.startDate} – ${historyItem.endDate}`}</span>
                    {isCurrent && <span className={styles.currentBadge}>Current</span>}
                  </div>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
