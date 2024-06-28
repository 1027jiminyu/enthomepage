import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Algorithm = () => {
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
        start: "top 75%",
        onEnter: () => anim.play(),
      });
    });
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="business-content-box">
        <div className="business-mini-line" />
        <div className="business-mini-text">알고리즘 개발</div>
      </div>
      <div className="algorithm-box">
        <div className="algorithm-img" ref={verticalLineRef} />
        {/* <div className="up up-animation"> */}
        <div className="algorithm-title up">
          축산 악취 저감 장치
          <br />
          자율제어 알고리즘 개발
        </div>
        <div className="algorithm-text up-slow">
          · 알고리즘 개발(쌍방향 제어 시스템 개발)
        </div>
        {/* </div> */}
      </div>
      <div className="algorithm2">
        <div className="algorithm2-img up up-animation">
          <img src="/images/business_img/algorithm2.jpg" />
        </div>
        <div className="d-flex flex-column align-items-center up up-animation">
          <div className="tri-top" />
          <div className="tri-middle" />
          <div className="tri-bottom">
            ICT 기반 실시간 모니터링 및 악취저감장치 - 쌍방향 제어 시스템 개발
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
