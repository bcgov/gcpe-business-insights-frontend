import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";
import logo from "../logo.png";


export default function Header() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Navbar variant="dark" sticky="top" className="Header nav-bg">
      <Container>
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo" />
          GCPE Business Insights
        </Navbar.Brand>
        {isAuthenticated ? <SignOutButton /> : <></>}
      </Container>
    </Navbar>
  );
}
