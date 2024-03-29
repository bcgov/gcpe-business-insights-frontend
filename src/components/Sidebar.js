import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" end>
          Translations
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/history/2022-10-01/2022-11-01">
          History
        </Nav.Link>
        <Nav.Link as={NavLink} to="/history-list">History List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/rollup">
          Rollup
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}
