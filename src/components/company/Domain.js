import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

export default function Work() {
  const is767 = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    const domains = gsap.utils.toArray(".domain");
    domains.forEach((domain) => {
      const anim = gsap.to(domain, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.2,
      });

      ScrollTrigger.create({
        trigger: domain,
        start: "center 90%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  return (
    <div>
      <div className="aboutus-content-box">
        <div className="mini-line" />
        <div className="mini-text">업무 영역</div>
      </div>
      <div className="domain-box">
        <div className="domain-text domain">
          <div className="domain-title">
            축산악취 물질 측정 및 모니터링
            <br />
            데이터 팜의 최고 파트너!
          </div>
          <div className="domain-subtitle">
            축산 환경이 필요로 하는 든든한 파트너 (주) 이엔티를 소개합니다.
          </div>
        </div>
        <div className="domain-content domain">
          <div className="domain-seperate">
            <div className="domain-img-box" style={{ paddingBottom: "10px" }}>
              <img src="/images/aboutus_img/icon1.png" />
            </div>
            <div className="domain-text-box">
              <div className="domain-box-title">SOFTWEAR</div>
              <div className="domain-box-content">
                PC 및 모바일 디바이스 앱, 축산 냄새 물질
                <br />
                측정 장비 클라우드 관제시스템
              </div>
            </div>
          </div>
          <div
            className={`domain-seperate ${is767 ? "" : "seperate-second-box"}`}
          >
            <div className="domain-img-box">
              <img src="/images/aboutus_img/icon2.png" />
            </div>
            <div className="domain-text-box">
              <div className="domain-box-title">사용자 중심 UX ·UI</div>
              <div className="domain-box-content">
                사용자를 중심으로 생각하는 UX/UI 개발,
                <br />
                안정적 데이터 설계,빅 데이터구축,
                <br />딥 러닝을 통한 예측 모델 개발
              </div>
            </div>
          </div>
          <div className="domain-seperate">
            <div className="domain-img-box">
              <img src="/images/aboutus_img/icon3.png" />
            </div>
            <div className="domain-text-box">
              <div className="domain-box-title">
                IOT 기반 측정 장치 및 H/W 개발
              </div>
              <div className="domain-box-content">
                전국 축산 냄새 및 환경 행복 실현을 위해
                <br />
                IoT, 빅 데이터 등 지능 정보화 기술을 통한
                <br />
                축산 농가 환경 정보 제공과 환경에
                <br />
                고품질 대기 환경 서비스를 제공
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
