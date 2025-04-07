// src/components/SharePointLink.js
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest, sharepointSiteUrl } from '../authConfig';

function SharePointLink() {
  const { instance, accounts } = useMsal();
  
// In SharePointLink.js
const handleSharePointClick = async (event) => {
  event.preventDefault();
    
  if (accounts.length > 0) {
    try {
      // User is already logged in, try to get token silently
      await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: accounts[0]
      });
        
      // Redirect to SharePoint site
      window.location.href = sharepointSiteUrl;
    } catch (error) {
      // If silent token acquisition fails, fall back to redirect
      instance.loginRedirect({ scopes: ["User.Read"] });
    }
  } else {
    // User needs to log in first
    instance.loginRedirect({ scopes: ["User.Read"] });
  }
};
  return (
    <a href="#" onClick={handleSharePointClick} className="link-block">
      Show Uploads and Shared Files
    </a>
  );
}

export default SharePointLink;