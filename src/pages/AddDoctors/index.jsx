import React, { useReducer, useState } from "react";
import styles from "./index.module.css";
import ToggleBtn from "../../ui/widgets/ToggleBtn";
import DoctorList from "../../components/DoctorList";
import { doctorList } from "../../data/doctorList";
import img from "../../assets/upload_area.png";
import axios from "axios";
const AddDoctors = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          ...action.payload,
        };
      case "UPLOAD_IMAGE":
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    doctorname: "",
    experience: "1 years experienced",
    email: "",
    departments: "Gynecologist",
    phone: "",
    gender: "Male",
    bio: "",
    profileImage: "",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    status: "pending",
  });

  const onHandleChange = (e) => {
    dispatch({
      type: "DATA",
      payload: { ...state, [e.target.id]: e.target.value },
    });
  };

  const onSaveData = () => {
    const config = {
      url: "https://doctors-appointment-data-default-rtdb.firebaseio.com/doctor.json",
      method: "post",
      data: state,
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.AddDoctor}>
        <div className={styles.container}>
          <div className={styles.headerBtn}>
            <div>Add New Doctor</div>
            <div>
              <span>Doctris</span>
              <span>Doctors</span>
              <span>Add Doctor</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.content_left}>
              <div className={styles.left_card}>
                <div className={styles.card_top}>
                  <div className={styles.top_left}>
                    <img src={img} alt="" />
                  </div>
                  <div>
                    <div className={styles.top_mid}>
                      <h5>Upload your picture</h5>
                      <p>
                        For best results, use an image at least 600px by 600px
                        in either .jpg or .png format
                      </p>
                    </div>
                  </div>
                  <div className={styles.top_right}>
                    <div>
                      <ToggleBtn name="Upload" />
                    </div>
                    <div>
                      <ToggleBtn name="Remove" />
                    </div>
                  </div>
                </div>
                <div className={styles.card_bottom}>
                  <div className={styles.form}>
                    <div className={styles.form_content}>
                      <div className={styles.input_column}>
                        <label>Doctor Name</label>
                        <input
                          onChange={onHandleChange}
                          id="doctorname"
                          type="text"
                          placeholder="Doctor Name :"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Departments</label>
                        <select
                          onChnage={onHandleChange}
                          name=""
                          id="departments"
                        >
                          <option value="General physician">
                            General physician
                          </option>
                          <option value="Gynecologist">Gynecologist</option>
                          <option value="Dermatologist">Dermatologist</option>
                          <option value="Pediatricians">Pediatricians</option>
                          <option value="Neurologist">Neurologist</option>
                          <option value="Gastroenterologist">
                            Gastroenterologist
                          </option>
                        </select>
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Your Email</label>
                        <input
                          onChange={onHandleChange}
                          id="email"
                          type="text"
                          placeholder="Your email :"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Phone no.</label>
                        <input
                          onChange={onHandleChange}
                          id="phone"
                          type="text"
                          placeholder="Phone no :"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Experience</label>
                        <select
                          onChange={onHandleChange}
                          name=""
                          id="experience"
                        >
                          <option value="1 years experienced">
                            1 years experienced
                          </option>
                          <option value="2 years experienced">
                            2 years experienced
                          </option>
                          <option value="3 years experienced">
                            3 years experienced
                          </option>
                          <option value="4 years experienced">
                            4 years experienced
                          </option>
                          <option value="5 years experienced">
                            5 years experienced
                          </option>
                          <option value="6 years experienced">
                            6 years experienced
                          </option>
                          <option value="7 years experienced">
                            7 years experienced
                          </option>
                          <option value="8 years experienced">
                            8 years experienced
                          </option>
                          <option value="9 years experienced">
                            9 years experienced
                          </option>
                          <option value="10 years experienced">
                            10 years experienced
                          </option>
                        </select>
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Gender</label>
                        <select
                          onChange={onHandleChange}
                          name="gender"
                          id="gender"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      {/* input_column */}
                      <div
                        style={{ width: "100%" }}
                        className={styles.input_column}
                      >
                        <label>Your Bio Here</label>
                        <input onChange={onHandleChange} id="bio" type="text" />
                      </div>
                    </div>
                    <div className={styles.form_btn}>
                      <ToggleBtn onClick={onSaveData} name="Add Doctor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_right}>
              <div className={styles.doctorList}>
                <div className={styles.doctorList_top}>
                  <h5>Doctors List </h5>
                </div>
                <div className={styles.doctorList_bottom}>
                  <ul className={styles.bottom_ul}>
                    {doctorList.map((it) => {
                      return (
                        <li>
                          <DoctorList
                            profile={it.img}
                            name={it.name}
                            title={it.title}
                            p1={it.p1}
                            p2={it.p2}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctors;
