import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const Vision = () => {
  const is1467 = useMediaQuery({ maxWidth: 1467 });
  const verticalLineRef = useRef(null);

  useEffect(() => {
    // GSAP에 ScrollTrigger 플러그인을 등록
    gsap.registerPlugin(ScrollTrigger);

    const verticalLine = verticalLineRef.current;

    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: verticalLine,
        start: "center 80%",
        onEnter: () => tl.play(), // 스크롤 위치에 따라 애니메이션을 재생
      },
    });
    // if (is1467) {
    // tl.to(verticalLine, { width: "80vw", opacity: "1" }); // 애니메이션 정의
    // } else {
    tl.to(verticalLine, { width: "1200px", opacity: "1" }); // 애니메이션 정의
    // }

    // unmount시 애니메이션을 제거하여 메모리 누수 방지
    return () => {
      tl.kill(); // 애니메이션 취소
    };
  }, []);

  useEffect(() => {
    const ups = gsap.utils.toArray(".up");
    const upfast = gsap.utils.toArray(".up-fast");
    const upslow = gsap.utils.toArray(".up-slow");
    const uptoslow = gsap.utils.toArray(".up-to-slow");

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

    upfast.forEach((upfast) => {
      const anim = gsap.to(upfast, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.2,
      });

      ScrollTrigger.create({
        trigger: upfast,
        start: "top 89%",
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

    uptoslow.forEach((uptoslow) => {
      const anim = gsap.to(uptoslow, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 2,
      });

      ScrollTrigger.create({
        trigger: uptoslow,
        start: "top 70%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="business-content-box">
        <div className="business-mini-line" />
        <div className="business-mini-text">사업 및 개발 방향</div>
      </div>
      <div className="present-box">
        <div className="present-img" ref={verticalLineRef} />
        {/* <div className="present-text-box"> */}
        <div className="present-title up">현재 사업 영역</div>
        <div className="present-text up-slow">
          · IOT기반 축산 악취 모니터링 및 악취저감장치 제어
          <br />· 각종 냄새 관련센서 기반의 사업모델 개발
          <br />· 바이오커튼 제작 및 설치
        </div>
        {/* </div> */}
      </div>
      <div className="present-line" />
      <div className="vision-box">
        {/* <div className="vision-img up-fast" /> */}
        <img
          className="vision-img up-fast"
          src="/images/business_img/vision.jpg"
        />
        <div className="vision-text-box">
          <div className="vision-title up-slow">신규 기술 개발 방향</div>
          <div>
            <div className="vision-subtitle up-slow">
              1단계 축산 악취 저감 시설
            </div>
            <div className="vision-content up-slow">
              · 축산 악취 바이오 커튼
              <br />· 축산 악취 탈취탑 개발
            </div>
          </div>
          <div className="vision-div-line" />
          <div>
            <div className="vision-subtitle up-slow">
              2단계 악취 관련 시장 진출
            </div>
            <div className="vision-content up-to-slow">
              <div className="vision-content1">
                · 다양한 센서의 조합 및 휴대성을 확보하여 산업안전
                <br />
                모니터링 장비 개발 (하수 시설 작업사고 및 산업현장 사고 방지)
              </div>
              <div className="vision-content2">
                · 각종 악취 관련 산업시설 시장 진출
                <br />
                (하수 종말처리장, 슬러지 처리장 등)
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ background: "red", width: "150px", height: "150px" }} /> */}
    </div>
  );
};

export default Vision;
