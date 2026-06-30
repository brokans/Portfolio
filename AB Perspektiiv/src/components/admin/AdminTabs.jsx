import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import MaintainLocations from "../../pages/admin/MaintainLocations";
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
        defaultActiveKey="projects"
        transition={false}
        id="admin-tabs"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="projects" title="Halda projekte">
          <MaintainProjects />
        </Tab>
        <Tab eventKey="location" title="Halda asukohti">
          <MaintainLocations />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminTabs;
