// src/components/AuthStatus.js
import React from 'react';
import { useMsal } from '@azure/msal-react';

function AuthStatus() {
  const { instance, accounts } = useMsal();
  
  const isAuthenticated = accounts.length > 0;
  
  const handleLogin = () => {
    instance.loginRedirect();
  };
  
  const handleLogout = () => {
    instance.logoutRedirect();
  };
  
  if (isAuthenticated) {
    return (
      <div className="auth-status">
        <span className="user-name">Signed in as {accounts[0].name}</span>
        <button onClick={handleLogout} className="auth-button logout">
          Sign Out
        </button>
      </div>
    );
  }
  
  return (
    <div className="auth-status">
      <button onClick={handleLogin} className="auth-button login">
        Sign In
      </button>
    </div>
  );
}

export default AuthStatus;