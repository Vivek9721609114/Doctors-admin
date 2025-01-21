import React from "react";
import styles from "./index.module.css";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import profile from "../../assets/men.jpg";
import launguge from "../../assets/lun.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.content_left}>
          <a href="">
            <GiHamburgerMenu size={20} />
          </a>
          <div className={styles.search_bar}>
            <div className={styles.menu_search}>
              <form action="">
                <input
                  className={styles.inputField}
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className={styles.inputField_searchbtnIcon}
                  type="submit"
                  value=""
                />
                <CiSearch />
              </form>
            </div>
          </div>
        </div>
        <ul className={styles.content_right}>
          <li>
            <div className={styles.lun_btn}>
              <img src={launguge} alt="profile" />
            </div>
          </li>
          <li>
            <CiSettings size={20} />
          </li>
          <li>
            <MdOutlineEmail size={20} />
          </li>
          <li>
            <img src={profile} alt="profile" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
