import React from "react";
import styles from "./index.module.css";

const DashCard = ({ icon, name, number }) => {
  return (
    <>
      <div className={styles.dashCard}>
        <div className={styles.dash_container}>
          <div className={styles.content}>
            <div className={styles.content_left}>{icon}</div>
            <div className={styles.content_right}>
              <div className={styles.right_top}>{number}</div>
              <div className={styles.right_bottom}>{name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
