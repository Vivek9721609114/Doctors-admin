import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { MdOutlineExpandLess } from "react-icons/md";

const SectionBtn = ({ leftName1, leftName2, rightName1 }) => {
  return (
    <>
      <div className={styles.btn}>
        <div className={styles.btn_left}>
          <span>
            <Link to="/">
              {leftName1}
              <p className={styles.greater}>
                <MdOutlineExpandLess size={20} />
              </p>
            </Link>
          </span>
          <br />
          <span>{leftName2}</span>
        </div>
        <div className={styles.btn_right}>
          {/* <div>
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Tommorrow</option>
              <option value="">yesterday</option>
            </select>
          </div> */}
          <div>{rightName1}</div>
        </div>
      </div>
    </>
  );
};

export default SectionBtn;
