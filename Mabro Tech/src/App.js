import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/FooterSticky.css";

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/home/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n.language || "et";
    }
  }, [i18n.language]);

  return (
    <div className="App sticky-footer-layout">
      <NavBar />
      <Link to="/"></Link>
      <Link to="/services"></Link>
      <Link to="/contacts"></Link>

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
