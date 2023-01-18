import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function SeconaryNav() {
  return (
    <ul className="secondary-nav">
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/" end>
          Translations
        </Nav.Link>
      </li>
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/history/2022-10-01/2022-11-01">
        History
        </Nav.Link>
      </li>
      <li>
      <Nav.Link as={NavLink} to="/history-list">History List</Nav.Link>
      </li>
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/rollup">
          Rollup
        </Nav.Link>
      </li>
    </ul>
  );
}
