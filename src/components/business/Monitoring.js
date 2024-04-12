import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Monitoring = () => {
  const verticalLineRef = useRef(null);

  useEffect(() => {
    // GSAP에 ScrollTrigger 플러그인을 등록
    gsap.registerPlugin(ScrollTrigger);

    const verticalLine = verticalLineRef.current;

    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: verticalLine,
        start: "center 85%",
        onEnter: () => tl.play(), // 스크롤 위치에 따라 애니메이션을 재생
      },
    });

    tl.to(verticalLine, { width: "1200px", opacity: "1" }); // 애니메이션 정의

    // unmount시 애니메이션을 제거하여 메모리 누수 방지
    return () => {
      tl.kill(); // 애니메이션 취소
    };
  }, []);

  useEffect(() => {
    const ups = gsap.utils.toArray(".up");
    const upslow = gsap.utils.toArray(".up-slow");

    ups.forEach((up) => {
      const anim = gsap.to(up, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.2,
      });

      ScrollTrigger.create({
        trigger: up,
        start: "center 85%",
        onEnter: () => anim.play(),
      });
    });

    upslow.forEach((upslow) => {
      const anim = gsap.to(upslow, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.8,
      });

      ScrollTrigger.create({
        trigger: upslow,
        start: "top 70%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="business-content-box">
          <div className="mini-line" />
          <div className="mini-text">모니터링 개요</div>
        </div>
        <div className="monitoring-box">
          <div className="monitoring-img" ref={verticalLineRef} />
          {/* <div className="monitoring-text-box up"> */}
          <div className="monitoring-title up">
            축산 냄새 원인 물질
            <br />
            측정 모니터링 개요
          </div>
          <div className="monitoring-text up-slow">· 현재 사업영역 및 기술</div>
          {/* </div> */}
        </div>
        <div className="monitoring1-box">
          <div className="up up-animation">
            <img src="/images/business_img/monitoring1.jpg" />
          </div>
          <div className="cause-matter">
            <div className="cause-matter-left ">
              <div className="up up-animation">
                축산 냄새 원인 물질
                <br />
                측정 항목
              </div>
            </div>
            <div className="cause-matter-right">
              <div className="up up-animation">
                Ver-1 : NH3, H2S, 온도, 습도
                <br />
                Ver-2 : NH3, H2S, 온도, 습도, 풍향, 풍속
              </div>
            </div>
          </div>
        </div>
        <div className="div-line" />
        <div className="monitoring2-box up up-animation">
          <img
            src="/images/business_img/monitoring2.png"
            style={{ width: "1200px" }}
          />
        </div>
      </div>
      <div className="monitoring3-box">
        <div className="up up-animation" style={{ marginBottom: "50px" }}>
          축산 냄새 원인 물질 측정 모니터링 개요(S/W)
        </div>
        <div className="monitoring-overview-box up-slow up-animation">
          <img src="/images/business_img/monitoring3.png" />
        </div>
      </div>
    </>
  );
};

export default Monitoring;
