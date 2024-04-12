import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="nav-box">
        <div className="box">
          <div className="nav-list">
            <a>회사 소개</a>
          </div>
          <div className="nav-sublist">
            <div>
              <a>회사 개요</a>
            </div>
            <div>
              <a>주요 연혁</a>
            </div>
            <div>
              <a>기구 조직도</a>
            </div>
            <div>
              <a>업무 영역</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a>사업 분야</a>
          </div>
          <div className="nav-sublist">
            <div>
              <a>사업 및 개발 방향</a>
            </div>
            <div>
              <a>모니터링 개요</a>
            </div>
            <div>
              <a>저감 시스템 개발</a>
            </div>
            <div>
              <a>알고리즘 개발</a>
            </div>
            <div>
              <a>연구 개발 및 설치</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a>장비 정보</a>
          </div>
          <div className="nav-sublist">
            <div>
              <a>소개 / 기능</a>
            </div>
            <div>
              <a>프로세스 / 동작순서</a>
            </div>
            <div>
              <a>LED 전광판</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a>협력 업체</a>
          </div>
          <div className="nav-sublist">
            <div>
              <a>주요 협력 업체</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideNav;
