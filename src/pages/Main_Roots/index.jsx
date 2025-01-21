import React from "react";
import Header from "../../helper/Header";
import Footer from "../../helper/footer";
import "./index.css";

const Main_Roots = ({ element }) => {
  return (
    <>
      <div>
        <Header />
        <div className="main_roots">
          <div>{element}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main_Roots;
