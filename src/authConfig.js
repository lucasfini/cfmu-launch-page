// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: "7d2c5fe8-85f8-424b-8196-e705e6a864ca",
    authority: "https://login.microsoftonline.com/52e54255-72b0-4649-951a-2de4c170009d",
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://159.203.59.163"
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true, // Set this to true for IE11
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};

export const sharepointSiteUrl = "https://mcmastersu.sharepoint.com/sites/CFMU-Uploads/SitePages/CollabHome.aspx";