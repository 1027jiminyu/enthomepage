import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Process = () => {
  useEffect(() => {
    const ups = gsap.utils.toArray(".up");
    const upslow = gsap.utils.toArray(".up-slow");

    ups.forEach((up) => {
      const anim = gsap.to(up, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1,
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
        start: "top 50%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  useEffect(() => {
    const appearProcessElements = gsap.utils.toArray(".appearProcess");

    appearProcessElements.map((appearProcess) => {
      const anim = gsap.to(appearProcess, {
        opacity: 1,
        y: 0,
        duration: 1.9,
        stagger: 0.2,
      });

      ScrollTrigger.create({
        trigger: appearProcess,
        start: "center 50%",
        animation: anim,
        toggleActions: "play none none none", // 스크롤 트리거 동작 설정
      });
    });

    const fastAppearElements = gsap.utils.toArray(".fastAppear");

    fastAppearElements.map((fastAppear) => {
      const anim = gsap.to(fastAppear, {
        opacity: 1,
        y: 0,
        duration: 1.3,
        stagger: 0.2,
      });

      ScrollTrigger.create({
        trigger: fastAppear,
        start: "center 85%",
        animation: anim,
        toggleActions: "play none none none", // 스크롤 트리거 동작 설정
      });
    });
  }, []);

  return (
    <div>
      <div className="device-content-box">
        <div className="mini-line" />
        <div className="mini-text">프로세스 / 동작순서</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="process-img up up-animation">
          <img src="/images/device_img/quotationleft.png" />
          <div>
            축산악취 모니터링 서비스는 악취 부분의 새로운 물질 센서 개발과 함께
            <br />
            측정장비 적용 등으로 축산악취 분야의 선두기업이 되기 위해
            <br />
            보다 차별화된 전문 서비스를 제공하고 있습니다.
          </div>
          <img src="/images/device_img/quotationright.png" />
        </div>
      </div>
      <div className="process-box">
        <div className="process-text up up-animation">장비 프로세스</div>
        <div className="process-img-box">
          <img
            className="equipment fastAppear"
            src="/images/device_img/device_process/equipment.jpg"
          />
          <div className="appearProcess">
            <img
              className="arrow1"
              src="/images/device_img/device_process/arrow1.png"
            />
            <img
              className="farm"
              src="/images/device_img/device_process/farm.png"
            />
          </div>
          <img
            className="gateway appearProcess"
            src="/images/device_img/device_process/gateway.png"
          />
          <img
            className="cloud appearProcess"
            src="/images/device_img/device_process/cloud.jpg"
          />
          <img
            className="arrow2 appearProcess"
            src="/images/device_img/device_process/arrow2.png"
          />
          <img
            className="arrow3 appearProcess"
            src="/images/device_img/device_process/arrow3.png"
          />
          <img
            className="moni appearProcess"
            src="/images/device_img/device_process/moni.jpg"
          />
          <img
            className="arrow4 appearProcess"
            src="/images/device_img/device_process/arrow2.png"
          />
          <img
            className="manager appearProcess"
            src="/images/device_img/device_process/manager.jpg"
          />

          {/* <div className="equipment fastAppear">
            <img src="/images/device_img/device_process/equipment.jpg" />
          </div>
          <div className="appearProcess">
            <div className="arrow1">
              <img src="/images/device_img/device_process/arrow1.png" />
            </div>
            <div className="farm">
              <img src="/images/device_img/device_process/farm.png" />
            </div>
          </div>
          <div className="gateway appearProcess">
            <img src="/images/device_img/device_process/gateway.png" />
          </div>
          <div className="cloud appearProcess">
            <img src="/images/device_img/device_process/cloud.jpg" />
          </div>
          <div className="arrow2 appearProcess">
            <img src="/images/device_img/device_process/arrow2.png" />
          </div>
          <div className="arrow3 appearProcess">
            <img src="/images/device_img/device_process/arrow3.png" />
          </div>
          <div className="moni appearProcess">
            <img src="/images/device_img/device_process/moni.jpg" />
          </div>
          <div className="arrow4 appearProcess">
            <img src="/images/device_img/device_process/arrow2.png" />
          </div>
          <div className="manager appearProcess">
            <img src="/images/device_img/device_process/manager.jpg" />
          </div> */}
        </div>
      </div>
      <div className="sequence-box">
        <div className="sequence-text up up-animation">장비 동작순서</div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sequence1 up up-animation">
            <div>초기 부팅 구간</div>
            <div>Sensor Data 전송 구간</div>
            <div></div>
          </div>
          <div className="up up-animation">
            <div className="sequence2">
              <div>4MIN</div>
              <div>시간설정(MIN)</div>
              <div>시간설정(MIN)</div>
              <div>시간설정(MIN)</div>
            </div>
            <div className="sequence6">
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
            </div>
          </div>
          <div className="sequence3 up up-animation">
            <div>작동 점검</div>
            <div>내부 측정</div>
            <div>센서 세척</div>
            <div>휴식 시간</div>
          </div>
          <div className="sequence4 up up-animation">
            <img src="/images/device_img/sensor_arrow.png" />
          </div>
          <div className="sequence5 up up-animation">
            <div />
            <div>내부 측정</div>
            <div>센서 세척</div>
            <div>휴식 시간</div>
          </div>
          <div className="sequence-bottom-text d-flex justify-content-center up up-animation">
            * 측정 기간은 사용자 또는 관리자가 원하는 시간으로 설정 가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
