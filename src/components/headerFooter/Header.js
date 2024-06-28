import React, { useState, useEffect } from "react";
import "../../style/headerFooter/headerFooter.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import WideNav from "./WideNav";
import { useMediaQuery } from "react-responsive";

function Header() {
  const is991 = useMediaQuery({ maxWidth: 991 });
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 추적하는 상태 추가

  // 버튼 클릭 시 상태 변경 함수
  const hamburgerClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    if (is991) {
      setIsHovered(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-box ${isScrolled ? "scroll-on" : ""} ${
        isHovered && !is991 ? "whiteBackground" : ""
      }`}
    >
      <div onClick={() => navigate("/")} className="headerLogo">
        {isHovered || isScrolled ? (
          <div className="menu-line">
            <img src="/images/logo_img/ent-logo.png" alt="이엔티" />
          </div>
        ) : is991 ? (
          <div>
            <img src="/images/logo_img/ent-logo-clear.png" alt="이엔티" />
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
                style={{ paddingTop: "40px" }}
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
                style={{ paddingTop: "40px" }}
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
            <a onClick={() => navigate("/device")}>장비 정보</a>
            <ul
              className="menu-sub-list"
              style={{ display: isHovered ? "block" : "none" }}
            >
              <li
                style={{ paddingTop: "40px" }}
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
                프로세스 / 동작순서
              </li>
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
                style={{ paddingTop: "40px" }}
                onClick={() => navigate("/contractor")}
              >
                주요 협력업체
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={hamburgerClick}>
        {isClicked ? (
          <MdClose color="#fff" size={35} />
        ) : (
          <MdOutlineMenu
            color={`${
              isHovered || isScrolled ? "#000" : is991 ? "#fff" : "#fff"
            }`}
            size={35}
          />
        )}
      </div>
      {isClicked && <WideNav setIsClicked={setIsClicked} />}
    </div>
  );
}

export default Header;
