import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LED = () => {
  useEffect(() => {
    const ups = gsap.utils.toArray(".up");

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
  }, []);

  return (
    <div>
      <div className="device-content-box">
        <div className="mini-line" />
        <div className="mini-text">LED 전광판</div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="led-img up up-animation">
          <img src="/images/device_img/quotationleft.png" />
          <div>
            축산악취 모니터링을 기반으로 구축된 데이터를 활용하여 기존 장비의
            <br />
            문제점을 보완하여 축산 악취 저감 시설을 개발하고 있으며
            <br />
            모든 축산농가들에게 우수한 기술을 제공합니다.
          </div>
          <img src="/images/device_img/quotationright.png" />
        </div>
        <div className="led1">
          <div className="led-title up up-animation">
            부지경계의 악취 심각도에 따른 LED 전광판
          </div>
          <div className="up up-animation">
            <img src="/images/device_img/led1.png" />
          </div>
        </div>
        <div className="led2">
          <div className="bad-box up up-animation">
            <div>
              <img src="/images/device_img/device_led/4.jpg" />
            </div>
            <div className="legend-text-box1">
              <div className="legend-title">나쁨</div>
              <div className="legned-content">
                매우 높은 악취 수준과 즉각적인 행동이 필요한
                <br />
                상태로 건강과 안전에 대한 심각한 우려가 있음.
              </div>
            </div>
          </div>
          <div className="normal-box up up-animation">
            <div className="legend-text-box2">
              <div className="legend-title">보통</div>
              <div className="legned-content">
                악취 수준이 높아져 건강이나 생활에 영향을 줄 수<br />
                있는 상태로 개선 조치를 고려해야함.
              </div>
            </div>
            <div>
              <img src="/images/device_img/device_led/3.jpg" />
            </div>
          </div>
          <div>
            <div className="good-box up up-animation">
              <div>
                <img src="/images/device_img/device_led/2.jpg" />
              </div>
              <div className="legend-text-box1">
                <div className="legend-title">좋음</div>
                <div className="legned-content">
                  악취 수준이 증가하고 있으나 아직 관리가 가능한
                  <br />
                  수준으로 주의깊게 모니터링할 필요가 있음.
                </div>
              </div>
            </div>
          </div>
          <div className="verygood-box up up-animation">
            <div className="legend-text-box2">
              <div className="legend-title">아주좋음</div>
              <div className="legned-content">
                악취 수준이 낮거나 감지되지 않아 일상적인 활동에
                <br />
                영향을 주지 않음.
              </div>
            </div>
            <div>
              <img src="/images/device_img/device_led/1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LED;
