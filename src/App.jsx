import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import GlobalStyles from "./components/global/GlobalStyles";
import TopComponents from "./components/global/TopComponents";
import HomePage from "./pages/HomePage";
import Gallary from "./pages/Gallary";
import StatsPage from "./pages/StatsPage";
import UserPage from "./pages/UserPage";
import InfoPage from "./pages/InfoPage";
import DigHolePage from "./pages/DigHolePage";
import BurnRabbitPage from "./pages/BurnRabbitPage";

function App() {
  const [mobile, setMobile] = useState(false);
  const totalDigs = 1111;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setMobile(isMobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyles mobile={mobile} />
      <BrowserRouter>
        <TopComponents totalDigs={totalDigs} mobile={mobile} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/stats" element={<StatsPage />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/gallary" element={<Gallary mobile={mobile} />} />
          <Route path="/gallary/:key" element={<Gallary mobile={mobile} />} />
          <Route
            path="/gallary/:key/:key2"
            element={<Gallary mobile={mobile} />}
          />
          <Route path="/dig-hole" element={<DigHolePage mobile={mobile} />} />
          <Route
            path="/dig-hole/:key"
            element={<DigHolePage mobile={mobile} />}
          />
          <Route
            path="/burn-rabbit"
            element={<BurnRabbitPage mobile={mobile} />}
          />
          <Route
            path="/burn-rabbit/:key"
            element={<BurnRabbitPage mobile={mobile} />}
          />
          <Route path="/user" element={<UserPage mobile={mobile} />} />
          <Route path="/user/:key" element={<UserPage mobile={mobile} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
