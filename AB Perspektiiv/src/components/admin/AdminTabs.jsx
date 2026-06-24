import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import MaintainLocations from "../../pages/admin/MaintainLocations.";
import MaintainCourses from "../../pages/admin/MaintainCourses";
import MaintainProjects from "../../pages/admin/MaintainProjects";
import { useAuth } from "../../store/AuthContext";

function AdminTabs() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/admin/login");
  }

  return (
    <div className="admin-tabs">
      <div className="d-flex justify-content-between align-items-center px-3 pt-3">
        <span className="text-muted small">{user?.email}</span>
        <Button variant="outline-secondary" size="sm" onClick={handleLogout}>
          Logi välja
        </Button>
      </div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="location" title="Halda Asukohtasid">
          <MaintainLocations />
        </Tab>
        <Tab eventKey="courses" title="Halda Kursuseid">
          <MaintainCourses />
        </Tab>
        <Tab eventKey="projects" title="Halda Projekte">
          <MaintainProjects />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminTabs;
