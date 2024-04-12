import React from "react";
import { gsap } from "gsap";

export default function Organization() {
  const handleScrollOnce = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 300) {
      gsap.fromTo(
        ".organization-img",
        { y: 250, opacity: 0 },
        { duration: 1.5, y: 0, opacity: 1 }
      );
      document.querySelectorAll(".organization-img").forEach((element) => {
        element.style.visibility = "visible";
      });
      window.removeEventListener("scroll", handleScrollOnce);
    }
  };
  window.addEventListener("scroll", handleScrollOnce);

  return (
    <div className="aboutus-content-box">
      <div className="mini-line" />
      <div className="mini-text">기구 조직도</div>
      <img
        src="/images/aboutus_img/organization.jpg"
        alt="기구 조직도"
        style={{ visibility: "hidden", margin: "0 0 200px 0" }}
        className="organization-img"
      />
    </div>
  );
}
