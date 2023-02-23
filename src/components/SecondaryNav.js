import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function SeconaryNav() {
  return (
    <ul className="secondary-nav">
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/" end>
          Current
        </Nav.Link>
      </li>
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/history-list">
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
