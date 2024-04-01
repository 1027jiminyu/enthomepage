import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/headerFooter/Header";
import Main from "./components/page/Main";
import AboutUs from "./components/page/AboutUs";
import NotFound from "./components/page/NotFound";
import Footer from "./components/headerFooter/Footer";
import Business from "./components/page/Business";
import Device from "./components/page/Device";
import Contractor from "./components/page/Contractor";
import Overview from "./components/company/Overview";
import History from "./components/company/History";
import Organization from "./components/company/Organization";
import Domain from "./components/company/Domain";
import Vision from "./components/business/Vision";
import Monitoring from "./components/business/Monitoring";
import Reduction from "./components/business/Reduction";
import Algorithm from "./components/business/Algorithm";
import Research from "./components/business/Research";
import Function from "./components/device/Function";
import Process from "./components/device/Process";
import LED from "./components/device/LED";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />}>
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="history" element={<History />} />
              <Route path="organization" element={<Organization />} />
              <Route path="domain" element={<Domain />} />
            </Route>
            <Route path="/business" element={<Business />}>
              <Route index element={<Vision />} />
              <Route path="vision" element={<Vision />} />
              <Route path="monitoring" element={<Monitoring />} />
              <Route path="reduction" element={<Reduction />} />
              <Route path="algorithm" element={<Algorithm />} />
              <Route path="research" element={<Research />} />
            </Route>
            <Route path="/device" element={<Device />}>
              <Route index element={<Function />} />
              <Route path="function" element={<Function />} />
              <Route path="process" element={<Process />} />
              <Route path="led" element={<LED />} />
            </Route>
            <Route path="/contractor" element={<Contractor />} />
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
