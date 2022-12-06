import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" end>Translations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/test1">Another Report</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/test2">Another Report</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}