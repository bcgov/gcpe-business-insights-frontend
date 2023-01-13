import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SignOutButton } from "./SignOutButton";
import logo from "../logo.png";
import { useIsAuthenticated } from "@azure/msal-react";

export default function Header() {
  const isAuthenticated = useIsAuthenticated();
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
      className="Header nav-bg"
      expand="none"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo" />
          <span style={{ ...titleDiv }}>GCPE Business Insights</span>
        </Navbar.Brand>
        {isAuthenticated ? <SignOutButton /> : <></>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link1</Nav.Link>
            <Nav.Link href="#link">Link2</Nav.Link>
            <Nav.Link href="#link">Link3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
