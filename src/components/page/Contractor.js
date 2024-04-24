import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/contractor/contractor.css";
import { useMediaQuery } from "react-responsive";

const Contractor = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 525 });
  return (
    <div>
      <div>
        <div
          className="sub-menu-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/contractor_img/contractorTitle.jpg)`,
          }}
        >
          <div className="sub-title">협력 업체</div>
          <div className="sub-content">
            축산 악취 관리 편의와 효율성을 제공하는 (주)이엔티를 소개합니다.
          </div>
        </div>
        <div
          className="aboutus-mini-nav"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul className="aboutus-nav-box">
            <li
              className={`aboutus-nav-btn `}
              onClick={() => {
                navigate("/contractor");
              }}
            >
              <a>주요 협력 업체</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contractor-content-box">
        <div className="mini-line" />
        <div className="mini-text">주요 협력 업체</div>
        <div>
          {isMobile ? (
            <table>
              <tbody>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.kribb.re.kr/kor/main/main.jsp"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        한국생명공학연구원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/kribb.png"
                        alt="한국생명공학연구원"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.kosfarm.re.kr/index.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        (재)스마트팜연구개발사업단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/kosfarm.png"
                        alt="스마트팜연구개발사업단"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.nias.go.kr/front/main.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        국립축산과학원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/nias.png"
                        alt="국립축산과학원"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.rda.go.kr/main/mainPage.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        농촌진흥청
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/rda.png"
                        alt="농촌진흥청"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="https://cals.snu.ac.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        서울대학교 농업생명과학대학
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/cals.png"
                        alt="서울대학교 농업생명과학대학"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="https://ranbiz.skku.edu/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        성균관대학교 산학협력단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/skku.png"
                        alt="성균관대학교 산학협력단"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.kunsan.ac.kr/sanhak/index.kunsan"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        국립군산대학교 산학협력단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/ksnu.png"
                        alt="국립군산대학교 산학협력단"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="http://www.nhabgroup.com/user/indexMain.do?siteId=nhabgroup"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        농협경제지주
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/nh.png"
                        alt="농협경제지주"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="https://www.lemi.or.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        축산환경관리원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/lemi.png"
                        alt="축산환경관리원"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="http://www.begas.co.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        (주)베가스
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/begas.png"
                        alt="베가스"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table>
              <tbody>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.kribb.re.kr/kor/main/main.jsp"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        한국생명공학연구원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/kribb.png"
                        alt="한국생명공학연구원"
                      />
                    </div>
                  </td>
                  <td className="logo-box">
                    <Link
                      to="https://www.kosfarm.re.kr/index.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        (재)스마트팜연구개발사업단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/kosfarm.png"
                        alt="스마트팜연구개발사업단"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.nias.go.kr/front/main.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        국립축산과학원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/nias.png"
                        alt="국립축산과학원"
                      />
                    </div>
                  </td>
                  <td className="logo-box">
                    <Link
                      to="https://www.rda.go.kr/main/mainPage.do"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        농촌진흥청
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/rda.png"
                        alt="농촌진흥청"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="https://cals.snu.ac.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        서울대학교 농업생명과학대학
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/cals.png"
                        alt="서울대학교 농업생명과학대학"
                      />
                    </div>
                  </td>
                  <td className="logo-box">
                    <Link to="https://ranbiz.skku.edu/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        성균관대학교 산학협력단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/skku.png"
                        alt="성균관대학교 산학협력단"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link
                      to="https://www.kunsan.ac.kr/sanhak/index.kunsan"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        국립군산대학교 산학협력단
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/ksnu.png"
                        alt="국립군산대학교 산학협력단"
                      />
                    </div>
                  </td>
                  <td className="logo-box">
                    <Link
                      to="http://www.nhabgroup.com/user/indexMain.do?siteId=nhabgroup"
                      target="_blank"
                    >
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        농협경제지주
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/nh.png"
                        alt="농협경제지주"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="logo-box">
                    <Link to="https://www.lemi.or.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        축산환경관리원
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/lemi.png"
                        alt="축산환경관리원"
                      />
                    </div>
                  </td>
                  <td className="logo-box">
                    <Link to="http://www.begas.co.kr/" target="_blank">
                      <div className="logo-text d-flex justify-content-center align-items-center">
                        (주)베가스
                      </div>
                    </Link>
                    <div className="div-container">
                      <img
                        src="/images/contractor_img/begas.png"
                        alt="베가스"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contractor;
