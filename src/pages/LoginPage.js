import { useEffect } from "react";
import Body from "../components/Body";
import {useNavigate, useLocation } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../components/SignInButton";

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
      {isAuthenticated ? <></> : <SignInButton />}
    </Body>
  );
}
