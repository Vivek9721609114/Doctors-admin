import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import table_icon from "../../assets/men_table.jpg";
import { BiCheck } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const Pataints = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://doctors-appointment-data-default-rtdb.firebaseio.com/patient.json"
      )
      .then((res) => {
        console.log(res);
        const transformedData = [];

        for (let patient in res.data) {
          transformedData.push(res.data[patient]);
        }

        setPatients(transformedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles.appointment_table_row}>
        <div className={styles.table_content}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: "50px" }}>#</th>
                  <th style={{ minWidth: "170px" }}>Name</th>

                  <th style={{ minWidth: "150px" }}>Gender</th>
                  <th style={{ minWidth: "150px" }}>Patient Name</th>
                  <th style={{ minWidth: "150px" }}>Mobile No.</th>
                  <th style={{ minWidth: "150px" }}>Department</th>
                  <th style={{ minWidth: "150px" }}>Date</th>
                  <th style={{ minWidth: "150px" }}>Time</th>
                  <th style={{ minWidth: "150px" }}>Status</th>
                  <th style={{ minWidth: "150px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((it, ind) => {
                  return (
                    <tr>
                      <td>{ind + 1}</td>
                      <td>
                        <a href="">
                          <div className={styles.td_icon_cont}>
                            <img src={table_icon} alt="icon" />
                            <span>Howord Tanner</span>
                          </div>
                        </a>
                      </td>

                      <td>{it.gender}</td>
                      <td>
                        {it.firstname} {it.lastname}
                      </td>
                      <td>{it.phone}</td>
                      <td>{it.departments}</td>
                      <td>{it.date}</td>
                      <td>{it.time}</td>
                      <td>{it.status}</td>
                      <td className={styles.btn_icon}>
                        <a>
                          <span className={styles.span_1}>
                            <FaRegEye />
                          </span>
                        </a>
                        <a>
                          <span className={styles.span_2}>
                            <FaPencilAlt />
                          </span>
                        </a>
                        <a>
                          <span className={styles.span_3}>
                            <MdDelete />
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
    </>
  );
};

export default Pataints;
