import React, { useState } from "react";

const AccordionMenu = ({ movePage }) => {
  const menuItems = [
    { title: "회사 소개", isOpen: true },
    { title: "사업 분야", isOpen: false },
    { title: "장비 소개", isOpen: false },
    { title: "협력 업체", isOpen: false },
  ];

  const [menuState, setMenuState] = useState(menuItems);

  const toggleMenu = (index) => {
    const updatedMenuState = menuState.map((item, i) =>
      i === index
        ? { ...item, isOpen: !item.isOpen }
        : { ...item, isOpen: false }
    );
    setMenuState(updatedMenuState);
  };

  return (
    <div className="mobile-nav-box">
      {menuState.map((menuItem, index) => (
        <div key={index} className="mobile-menu-box">
          <div className="mobile-nav-list" onClick={() => toggleMenu(index)}>
            {menuItem.title}
          </div>
          {menuItem.isOpen && (
            <div className="mobile-nav-sublist">
              {menuItem.title === "회사 소개" && (
                <>
                  <div className="active-line" />
                  <div>
                    <div onClick={() => movePage("/about-us/overview")}>
                      회사 개요
                    </div>
                    <div onClick={() => movePage("/about-us/history")}>
                      주요 연혁
                    </div>
                    <div onClick={() => movePage("/about-us/organization")}>
                      기구 조직도
                    </div>
                    <div onClick={() => movePage("/about-us/domain")}>
                      업무 영역
                    </div>
                  </div>
                </>
              )}
              {menuItem.title === "사업 분야" && (
                <>
                  <div className="active-line" />
                  <div>
                    <div onClick={() => movePage("/business/vision")}>
                      사업 및 개발 방향
                    </div>
                    <div onClick={() => movePage("/business/monitoring")}>
                      모니터링 개요
                    </div>
                    <div onClick={() => movePage("/business/reduction")}>
                      저감 시스템 개발
                    </div>
                    <div onClick={() => movePage("/business/algorithm")}>
                      알고리즘 개발
                    </div>
                    <div onClick={() => movePage("/business/research")}>
                      연구 개발 및 설치
                    </div>
                  </div>
                </>
              )}
              {menuItem.title === "장비 소개" && (
                <>
                  <div className="active-line" />
                  <div>
                    <div onClick={() => movePage("/device/function")}>
                      소개 / 기능
                    </div>
                    <div onClick={() => movePage("/device/process")}>
                      프로세스 / 동작순서
                    </div>
                    <div onClick={() => movePage("/device/led")}>
                      LED 전광판
                    </div>
                  </div>
                </>
              )}
              {menuItem.title === "협력 업체" && (
                <>
                  <div className="active-line" />
                  <div>
                    <div onClick={() => movePage("/contractor")}>
                      주요 협력 업체
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="overlay-bg" />
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
