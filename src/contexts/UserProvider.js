import { createContext, useContext, useState, useEffect } from "react";
import { useApi } from "./ApiProvider";
import { useIsAuthenticated } from "@azure/msal-react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const api = useApi();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        // const response = await api.get("/me");
        // setUser(response.ok ? response.body : null);
        setUser({});
      } else {
        setUser(null);
      }
    })();
  }, [api, isAuthenticated]);

  const login = async (username, password) => {
    const result = await api.login(username, password);
    if (result === "ok") {
       //const response = await api.get("/me");
       //setUser(response.ok ? response.body : null);
       setUser({});
       //return response.ok;
       return true;
    }
    return result;
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
