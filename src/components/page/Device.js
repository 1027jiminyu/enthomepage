import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "../../style/device/device.css";

const Product = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="sub-menu-box"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/device_img/deviceTitle.jpg)`,
        }}
      >
        <div className="sub-title">장비 정보</div>
        <div className="sub-content">
          축산업과 함께하는 (주)이엔티를 소개합니다.
        </div>
      </div>
      <div
        className="aboutus-mini-nav"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="aboutus-nav-box">
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/device/function");
            }}
          >
            <a>소개 / 기능</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/device/process");
            }}
          >
            <a>프로세스 / 동작순서</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/device/led");
            }}
          >
            <a>LED 전광판</a>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
