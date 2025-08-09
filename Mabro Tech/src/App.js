import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Link to="/"></Link>
      <Link to="/about"></Link>
      <Link to="/contacts"></Link>

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/about" element={< About />} />
  <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
