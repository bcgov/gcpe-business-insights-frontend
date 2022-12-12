import { useEffect } from "react";
import Body from "../components/Body";
import {useNavigate, useLocation } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../components/SignInButton";
import Accordion from "react-bootstrap/Accordion";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if(isAuthenticated) {
      let next = "/";
      if (location.state && location.state.next) {
        next = location.state.next;
      }
      navigate(next);
    }
  }, [isAuthenticated, location.state, navigate]);

  return (
    <Body>
      <Accordion className='mt-5' defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Log in to GCPE Business Insights</Accordion.Header>
          <Accordion.Body>
            {isAuthenticated ? <></> : <SignInButton />}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Body>
  );
}
