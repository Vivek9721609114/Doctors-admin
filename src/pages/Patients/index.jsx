import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import table_icon from "../../assets/men_table.jpg";
import { BiCheck } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Pataints = () => {
  const [patients, setPatients] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://doctors-appointment-data-default-rtdb.firebaseio.com/patient.json"
      )
      .then((res) => {
        console.log(res);
        const transformedData = [];

        for (let patient in res.data) {
          transformedData.push({ id: patient, ...res.data[patient] });
        }

        setPatients(transformedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [patients]);
  const handleDelete = (ind) => {
    const config = {
      url: `https://doctors-appointment-data-default-rtdb.firebaseio.com/patient/${ind}.json`,
      method: "DELETE",
    };
    console.log("hlo");

    axios(config)
      .then((res) => {
        //console.log(res);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });

    toast.error("Pataints deleted successfully");
  };

  return (
    <>
      <div className={styles.appointment_table_row}>
        <div className={styles.table_content}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th style={{ minWidth: "50px" }}>#</th>
                  <th style={{ minWidth: "170px" }}>Doctor Name</th>

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
                            <span>{it.doctorname}</span>
                          </div>
                        </a>
                      </td>

                      <td>{it.gender}</td>
                      <td>{it.patientname}</td>
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
                            <MdDelete onClick={() => handleDelete(it.id)} />
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
