import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Research = () => {
  const verticalLineRef = useRef(null);

  useEffect(() => {
    // GSAP에 ScrollTrigger 플러그인을 등록
    gsap.registerPlugin(ScrollTrigger);

    const verticalLine = verticalLineRef.current;

    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: verticalLine,
        start: "center 85%",
        onEnter: () => tl.play(), // 스크롤 위치에 따라 애니메이션을 재생
      },
    });

    tl.to(verticalLine, { width: "1200px", opacity: "1" }); // 애니메이션 정의

    // unmount시 애니메이션을 제거하여 메모리 누수 방지
    return () => {
      tl.kill(); // 애니메이션 취소
    };
  }, []);

  useEffect(() => {
    const ups = gsap.utils.toArray(".up");
    const upslow = gsap.utils.toArray(".up-slow");
    const uptoslow = gsap.utils.toArray(".up-to-slow");

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

    upslow.forEach((upslow) => {
      const anim = gsap.to(upslow, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 1.8,
      });

      ScrollTrigger.create({
        trigger: upslow,
        start: "top 75%",
        onEnter: () => anim.play(),
      });
    });

    uptoslow.forEach((uptoslow) => {
      const anim = gsap.to(uptoslow, {
        y: -100,
        paused: true,
        opacity: 1,
        duration: 2,
      });

      ScrollTrigger.create({
        trigger: uptoslow,
        start: "top 50%",
        onEnter: () => anim.play(),
      });
    });
  }, []);

  // // Ref for each image
  // const imgRefs = useRef([]);

  // // Function to handle mouse enter event
  // const handleMouseEnter = (index) => {
  //   gsap.to(imgRefs.current[index], {
  //     scale: 1.1,
  //     duration: 0.3,
  //   });
  // };

  // // Function to handle mouse leave event
  // const handleMouseLeave = (index) => {
  //   gsap.to(imgRefs.current[index], {
  //     scale: 1,
  //     duration: 0.3,
  //   });
  // };

  const [hoveredIndex, setHoveredIndex] = useState(null); // 호버된 이미지의 인덱스를 저장하는 상태

  // 호버된 이미지의 인덱스를 설정하는 함수
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // 호버에서 벗어난 경우 인덱스를 리셋하는 함수
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="business-content-box">
        <div className="mini-line" />
        <div className="mini-text">연구 개발 및 설치</div>
      </div>
      <div className="research-box">
        <div className="research-img" ref={verticalLineRef} />
        {/* <div className="up up-animation"> */}
        <div className="research-title up">
          연구 개발 및 설치 자료
          <br />
          <span style={{ fontSize: "48px" }}>(양돈, 낙농, 양계, 오리)</span>
        </div>
        <div className="research-text up-slow">
          · 양돈, 낙농, 양계, 오리 등 농가 방문 사례
        </div>
        {/* </div> */}
      </div>
      <div className="research2">
        <div className="photo-text up-to-slow">양돈, 낙농 사례</div>
        <div className="photo-box up up-animation">
          <div className="research-photo" style={{ marginBottom: "12px" }}>
            {/* <img src="/images/business_img/farm/1.jpg" />
            <img src="/images/business_img/farm/2.jpg" />
            <img src="/images/business_img/farm/3.jpg" /> */}
            {[1, 2, 3].map((index) => (
              <div className="photo-img">
                <img
                  key={index}
                  src={`/images/business_img/farm/${index}.jpg`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "transform 0.5s", // 변환에 대한 transition 효과
                    marginRight: index === 3 ? 0 : "13px",
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)", // 호버 시 이미지 크기 조절
                  }}
                />
              </div>
            ))}
          </div>
          <div className="research-photo">
            {/* <img src="/images/business_img/farm/4.jpg" />
            <img src="/images/business_img/farm/5.jpg" />
            <img src="/images/business_img/farm/6.jpg" />
            <img
              src="/images/business_img/farm/7.jpg"
              style={{ marginRight: 0 }}
            /> */}
            {[4, 5, 6, 7].map((index) => (
              <div className="photo-img">
                <img
                  key={index}
                  src={`/images/business_img/farm/${index}.jpg`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "transform 0.5s", // 변환에 대한 transition 효과
                    marginRight: index === 7 ? 0 : "13px", // 마지막 이미지의 오른쪽 여백
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)", // 호버 시 이미지 크기 조절
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="div-line" />
      <div className="research3">
        <div className="photo-text up-slow">양계, 오리 사례</div>
        <div className="photo-box up-to-slow up-animation">
          <div className="research-photo" style={{ marginBottom: "12px" }}>
            {/* <img src="/images/business_img/farm/8.jpg" />
            <img src="/images/business_img/farm/9.jpg" />
            <img src="/images/business_img/farm/10.jpg" />
            <img
              src="/images/business_img/farm/11.jpg"
              style={{ marginRight: 0 }}
            /> */}
            {[8, 9, 10, 11].map((index) => (
              <div className="photo-img">
                <img
                  key={index}
                  src={`/images/business_img/farm/${index}.jpg`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "transform 0.5s", // 변환에 대한 transition 효과
                    marginRight: index === 11 ? 0 : "13px", // 마지막 이미지의 오른쪽 여백
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)", // 호버 시 이미지 크기 조절
                  }}
                />
              </div>
            ))}
          </div>
          <div className="research-photo">
            {/* <img src="/images/business_img/farm/12.jpg" />
            <img src="/images/business_img/farm/13.jpg" />
            <img src="/images/business_img/farm/14.jpg" />
            <img
              src="/images/business_img/farm/15.jpg"
              style={{ marginRight: 0 }}
            /> */}

            {[12, 13, 14, 15].map((index) => (
              <div className="photo-img">
                <img
                  key={index}
                  src={`/images/business_img/farm/${index}.jpg`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: "transform 0.5s", // 변환에 대한 transition 효과
                    marginRight: index === 15 ? 0 : "13px", // 마지막 이미지의 오른쪽 여백
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)", // 호버 시 이미지 크기 조절
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
