import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import styles from "./index.module.css";
import table_icon from "../../assets/men_table.jpg";
import { FaRegEye } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineExpandLess } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import Modal from "../../modal";
import axios from "axios";

import ApponitmentCard from "../../components/ApponitmentCard";
const Appointment = () => {
  const Dispatch = useDispatch();

  const isModalName = useSelector((state) => state.ui.isModalName);
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://doctors-appointment-data-default-rtdb.firebaseio.com/book.json"
      )
      .then((res) => {
        console.log(res);
        const transformedData = [];

        for (let patient in res.data) {
          transformedData.push(res.data[patient]);
          console.log(patient);
        }

        setAppoinments(transformedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [id, setid] = useState("");
  const handleDelete = (ind) => {
    axios
      .get(
        "https://doctors-appointment-data-default-rtdb.firebaseio.com/book.json"
      )
      .then((res) => {
        for (let patient in res.data) {
          res.data[patient].map((it) => {
            return it.email == ind && setid(patient);
          });
        }
      });
    const config = {
      url: `https://doctors-appointment-data-default-rtdb.firebaseio.com/book/${id}.json`,
      method: "DELETE",
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(ind);
    // const deletefilter = ind.filter((it) => it.ind != ind.it);
    // console.log(deletefilter);
  };

  return (
    <>
      {isModalName && (
        <div
          onClick={() => Dispatch(uiActions.onModalOpen({ name: "" }))}
          style={{
            background: "rgba(0,0,0,.5)",
            zIndex: 10,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        ></div>
      )}

      <div className={styles.appointment_container}>
        {isModalName === "AppointmentToggale" && (
          <Modal>
            <div className={styles.apponitmentCard}>
              <ApponitmentCard />
            </div>
          </Modal>
        )}
        <div className={styles.title}>
          <SectionTitle name="Appointment" />
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
              <span>Appointment</span>
            </div>
            <div className={styles.btn_right}>
              <div>
                <select name="" id="">
                  <option value="">Today</option>
                  <option value="">Tommorrow</option>
                  <option value="">yesterday</option>
                </select>
              </div>
              <div
                onClick={() =>
                  Dispatch(
                    uiActions.onModalOpen({ name: "AppointmentToggale" })
                  )
                }
              >
                Apponitment
              </div>
            </div>
          </div>
        </div>
        <div className={styles.appointment_table_row}>
          <div className={styles.table_content}>
            <div className={styles.table}>
              <table>
                <thead>
                  <tr>
                    <th style={{ minWidth: "50px" }}>#</th>
                    <th style={{ minWidth: "170px" }}>Name</th>
                    <th style={{ minWidth: "160px" }}>Email</th>
                    <th style={{ minWidth: "150px" }}>Age</th>
                    <th style={{ minWidth: "150px" }}>Gender</th>
                    <th style={{ minWidth: "150px" }}>Phone Number</th>
                    <th style={{ minWidth: "150px" }}>Department</th>
                    <th style={{ minWidth: "150px" }}>Date</th>
                    <th style={{ minWidth: "150px" }}>Time</th>
                    <th style={{ minWidth: "150px" }}>Doctor</th>
                    <th style={{ minWidth: "150px" }}>Fees</th>
                    <th style={{ minWidth: "150px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appoinments.map((it, ind) => {
                    return (
                      <tr>
                        <td>{ind + 1}</td>
                        <td>
                          <a href="">
                            <div className={styles.td_icon_cont}>
                              <img src={table_icon} alt="icon" />
                              <span>{it.patientname}</span>
                            </div>
                          </a>
                        </td>
                        <td>{it.email}</td>
                        <td>{it.age}</td>
                        <td>{it.gender}</td>
                        <td>{it.phone}</td>
                        <td>{it.department}</td>
                        <td>{it.date}</td>
                        <td>{it.time}</td>
                        <td>
                          <a href="">
                            <div className={styles.td_icon_cont}>
                              <img src={table_icon} alt="icon" />
                              <span>{it.doctorname}</span>
                            </div>
                          </a>
                        </td>
                        <td>$50/Patient</td>
                        <td className={styles.btn_icon}>
                          <a>
                            <span className={styles.span_1}>
                              <FaRegEye />
                            </span>
                          </a>
                          <a>
                            <span className={styles.span_2}>
                              <BiCheck />
                            </span>
                          </a>
                          <a>
                            <span
                              onClick={() => handleDelete(it.email)}
                              className={styles.span_3}
                            >
                              <RxCross2 />
                            </span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
