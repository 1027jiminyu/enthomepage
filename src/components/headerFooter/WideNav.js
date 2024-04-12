import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WideNav = ({ setIsClicked }) => {
  const navigate = useNavigate();

  const movePage = (path) => {
    setIsClicked(false); // 모달 닫기
    navigate(path); // 원하는 경로로 이동
  };

  return (
    <div className="background">
      <div className="nav-box">
        <div className="box">
          <div className="nav-list">
            <a onClick={() => movePage("/about-us")}>회사 소개</a>
          </div>
          <div className="nav-sublist">
            <div onClick={() => movePage("/about-us/overview")}>
              <a>회사 개요</a>
            </div>
            <div onClick={() => movePage("/about-us/history")}>
              <a>주요 연혁</a>
            </div>
            <div onClick={() => movePage("/about-us/organization")}>
              <a>기구 조직도</a>
            </div>
            <div onClick={() => movePage("/about-us/domain")}>
              <a>업무 영역</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a onClick={() => movePage("/business")}>사업 분야</a>
          </div>
          <div className="nav-sublist">
            <div onClick={() => movePage("/business/vision")}>
              <a>사업 및 개발 방향</a>
            </div>
            <div onClick={() => movePage("/business/monitoring")}>
              <a>모니터링 개요</a>
            </div>
            <div onClick={() => movePage("/business/reduction")}>
              <a>저감 시스템 개발</a>
            </div>
            <div onClick={() => movePage("/business/algorithm")}>
              <a>알고리즘 개발</a>
            </div>
            <div onClick={() => movePage("/business/research")}>
              <a>연구 개발 및 설치</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a onClick={() => movePage("/device")}>장비 정보</a>
          </div>
          <div className="nav-sublist">
            <div onClick={() => movePage("/device/function")}>
              <a>소개 / 기능</a>
            </div>
            <div onClick={() => movePage("/device/process")}>
              <a>프로세스 / 동작순서</a>
            </div>
            <div onClick={() => movePage("/device/led")}>
              <a>LED 전광판</a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="nav-list">
            <a onClick={() => movePage("/contractor")}>협력 업체</a>
          </div>
          <div className="nav-sublist">
            <div onClick={() => movePage("/contractor")}>
              <a>주요 협력 업체</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideNav;
