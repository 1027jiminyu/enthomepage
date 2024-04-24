import React from "react";
import "../../style/headerFooter/headerFooter.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const theSmaller = useMediaQuery({ maxWidth: 525 });

  const privacy = () => {
    // setIsActive(true);
    window.open("/privacy_policy.html", "_blank");
  };

  const email = () => {
    // setIsActive(true);
    window.open("/email.html", "_blank");
  };

  return (
    <div className="footer-box">
      {theSmaller ? (
        <div className="footer-content" style={{ fontSize: "3vw" }}>
          <div>
            <div>(주) 이엔티 | 사업자등록번호 : 794-86-01807</div>
            <div>
              [54882] 전북특별자치도 전주시 덕진구 상리 1길 34
              <br />
              희망전북창업보육센터 1동 101호
            </div>
            <div>
              대표전화 : 063-226-3331
              <br />
              팩스 : 063-226-3332
              <br />
              E-mail : ent2020@daum.net
            </div>
          </div>
          <hr className="footer-line" />
          <div>
            <div style={{ fontWeight: "bold" }}>
              COPYRIGHTⓒ 2024 ENT Co., Ltd. ALL RIGHTS RESERVED.
            </div>
            <div className="footer-end">
              <div style={{ color: "#fff" }} onClick={privacy}>
                개인정보처리방침
              </div>
              <div style={{ marginLeft: 20 }} onClick={email}>
                이메일무단수집거부
              </div>
            </div>
          </div>
        </div>
      ) : isMobile ? (
        <div className="footer-content" style={{ fontSize: "13px" }}>
          <div>
            <div>(주) 이엔티 | 사업자등록번호 : 794-86-01807</div>
            <div>
              [54882] 전북특별자치도 전주시 덕진구 상리 1길 34
              희망전북창업보육센터 1동 101호
            </div>
            <div>
              대표전화 : 063-226-3331 | 팩스 : 063-226-3332 | E-mail :
              ent2020@daum.net
            </div>
          </div>
          <hr className="footer-line" />
          <div>
            <div style={{ fontWeight: "bold" }}>
              COPYRIGHTⓒ 2024 ENT Co., Ltd. ALL RIGHTS RESERVED.
            </div>
            <div className="footer-end">
              <div style={{ color: "#fff" }} onClick={privacy}>
                개인정보처리방침
              </div>
              <div style={{ marginLeft: 20 }} onClick={email}>
                이메일무단수집거부
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-content">
          <div>
            <div>(주) 이엔티 | 사업자등록번호 : 794-86-01807</div>
            <div>
              [54882] 전북특별자치도 전주시 덕진구 상리 1길 34
              희망전북창업보육센터 1동 101호
            </div>
            <div>
              대표전화 : 063-226-3331 | 팩스 : 063-226-3332 | E-mail :
              ent2020@daum.net
            </div>
          </div>
          <hr className="footer-line" />
          <div className="footer-bottom">
            <div style={{ fontWeight: "bold" }}>
              COPYRIGHTⓒ 2024 ENT Co., Ltd. ALL RIGHTS RESERVED.
            </div>
            <div className="footer-end">
              <div style={{ color: "#fff" }} onClick={privacy}>
                개인정보처리방침
              </div>
              <div style={{ marginLeft: 20 }} onClick={email}>
                이메일무단수집거부
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
