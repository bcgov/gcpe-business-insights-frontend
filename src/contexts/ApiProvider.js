import { createContext, useContext } from "react";
import BusinessInsightsApiClient from "../BusinessInsightsApiClient";

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new BusinessInsightsApiClient();

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export function useApi() {
  return useContext(ApiContext);
}
