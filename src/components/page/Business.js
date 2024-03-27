import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "../../style/business/business.css";

export default function Business() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="sub-menu-box"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/business_img/businessTitle.jpg)`,
        }}
      >
        <div className="sub-title">사업 분야</div>
        <div className="sub-content">
          축산 환경에 필요한 솔루션을 제시해주는 (주)이엔티를 소개합니다.
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
              navigate("/business/vision");
            }}
          >
            <a>사업 및 개발 방향</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/business/monitoring");
            }}
          >
            <a>모니터링 개요</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/business/reduction");
            }}
          >
            <a>저감 시스템 개발</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/business/algorithm");
            }}
          >
            <a>알고리즘 개발</a>
          </li>
          <li
            className={`aboutus-nav-btn `}
            onClick={() => {
              navigate("/business/research");
            }}
          >
            <a>연구 개발 및 설치</a>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
