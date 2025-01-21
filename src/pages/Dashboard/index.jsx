import React from "react";
import styles from "./index.module.css";
import SectionTitle from "../../shared/SectionTitle";
import DashCard from "../../components/DashCard";
import { dashCrad } from "../../data/dashCrad";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.title}>
          <SectionTitle name="Dashboard" />
        </div>
        <div className={styles.dashboard_card}>
          {dashCrad.map((it) => {
            return (
              <DashCard
                key={it.id}
                icon={it.icon}
                name={it.name}
                number={it.number}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
