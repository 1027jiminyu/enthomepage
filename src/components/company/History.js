import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  useEffect(() => {
    const years = gsap.utils.toArray(".year");
    years.forEach((year) => {
      const anim = gsap.to(year, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.2,
      });

      ScrollTrigger.create({
        trigger: year,
        start: "center 85%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  return (
    <div>
      <div className="aboutus-content-box">
        <div className="mini-line" />
        <div className="mini-text">주요 연혁</div>
      </div>
      <div className="history-box d-flex justify-content-center">
        <div className="history-left-box">
          <div className="year-title year" style={{ height: "200px" }}>
            2023
          </div>
          <div className="year-title year" style={{ height: "200px" }}>
            2022
          </div>
          <div className="year-title year" style={{ height: "580px" }}>
            2021
          </div>
          <div
            className="year-title year"
            style={{
              height: "630px",
              borderBottom: "2px solid #004294",
            }}
          >
            2020
          </div>
        </div>
        <div className="dividing-line" />
        <div className="history-right-box">
          <div className="year-content year" style={{ height: "200px" }}>
            <div>
              <div className="month-content">
                <div className="history-month">06</div>
                <div className="history-content">
                  전북 농생명 창업리그 기업 선정
                </div>
              </div>
            </div>
            <div className="faint-year">2023</div>
          </div>
          <div className="year-content year" style={{ height: "200px" }}>
            <div>
              <div className="month-content">
                <div className="history-month">12</div>
                <div className="history-content">
                  전북지방중소벤처기업청장 표장
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">04</div>
                <div className="history-content">
                  국립축산과학원
                  <br />- 실험 돈사 축산악취 물질 측정장비 설치
                </div>
              </div>
            </div>
            <div className="faint-year">2022</div>
          </div>
          <div className="year-content year" style={{ height: "580px" }}>
            <div>
              <div className="month-content">
                <div className="history-month">10</div>
                <div className="history-content">
                  이천시 분뇨 자원화센터 악취 모니터링 선정
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">06</div>
                <div className="history-content">
                  축산환경 관리원
                  <br />- ICT 기계장비 보급업체 인증 및 선정
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">05</div>
                <div className="history-content">
                  농촌진흥청 축산시설 현대화 기술개발
                  <br />- 축산시설 악취 냄새물질 측정장치 개발
                  <br />
                  기업 부설 연구소 설립
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">03</div>
                <div className="history-content">
                  2021년도 스마트팜 다부처 패키지 혁신기술개발
                  <br />- 현장 맞춤 지능형 축산(양돈, 양계) 냄새 제어 기술(
                  2021~2023)
                  <br />
                  농림축산식품부 (농림식품기술기획평가원)
                  <br />- 돈사 유형별 악취저감장치 연계 환기제어
                  <br />
                  시스템 개발 및 실증 연구과제(2021~2025)
                </div>
              </div>
            </div>
            <div className="faint-year">2021</div>
          </div>
          <div
            className="year-content year"
            style={{
              height: "630px",
              borderBottom: "2px solid #ededed",
            }}
          >
            <div>
              <div className="month-content">
                <div className="history-month">09</div>
                <div className="history-content">
                  농업기술센터(청양군,성주군,이천시,창원시)
                  <br />- 축산냄새 물질 측정장치 설치 및 관제
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">08</div>
                <div className="history-content">
                  농촌진흥청
                  <br /> - 축산농가 바이오커튼 설치사업 (실시간 축산냄새 측정
                  분야 단독 수행)
                  <br /> - 5개년 당해년도 20농가 선정 설치사업
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">08</div>
                <div className="history-content">
                  농촌진흥청 축산환경측정분야 기술이전
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">08</div>
                <div className="history-content">
                  국립축산과학원, 농협경제지주
                  <br />
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- IoT기반 실시간 축산
                  냄새물질 측정 및
                  <br />
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- 관제시스템 운영 시범사업
                  (20농가)
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">07</div>
                <div className="history-content">
                  국립축산과학원 축산악취 물질 측정장치 공동개발
                </div>
              </div>
              <div className="month-content">
                <div className="history-month">06</div>
                <div className="history-content">㈜이엔티 설립</div>
              </div>
            </div>
            <div className="faint-year">2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}
