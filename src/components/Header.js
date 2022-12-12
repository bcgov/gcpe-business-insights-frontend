import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";

export default function Header() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Navbar variant="dark" sticky="top" className="Header nav-bg">
      <Container>
        <Navbar.Brand>GCPE Business Insights</Navbar.Brand>
        {isAuthenticated ? <SignOutButton /> : <></>}
      </Container>
    </Navbar>
  );
}
