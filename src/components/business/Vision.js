import React from "react";

const Vision = () => {
  return (
    <div className="container">
      <div className="business-content-box">
        <div className="mini-line" />
        <div className="mini-text">사업 및 개발 방향</div>
      </div>
      <div className="present-box">
        <div className="present-img" />
        <div className="present-title">현재 사업 영역</div>
        <div className="present-text">
          · IOT기반 축산 악취 모니터링 및 악취저감장치 제어
          <br />· 각종 냄새 관련센서 기반의 사업모델 개발
          <br />· 바이오커튼 제작 및 설치
        </div>
      </div>
      <div className="present-line" />
      <div className="vision-box">
        <div className="vision-img" />
        <div className="vision-text-box">
          <div className="vision-title">신규 기술 개발 방향</div>
          <div>
            <div className="vision-subtitle">1단계 축산 악취 저감 시설</div>
            <div className="vision-content">
              · 축산 악취 바이오 커튼
              <br />· 축산 악취 탈취탑 개발
            </div>
          </div>
          <div className="vision-div-line" />
          <div>
            <div className="vision-subtitle">2단계 악취 관련 시장 진출</div>
            <div className="vision-content">
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
    </div>
  );
};

export default Vision;
