import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Link to="/"></Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
