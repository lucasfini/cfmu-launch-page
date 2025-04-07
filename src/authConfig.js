// src/authConfig.js
export const msalConfig = {
    auth: {
      clientId: "7d2c5fe8-85f8-424b-8196-e705e6a864ca", // Replace with your actual client ID if different
      authority: "https://login.microsoftonline.com/52e54255-72b0-4649-951a-2de4c170009d", // McMaster tenant
      redirectUri: "http://159.203.59.163",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
    scopes: ["User.Read"]
  };
  
  // SharePoint site URL - replace with your actual SharePoint site
  export const sharepointSiteUrl = "https://mcmastersu.sharepoint.com/sites/CFMU-Uploads/SitePages/CollabHome.aspx";

  //}sIj43r6!L4~