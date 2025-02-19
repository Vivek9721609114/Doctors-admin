import React, { useReducer } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import InputField from "../../ui/widgets/InputField";
import Button from "../../ui/widgets/Button";
import axios from "axios";
import { toast } from "react-toastify";
const ApponitmentCard = ({}) => {
  const Disptch = useDispatch();

  const isModalName = useSelector((state) => state.ui.isModalName);

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
    departments: "",
    doctorname: "",
    email: "",
    phone: "",
    msg: "",
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

  console.log(state);

  const onSaveData = () => {
    const config = {
      url: "https://doctors-appointment-data-default-rtdb.firebaseio.com/book.json",
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

    toast.success("Book An Appointment successfully");
    Disptch(uiActions.onModalOpen({ name: "" }));
  };

  return (
    <div>
      <div className={styles.modal_header}>
        <h4 className={styles.modal_header_left}>Book an Appointment</h4>
        <div
          className={styles.header_right}
          onClick={() => Disptch(uiActions.onModalOpen({ name: "" }))}
        >
          <IoMdClose size={25} />
        </div>
      </div>
      <div className={styles.modal_body}>
        <div className={styles.body_content}>
          <div className={styles.input_full}>
            <div>Patient Name *</div>
            <InputField
              onChange={onHandleChange}
              type="text"
              id="patientname"
              placeholder="Patient Name :"
            />
          </div>
          <div className={styles.mid_box}>
            <div className={styles.input_mid}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Departments</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="text"
                    id="departments"
                    placeholder="Department Name :"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Doctor</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="text"
                    id="doctorname"
                    placeholder="Doctor Name :"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Your Email *</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="text"
                    id="email"
                    placeholder="Your email :"
                  />
                </div>
              </div>
            </div>
            <div className={styles.input_mid}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Your Phone *</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="text"
                    id="phone"
                    placeholder="Your Phone :"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Date :</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="date"
                    id="date"
                    placeholder="dd-mm-yyyy :"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <div>Time :</div>
                <div>
                  <InputField
                    onChange={onHandleChange}
                    type="text"
                    id="time"
                    placeholder="03:30 PM :"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.input_top}>
            <div style={{ marginBottom: "0.5rem" }}>Comments *</div>
            <InputField
              onChange={onHandleChange}
              type="text"
              id="msg"
              placeholder="Your Message :"
            />
          </div>
          <div className={styles.btn}>
            <Button onClick={onSaveData} name="Book An Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApponitmentCard;
