import React from "react";
import styles from "./index.module.css";
import doctor_img from "../../assets/doctor.jpg";
import { Link } from "react-router-dom";
const DoctorsCrad = () => {
  return (
    <div className={styles.doctorsCrad}>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={doctor_img} alt="" />
          <ul className={styles.ul}>
            <li></li>
          </ul>
        </div>
        <div className={styles.text_content}>
          <Link>Dr. Calvin Carlo</Link>
          <small>Gynacologist</small>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCrad;
