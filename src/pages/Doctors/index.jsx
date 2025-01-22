import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import styles from "./index.module.css";
import DoctorsCrad from "../../components/DoctorsCard";
import { MdOutlineExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { doctorList } from "../../data/doctorList";

const Doctors = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <SectionTitle name="Doctors" />
        </div>
        <div className={styles.btn}>
          <div className={styles.btn_left}>
            <span>
              <Link to="/">
                Doctris
                <p className={styles.greater}>
                  <MdOutlineExpandLess size={20} />
                </p>
              </Link>
            </span>
            <br />
            <span> Doctors</span>
          </div>
          <div className={styles.btn_right}>
            <Link to="/adddoctors">
              <div>Add New Doctor</div>
            </Link>
          </div>
        </div>
        <div className={styles.Doctors}>
          {doctorList.map((it) => {
            return (
              <DoctorsCrad
                key={it.id}
                name={it.firstname}
                department={it.department}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Doctors;
