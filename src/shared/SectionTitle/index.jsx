import React from "react";
import styles from "./index.module.css";

const SectionTitle = ({ name }) => {
  return <h5 className={styles.sectionTitle}>{name}</h5>;
};

export default SectionTitle;
