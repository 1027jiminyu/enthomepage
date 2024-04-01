import React, { useState, useEffect } from "react";
import "../../style/headerFooter/headerFooter.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-box ${isScrolled ? "scroll-on" : ""} ${
        isHovered ? "whiteBackground" : ""
      }`}
    >
      <div onClick={() => navigate("/")} className="headerLogo">
        {isHovered || isScrolled ? (
          <div className="menu-line">
            <img src="/images/logo_img/ent-logo.png" alt="이엔티" />
          </div>
        ) : (
          <div>
            <img src="/images/logo_img/ent-logo-clear.png" alt="이엔티" />
          </div>
        )}
      </div>
      <div
        className="main-menu"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="menu-box">
          <li
            className={`menu-list ${
              isHovered || isScrolled ? "hoverText" : ""
            } `}
          >
            <a onClick={() => navigate("/about-us")}>회사 소개</a>
            <ul
              className="menu-sub-list"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <li
                style={{ paddingTop: "10px" }}
                onClick={() => navigate("/about-us/overview")}
              >
                회사 개요
              </li>
              <li onClick={() => navigate("/about-us/history")}>주요 연혁</li>
              <li onClick={() => navigate("/about-us/organization")}>
                기구 조직도
              </li>
              <li onClick={() => navigate("/about-us/domain")}>업무 영역</li>
            </ul>
          </li>
        </ul>
        <ul className="menu-box">
          <li
            className={`menu-list ${
              isHovered || isScrolled ? "hoverText" : ""
            } `}
          >
            <a onClick={() => navigate("/business")}>사업 분야</a>
            <ul
              className="menu-sub-list"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <li
                style={{ paddingTop: "10px" }}
                onClick={() => {
                  navigate("/business/vision");
                }}
              >
                사업 및 개발 방향
              </li>
              <li
                onClick={() => {
                  navigate("/business/monitoring");
                }}
              >
                모니터링 개요
              </li>
              <li
                onClick={() => {
                  navigate("/business/reduction");
                }}
              >
                저감 시스템 개발
              </li>
              <li
                onClick={() => {
                  navigate("/business/algorithm");
                }}
              >
                알고리즘 개발
              </li>
              <li
                onClick={() => {
                  navigate("/business/research");
                }}
              >
                연구 개발 및 설치
              </li>
            </ul>
          </li>
        </ul>
        <ul className="menu-box">
          <li
            className={`menu-list ${
              isHovered || isScrolled ? "hoverText" : ""
            } `}
          >
            <a onClick={() => navigate("/device")}>장비 소개</a>
            <ul
              className="menu-sub-list"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <li
                style={{ paddingTop: "10px" }}
                onClick={() => {
                  navigate("/device/function");
                }}
              >
                소개 / 기능
              </li>
              <li
                onClick={() => {
                  navigate("/device/process");
                }}
              >
                프로세스 / 동작 순서
              </li>
              {/* <li
                onClick={() => {
                  navigate("/device/sequence");
                }}
              >
                동작 순서
              </li> */}
              <li
                onClick={() => {
                  navigate("/device/led");
                }}
              >
                LED 전광판
              </li>
            </ul>
          </li>
        </ul>
        <ul className="menu-box">
          <li
            className={`menu-list ${
              isHovered || isScrolled ? "hoverText" : ""
            } `}
          >
            <a onClick={() => navigate("/contractor")}>협력 업체</a>
            <ul
              className="menu-sub-list"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <li
                style={{ paddingTop: "10px" }}
                onClick={() => navigate("/contractor")}
              >
                주요 협력업체
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <MdOutlineMenu
          color={`${isHovered || isScrolled ? "#000" : "#fff"}`}
          size={35}
        />
      </div>
    </div>
  );
}

export default Header;
