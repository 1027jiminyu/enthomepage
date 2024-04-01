import React from "react";

const DeviceFunc = () => {
  return (
    <div>
      <div className="device-content-box">
        <div className="mini-line" />
        <div className="mini-text">소개 / 기능</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="function-img">
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
        <div className="device-introfunc">장비 소개</div>
        <div className="func-dev-text">
          <div className="device_img">
            <img src="/images/device_img/device.jpg" alt="장비 사진" />
          </div>
          <div className="device_value_img">
            <img src="/images/device_img/device_value.png" alt="장비 수치" />
          </div>
        </div>
      </div>
      {/* <div className="func_div-line" /> */}
      <div className="function-box">
        <div className="device-introfunc">장비 기능</div>
        <div className="function-content">
          <div className="function-text" style={{ marginTop: 0 }}>
            황화수소, 암모니아, 온도,습도, 풍속, 풍습, 풍향 측정
          </div>
          <div className="function-text">유·무선 통신 제어</div>
          <div className="function-text">경계부지 전광판 활용한 악취 관리</div>
          <div className="function-text">통합관제 클라우드 관제 시스템</div>
          <div className="function-text">
            AI를 이용한 실시간 냄새 저감 시설 자동 제어
          </div>
          <div className="function-text">
            축산 냄새 물질 실시간 데이터 수집 및 분석
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFunc;
