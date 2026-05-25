import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfessionalWorkPage from "./pages/ProfessionalWorkPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import CertificatesPage from "./pages/CertificatesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professional-work" element={<ProfessionalWorkPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
export default App;
