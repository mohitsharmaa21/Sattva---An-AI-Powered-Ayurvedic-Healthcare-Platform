import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Remedies from "./pages/Remedies";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Vision from "./pages/Vision";
import AI from "./pages/AI";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import SymptomHistory from "./pages/SymptomHistory";
import Insurance from "./pages/Insurance";
import Login from "./pages/Login";
import SourcesEvidence from "./pages/SourcesEvidence";
import SafetyDisclaimer from "./pages/SafetyDisclaimer";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DataSafety from "./pages/DataSafety";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AppShell from "./components/AppShell";

const ProductRoute = ({ children }) => <AppShell>{children}</AppShell>;

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element={<ProductRoute><Doctors /></ProductRoute>} />
          <Route path="/doctors/:id" element={<ProductRoute><DoctorProfile /></ProductRoute>} />
          <Route path="/ayurveda" element={<ProductRoute><Remedies /></ProductRoute>} />
          <Route path="/blogs" element={<ProductRoute><Blogs /></ProductRoute>} />
          <Route path="/ai-check" element={<ProductRoute><AI /></ProductRoute>} />
          <Route path="/dashboard" element={<ProductRoute><Dashboard /></ProductRoute>} />
          <Route path="/doctor-dashboard" element={<ProductRoute><DoctorDashboard /></ProductRoute>} />
          <Route path="/history" element={<ProductRoute><SymptomHistory /></ProductRoute>} />
          <Route path="/insurance" element={<ProductRoute><Insurance /></ProductRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/sources-evidence" element={<SourcesEvidence />} />
          <Route path="/safety-disclaimer" element={<SafetyDisclaimer />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/data-safety" element={<DataSafety />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
