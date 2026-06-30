import Nav from "react-bootstrap/Nav";

function PortfolioTabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center">
      <Nav.Item>
        <Nav.Link className="text-secondary" href="/arhitektuur">
          Arhitektuur
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary" href="/sisearhitektuur">
          Sisearhitektuur
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PortfolioTabs;
