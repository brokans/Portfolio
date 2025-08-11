import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Link to="/"></Link>
      <Link to="/services"></Link>
      <Link to="/contacts"></Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
