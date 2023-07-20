import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function SeconaryNav() {
  return (
    <ul className="secondary-nav">
      <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/">
          Collections
        </Nav.Link>
      </li>
      {/* <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/collections">
          Collections
        </Nav.Link>
      </li> */}
      {/* <li className="list-inline-item">
        <Nav.Link as={NavLink} to="/rollup">
          Rollup
        </Nav.Link>
      </li> */}
    </ul>
  );
}
