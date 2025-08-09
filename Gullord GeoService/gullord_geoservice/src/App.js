import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import  {Link, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Services from "./pages/Services";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import About from "./pages/About";



function App() {
  return (
    <div className="App">
      < NavBar />
      
      <Link to="/"></Link>
      <Link to="services"></Link>
      <Link to="projects"></Link>
      <Link to="contacts"></Link>
      <Link to="about"></Link>      

      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/services" element={< Services />}/>
        <Route path="/projects" element={< Projects />}/>
        <Route path="/contacts" element={< Contacts />}/>
        <Route path="/about" element={< About />}/>
      </Routes>
    </div>
  );
}

export default App;
