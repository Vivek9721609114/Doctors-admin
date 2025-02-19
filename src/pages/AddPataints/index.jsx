import React, { useReducer } from "react";
import styles from "./index.module.css";
import ToggleBtn from "../../ui/widgets/ToggleBtn";
import DoctorList from "../../components/DoctorList";
import { doctorList } from "../../data/doctorList";
import img from "../../assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

const AddPataints = () => {
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
    patientname: "",
    doctorname: "",
    email: "",
    departments: "General physician",
    phone: "",
    gender: "",
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
      url: "https://doctors-appointment-data-default-rtdb.firebaseio.com/patient.json",
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
    toast.success("Add Pataints successfully");
  };

  return (
    <div className={styles.AddDoctor}>
      <div className={styles.container}>
        <div className={styles.headerBtn}>
          <div>Add New Patient</div>
          <div>
            <span>Doctris</span>
            <span>Patients</span>
            <span>Add Patients </span>
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
                      For best results, use an image at least 600px by 600px in
                      either .jpg or .png format
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
                  <form action="">
                    <div className={styles.form_content}>
                      <div className={styles.input_column}>
                        <label>Patient Name</label>
                        <input
                          onChange={onHandleChange}
                          type="text"
                          placeholder="Patient Name :"
                          id="patientname"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Doctor Name</label>
                        <input
                          onChange={onHandleChange}
                          type="text"
                          placeholder="Doctor Name :"
                          id="doctorname"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Your Email</label>
                        <input
                          onChange={onHandleChange}
                          type="text"
                          placeholder="Your email :"
                          id="email"
                        />
                      </div>
                      {/* input_column */}
                      <div className={styles.input_column}>
                        <label>Phone no.</label>
                        <input
                          onChange={onHandleChange}
                          type="number"
                          placeholder="Phone no :"
                          id="phone"
                        />
                        {state.phone.length > 0 &&
                          state.phone.length !== 10 && (
                            <p>
                              !Please Enter A valid Phone Number (10 Digits)
                            </p>
                          )}
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
                        <label>Gender</label>
                        <input
                          onChange={onHandleChange}
                          id="gender"
                          type="text"
                        />
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
                  </form>
                  <div className={styles.form_btn}>
                    <ToggleBtn onClick={onSaveData} name="Add Patients" />
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
  );
};

export default AddPataints;
