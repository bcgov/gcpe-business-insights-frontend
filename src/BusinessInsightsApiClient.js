import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default class BusinessInsightsApiClient {
  constructor() {
    this.base_url = BASE_API_URL + "/api";
  }

  async request(options) {
    const publicClientApplication = new PublicClientApplication(msalConfig);

    const account = publicClientApplication.getAllAccounts()[0];
    const accessTokenRequest = {
      scopes: ["api://cc1edab2-70be-473b-8793-f51fca418d05/user_impersonation"],
      account: account,
    };

    var acquiredToken = await publicClientApplication.acquireTokenSilent(
      accessTokenRequest
    );

    var accessToken = acquiredToken.accessToken;

    let query = new URLSearchParams(options.query || {}).toString();
    if (query !== "") {
      query = "?" + query;
    }

    let response;
    try {
      response = await fetch(this.base_url + options.url + query, {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : null,
      });
    } catch (error) {
      response = {
        ok: false,
        status: 500,
        json: async () => {
          return {
            code: 500,
            message: "The server is unresponsive",
            description: error.toString(),
          };
        },
      };
    }

    return {
      ok: response.ok,
      status: response.status,
      body: response.status !== 204 ? await response.json() : null,
    };
  }

  async get(url, query, options) {
    return this.request({ method: "GET", url, query, ...options });
  }

  async post(url, body, options) {
    return this.request({ method: "POST", url, body, ...options });
  }

  async put(url, body, options) {
    return this.request({ method: "PUT", url, body, ...options });
  }

  async delete(url, options) {
    return this.request({ method: "DELETE", url, ...options });
  }
}
