import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SignOutButton } from "./SignOutButton";
import logo from "../logo.png";
import { useIsAuthenticated } from "@azure/msal-react";

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
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
