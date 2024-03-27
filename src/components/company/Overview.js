import React from "react";
import { gsap } from "gsap";

export default function Overview() {
  function handleScrollOnce() {
    // 현재 스크롤 위치
    const scrollPosition = window.scrollY;

    // 특정 스크롤 위치에 도달했을 때 애니메이션 실행
    if (scrollPosition >= 300) {
      // 예: 500px 스크롤 시
      gsap.fromTo(
        ".left-box",
        { y: 300, opacity: 0 },
        { duration: 1, y: 0, opacity: 1 }
      );

      gsap.fromTo(
        ".right-box",
        { y: 350, opacity: 0 },
        { duration: 1.5, y: 0, opacity: 1 }
      );

      // 애니메이션이 실행되었으므로 요소를 보이도록 변경
      document.querySelectorAll(".left-box, .right-box").forEach((element) => {
        element.style.display = "flex";
      });

      // 스크롤 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScrollOnce);
    }
  }

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", handleScrollOnce);
  return (
    <div>
      <div className="aboutus-content-box">
        <div className="mini-line" />
        <div className="mini-text" style={{ fontSize: "45px" }}>
          About Company
        </div>
      </div>
      <div className="overview-content">
        <div className="left-box" style={{ display: "none" }}>
          <div>항상 새로운 시장을 개척해가는 ENT</div>
          <br />
          <p>
            (주)이엔티는 축산 환경이 필요로 하는
            <br />
            모든 서비스와 솔루션을 해결하고 편의와
            <br />
            효율성을 높이기 위해 도전, 열정, 변화의 가치를
            <br />
            바탕으로 실천하고 있습니다.
            <br />
            <br />
            이제는 든든한 사업 파트너로서,
            <br />
            축산업을 함께하는 동반자가 되고자 합니다.
            <br />
            항상 고객과 함께 발전하는 기업이 되겠습니다.
          </p>
        </div>
        <img
          className="right-box"
          src="/images/aboutus_img/aboutus_overview.jpg"
          alt=""
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}