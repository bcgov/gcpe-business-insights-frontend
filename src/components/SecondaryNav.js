import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export default function SeconaryNav() {
  return (
    <ul className="secondary-nav">
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/" end>
          Current
        </Nav.Link>
      </li>
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/history/2022-10-01/2022-11-01">
          Historic
        </Nav.Link>
      </li>
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/rollup">
          Rollup
        </Nav.Link>
      </li>
    </ul>
  );
}
