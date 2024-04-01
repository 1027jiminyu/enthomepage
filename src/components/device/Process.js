import React from "react";

const Process = () => {
  return (
    <div>
      <div className="device-content-box">
        <div className="mini-line" />
        <div className="mini-text">프로세스 / 동작 순서</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="process-img">
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
        <div className="process-text">장비 프로세스</div>
        <div className="process-img-box">
          <div className="arrow1">
            <img src="/images/device_img/device_process/arrow1.png" />
          </div>
          <div className="equipment">
            <img src="/images/device_img/device_process/equipment.jpg" />
          </div>
          <div className="farm">
            <img src="/images/device_img/device_process/farm.png" />
          </div>
          <div className="gateway">
            <img src="/images/device_img/device_process/gateway.png" />
          </div>
          <div className="cloud">
            <img src="/images/device_img/device_process/cloud.jpg" />
          </div>
          <div className="arrow2">
            <img src="/images/device_img/device_process/arrow2.png" />
          </div>
          <div className="arrow3">
            <img src="/images/device_img/device_process/arrow3.png" />
          </div>
          <div className="moni">
            <img src="/images/device_img/device_process/moni.jpg" />
          </div>
          <div className="arrow4">
            <img src="/images/device_img/device_process/arrow2.png" />
          </div>
          <div className="manager">
            <img src="/images/device_img/device_process/manager.jpg" />
          </div>
        </div>
      </div>
      <div className="sequence-box">
        <div className="sequence-text">장비 동작 순서</div>
        <div>
          <div className="sequence1">
            <div>초기 부팅 구간</div>
            <div>Sensor Data 전송 구간</div>
            <div></div>
          </div>
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
          <div className="sequence3">
            <div>작동 점검</div>
            <div>내부 측정</div>
            <div>센서 세척</div>
            <div>휴식 시간</div>
          </div>
          <div className="sequence4">
            <img src="/images/device_img/sensor_arrow.png" />
          </div>
          <div className="sequence5">
            <div />
            <div>내부 측정</div>
            <div>센서 세척</div>
            <div>휴식 시간</div>
          </div>
          <div className="sequence-text d-flex justify-content-center">
            * 측정 기간은 사용자 또는 관리자가 원하는 시간으로 설정 가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
