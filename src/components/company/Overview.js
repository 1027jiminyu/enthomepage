import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

export default function Overview() {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  useEffect(() => {
    const overviews = gsap.utils.toArray(".overview");
    overviews.forEach((overview) => {
      const anim = gsap.to(overview, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.4,
        delay: 0,
      });

      ScrollTrigger.create({
        trigger: overview,
        start: "center 92%",
        onEnter: () => anim.play(),
      });
    });

    const overviews2 = gsap.utils.toArray(".overview2");
    overviews2.forEach((overview2) => {
      const anim = gsap.to(overview2, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.7,
        delay: 0,
      });

      ScrollTrigger.create({
        trigger: overview2,
        start: "center 99%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  return (
    <div>
      <div className="aboutus-content-box">
        <div className="aboutus-mini-line" />
        <div className="about-overview-mini-text">About Company</div>
      </div>
      <div className="overview-content">
        <div className="left-box overview">
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
          className="right-box overview2"
          src="/images/aboutus_img/aboutus_overview.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
