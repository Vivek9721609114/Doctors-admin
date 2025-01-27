import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import styles from "./index.module.css";
import DoctorsCrad from "../../components/DoctorsCard";
import { MdOutlineExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { doctorList } from "../../data/doctorList";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://doctors-appointment-data-default-rtdb.firebaseio.com/doctor.json"
      )
      .then((res) => {
        console.log(res);
        const transformedData = [];

        for (let doctors in res.data) {
          transformedData.push(res.data[doctors]);
        }

        setDoctors(transformedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(doctors);
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
          {doctors.map((it) => {
            return (
              <DoctorsCrad
                key={it.id}
                name={it.doctorname}
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
