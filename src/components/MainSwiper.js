import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style/main/main.css";

import {
  Parallax,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function MainSwiper() {
  const [isActive, setIsActive] = useState(false);

  // 마우스 오버 또는 클릭 이벤트 핸들러
  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    // setIsActive(true);
    window.open("http://inent2023.co.kr:5799/", "_blank");
  };

  // 마우스 아웃 이벤트 핸들러
  const handleMouseLeave = () => {
    setIsActive(false); // 마우스가 요소 밖으로 나가면 비활성화
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        slidesPerView={1}
        loop={true}
        // cssMode={true}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Autoplay, EffectFade, Navigation, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="slide-img slide-img1">
            <div className="slide-text">
              <div className="mainText">
                축산 냄새 물질 실시간
                <br />
                측정·관제·악취 저감
              </div>
              <div className="subText">ELECTRONIC · NOSE · TECHNOLOGY</div>
              <div
                className={`control-system-btn ${
                  isActive ? "control-system-btn-hover" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                관제 시스템&ensp; &gt;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-img slide-img2">
            <div className="slide-text">
              <div className="mainText">
                축산 냄새 물질 실시간
                <br />
                측정·관제·악취 저감
              </div>
              <div className="subText">ELECTRONIC · NOSE · TECHNOLOGY</div>
              <div
                className={`control-system-btn ${
                  isActive ? "control-system-btn-hover" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                관제 시스템&ensp; &gt;
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-img slide-img3">
            <div className="slide-text">
              <div className="mainText">
                축산 냄새 물질 실시간
                <br />
                측정·관제·악취 저감
              </div>
              <div className="subText">ELECTRONIC · NOSE · TECHNOLOGY</div>
              <div
                className={`control-system-btn ${
                  isActive ? "control-system-btn-hover" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                관제 시스템&ensp; &gt;
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
