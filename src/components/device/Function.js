import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DeviceFunc = () => {
  useEffect(() => {
    const ups = gsap.utils.toArray(".up");
    const upslow = gsap.utils.toArray(".up-slow");
    const upslow2 = gsap.utils.toArray(".up-slow2");

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
        start: "top 55%",
        onEnter: () => anim.play(),
      });
    });

    upslow2.forEach((upslow2) => {
      const anim = gsap.to(upslow2, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.8,
      });

      ScrollTrigger.create({
        trigger: upslow2,
        start: "top 75%",
        onEnter: () => anim.play(),
      });
    });
  }, []);
  return (
    <div>
      <div className="device-content-box">
        <div className="mini-line" />
        <div className="mini-text">소개 / 기능</div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          <div className="function-img up up-animation">
            <img src="/images/device_img/quotationleft.png" />
            <div>
              축산악취 모니터링 서비스는{" "}
              <span style={{ fontWeight: "bold" }}>
                국립축산과학원, 한국생명공학연구원
              </span>
              과 함께
              <br />
              공동개발하였으며 각종 정보를 수집하며 악취 기여율을 구축하여
              <br />
              새로운 물질 센서 개발을 하였습니다.
            </div>
            <img src="/images/device_img/quotationright.png" />
          </div>
        </div>
        <div className="func-dev-box">
          <div className="device-introfunc up up-animation">장비 소개</div>
          <div className="func-dev-img">
            <div className="device_img up up-animation">
              <img src="/images/device_img/device.jpg" alt="장비 사진" />
            </div>
            <div className="device_value_img up-slow up-animation">
              <img src="/images/device_img/device_value.png" alt="장비 수치" />
            </div>
          </div>
        </div>
      </div>
      <div className="function-box">
        <div className="device-introfunc up up-animation">장비 기능</div>
        <div className="function-content d-flex flex-column align-items-center">
          <div
            className="function-text up-slow2 up-animation"
            style={{ marginTop: 0 }}
          >
            황화수소, 암모니아, 온도, 습도, 풍속, 풍습, 풍향 측정
          </div>
          <div className="function-text up-slow2 up-animation">
            유·무선 통신 제어
          </div>
          <div className="function-text up-slow2 up-animation">
            경계부지 전광판 활용한 악취 관리
          </div>
          <div className="function-text up-slow2 up-animation">
            통합관제 클라우드 관제 시스템
          </div>
          <div className="function-text up-slow2 up-animation">
            AI를 이용한 실시간 냄새 저감 시설 자동 제어
          </div>
          <div className="function-text up-slow2 up-animation">
            축산 냄새 물질 실시간 데이터 수집 및 분석
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFunc;
