import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SignOutButton } from "./SignOutButton";
import logo from "../logo.png";

export default function Header() {
  //const isAuthenticated = useIsAuthenticated();
  const isAuthenticated = false;
  const titleDiv = {
    borderLeft: "1px solid #fcba19",
    paddingLeft: "20px",
    fontSize: "1.5em",
    fontWeight: "strong",
  };
  return (
    <Navbar
      variant="light"
      sticky="top"
      className="Header nav-bg navbar-static-top"
      expand="none"
    >
      <Navbar.Brand>
        <img src={logo} className="logo" alt="logo" />
        <span style={{ ...titleDiv }}>GCPE Business Insights</span>
      </Navbar.Brand>
      {isAuthenticated ? <SignOutButton /> : <></>}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
        <Nav className="flex-row flex-grow-1 pe-3">
          <Nav.Link to="/" end="true">
            Home
          </Nav.Link>
          <Nav.Link to="/" end="true">
            Translations
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
