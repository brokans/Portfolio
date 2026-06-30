import "./styles/index.css";

import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/global/Contact";
import HomePage from "./pages/global/HomePage";
import Navbars from "./components/Navbars";
import AdminHome from "./pages/admin/AdminHome";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Architecture from "./pages/global/Architecture";
import InteriorArchitecture from "./pages/global/InteriorArchitecture";
import MaintainLocations from "./pages/admin/MaintainLocations";
import MaintainProjects from "./pages/admin/MaintainProjects";
import EditLocation from "./pages/admin/EditLocation";
import EditProject from "./pages/admin/EditProject";
import ProjectPage from "./pages/global/ProjectPage";
import Portfolio from "./pages/global/Portfolio";
import Services from "./pages/global/Services";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/arhitektuur" element={<Architecture />} />
        <Route path="/sisearhitektuur" element={<InteriorArchitecture />} />
        <Route path="/project-page/:name" element={<ProjectPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/maintain-locations"
          element={
            <ProtectedRoute>
              <MaintainLocations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/maintain-projects"
          element={
            <ProtectedRoute>
              <MaintainProjects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/maintain-locations/edit-location/:index"
          element={
            <ProtectedRoute>
              <EditLocation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/maintain-projects/edit-project/:index"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
