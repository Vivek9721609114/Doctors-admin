import React from "react";
import styles from "./index.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Main_Roots from "../../pages/Main_Roots";
import logo from "../../assets/logo.png";
import { AiTwotoneDashboard } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserAdd } from "react-icons/gr";
import Dashboard from "../../pages/Dashboard";
import Appointment from "../../pages/Appointments";
import Doctors from "../../pages/Doctors";
import Pataints from "../../pages/Patients";
import AddDoctors from "../../pages/AddDoctors";
import DoctorProfile from "../../pages/DoctorProfile";
import AddPataints from "../../pages/AddPataints";
import AllPataints from "../../pages/AllPataints";
import PataintsProfile from "../../pages/PataintsProfile";

const Main = () => {
  return (
    <>
      <div className={styles.sidebar_page_wrapper}>
        <nav className={styles.sidebar_wrappear}>
          <div className={styles.sidebar_top}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={styles.sidebar_bottom}>
            <li className={styles.sidebar_dropdown}>
              <Link to="/">
                <span>
                  <AiTwotoneDashboard />
                </span>
                Dashboard
              </Link>
            </li>
            <li className={styles.sidebar_dropdown}>
              <Link to="/appointment">
                <span>
                  <CiCalendarDate />
                </span>
                Appointment
              </Link>
            </li>
            <li className={styles.sidebar_dropdown}>
              <Link to="/doctors">
                <span>
                  <FaUserDoctor />
                </span>
                Doctors
              </Link>
            </li>
            <li className={styles.sidebar_dropdown}>
              <Link to="/adddoctors">
                <span>
                  <FaUserDoctor />
                </span>
                Add Doctors
              </Link>
            </li>
            {/* <li className={styles.sidebar_dropdown}>
              <Link to="/doctorsprofile">
                <span>
                  <FaUserDoctor />
                </span>
                Doctors Profile
              </Link>
            </li> */}
            <li className={styles.sidebar_dropdown}>
              <Link to="/pataints">
                <span>
                  <GrUserAdd />
                </span>
                Pataints
              </Link>
            </li>
            {/* <li className={styles.sidebar_dropdown}>
              <Link to="/allpataints">
                <span>
                  <GrUserAdd />
                </span>
                All Pataints
              </Link>
            </li> */}
            <li className={styles.sidebar_dropdown}>
              <Link to="/addpataints">
                <span>
                  <GrUserAdd />
                </span>
                Add Pataints
              </Link>
            </li>
            {/* <li className={styles.sidebar_dropdown}>
              <Link to="/pataintsprofile">
                <span>
                  <GrUserAdd />
                </span>
                Pataints Profile
              </Link>
            </li> */}
          </ul>
        </nav>
        <main className={styles.page_content}>
          <Routes>
            <Route
              path="/"
              element={<Main_Roots element={<Dashboard />} />}
            ></Route>
            <Route
              path="/appointment"
              element={<Main_Roots element={<Appointment />} />}
            ></Route>
            <Route
              path="/doctors"
              element={<Main_Roots element={<Doctors />} />}
            ></Route>
            <Route
              path="/adddoctors"
              element={<Main_Roots element={<AddDoctors />} />}
            ></Route>
            <Route
              path="/doctorsprofile"
              element={<Main_Roots element={<DoctorProfile />} />}
            ></Route>
            <Route
              path="/pataints"
              element={<Main_Roots element={<Pataints />} />}
            ></Route>
            <Route
              path="/allpataints"
              element={<Main_Roots element={<AllPataints />} />}
            ></Route>
            <Route
              path="/addpataints"
              element={<Main_Roots element={<AddPataints />} />}
            ></Route>
            <Route
              path="/pataintsprofile"
              element={<Main_Roots element={<PataintsProfile />} />}
            ></Route>
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Main;
