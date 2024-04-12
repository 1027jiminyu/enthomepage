import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Reduction = () => {
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
        <div className="mini-line" />
        <div className="mini-text">저감 시스템 개발</div>
      </div>
      <div className="reduction-box">
        <div className="reduction-img" ref={verticalLineRef} />
        {/* <div className="up up-animation"> */}
        <div className="reduction-title up">
          축산 악취 물질
          <br />
          저감 시스템 개발
        </div>
        <div className="reduction-text up-slow">
          <span style={{ fontSize: "20px" }}>· 1단계 사업 방향</span>
          <br />
          &ensp;&ensp;축산 바이오커튼 및 악취저감시설 개발
          <br />
          &ensp;&ensp;축적된 데이터를 기반으로 각기 다른 환경과 구조를 가진
          축산농가에 악취
          <br />
          &ensp;&ensp;데이터를 기반으로 컨설팅을 통한 악취 저감 솔루션 제공
        </div>
        {/* </div> */}
      </div>
      <div className="reduction2">
        <div className="reduction2-img">
          <div className="up up-animation">
            <img src="/images/business_img/reduction_process.png" />
          </div>
          <div className="up up-animation">
            <img src="/images/business_img/reduction_site.jpg" />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center up up-animation">
          <div className="tri-top" />
          <div className="tri-middle" />
          <div className="tri-bottom">
            축산 바이오커튼 및 악취 저감시설 개발
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reduction;
