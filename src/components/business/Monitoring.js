import React from "react";

const Monitoring = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="business-content-box">
          <div className="mini-line" />
          <div className="mini-text">모니터링 개요</div>
        </div>
        <div className="monitoring-title-box">
          <div className="monitoring-img" />
          <div className="monitoring-title">
            축산 냄새 원인 물질
            <br />
            측정 모니터링 개요
          </div>
          <div className="monitoring-subtitle">· 현재 사업영역 및 기술</div>
        </div>
        <div className="monitoring1-box">
          <div>
            <img src="/images/business_img/monitoring1.jpg" />
          </div>
          <div className="cause-matter">
            <div className="cause-matter-left">
              축산 냄새 원인 물질
              <br />
              측정 항목
            </div>
            <div className="cause-matter-right">
              Ver-1 : NH3, H2S, 온도, 습도
              <br />
              Ver-2 : NH3, H2S, 온도, 습도, 풍향, 풍속
            </div>
          </div>
        </div>
        <div className="div-line" />
        <div className="monitoring2-box">
          <img
            src="/images/business_img/monitoring2.png"
            style={{ width: "1200px" }}
          />
        </div>
      </div>
      <div className="monitoring3-box">
        <div>축산 냄새 원인 물질 측정 모니터링 개요(S/W)</div>
        <img src="/images/business_img/monitoring3.png" />
      </div>
    </>
  );
};

export default Monitoring;
