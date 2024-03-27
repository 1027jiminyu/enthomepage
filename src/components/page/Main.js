import React, { useEffect } from "react";
import "../../style/main/main.css";
import { animated } from "@react-spring/web";
import MainSwiper from "../MainSwiper";

const Main = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="mainBox">
      <MainSwiper />
    </div>
  );
};

export default Main;
