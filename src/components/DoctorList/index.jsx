import React from "react";
import styles from "./index.module.css";
const DoctorList = ({ profile, title, name, p1, p2 }) => {
  return (
    <div className={styles.doctorList}>
      <div className={styles.profile_cont}>
        <img src={profile} alt={title} />
      </div>
      <div className={styles.para}>
        <a>{name}</a>
        <p className={styles.para_p1}>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  );
};

export default DoctorList;
