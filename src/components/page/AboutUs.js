import React, { useState, useEffect } from "react";
import "../../style/aboutUs/aboutus.css";
import { useNavigate, Outlet } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="sub-menu-box">
        <div className="sub-title">회사 소개</div>
        <div className="sub-content">
          고객과 함께 발전하는 (주)이엔티를 소개합니다.
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
              navigate("/about-us/overview");
            }}
          >
            <a>회사 개요</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/about-us/history");
            }}
          >
            <a>주요 연혁</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/about-us/organization");
            }}
          >
            <a>기구 조직도</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/about-us/domain");
            }}
          >
            <a>업무 영역</a>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
