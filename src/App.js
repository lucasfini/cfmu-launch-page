// App.js
import React from 'react';
// Comment out MSAL imports temporarily
// import { MsalProvider } from '@azure/msal-react';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { msalConfig } from './authConfig';

import './App.css';
import iconFacebook from './assets/icon-facebook.svg';
import iconSpotify from './assets/icon-spotify.svg';
import iconTiktok from './assets/icon-tiktok.svg';
import iconX from './assets/icon-x.svg';
import iconInstagram from './assets/icon-instagram.svg';
import './assets/pattern.svg'; // Import pattern for webpack

// Import components
// import SharePointLink from './components/SharePointLink';
// import AuthStatus from './components/AuthStatus';

// Create mock components
const MockAuthStatus = () => (
  <div className="auth-status">
    <button className="auth-button login">
      Sign In (Disabled)
    </button>
  </div>
);

const MockSharePointLink = () => (
  <a href="https://mcmastersu.sharepoint.com/sites/CFMU-Uploads/SitePages/CollabHome.aspx" 
     className="link-block" target="_blank" rel="noopener noreferrer">
    Show Uploads and Shared Files
  </a>
);

function App() {
  return (
    // Remove MSAL provider
    <div className="app">
      {/* Main Navigation */}
      <header className="main-header">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 68" width="144px" height="68" className="cfmu-logo">
            <g fill="#FF394A" fillRule="evenodd">
              <path d="M101.07 45.8c.07.46-.25.78-.67.78h-4.17c-.31 0-.63-.28-.67-.57l-.52-3.64L94 35.26h-.18l-3.68 7.11-1.82 3.52V68h16.88V35.26h-5.9l1.77 10.54zm-20.8-10.54h-.18l-1.01 7.11-.52 3.64a.69.69 0 0 1-.67.57h-4.16c-.43 0-.74-.32-.67-.78l1.77-10.54h-5.9v19.79H85.8v-9.16l-1.84-3.52-3.7-7.11zM20.82 21.37c3.52 0 6.13 1.1 8.53 3.29.32.28.32.7.04.99l-2.75 2.86a.62.62 0 0 1-.89 0 7.2 7.2 0 0 0-4.76-1.8c-3.98 0-6.91 3.32-6.91 7.28 0 3.92 2.96 7.18 6.95 7.18 1.65 0 3.45-.6 4.72-1.7.25-.21.71-.21.92.03l2.75 2.94c.25.24.21.7-.03.95a12.1 12.1 0 0 1-8.57 3.43A12.66 12.66 0 0 1 8.08 34.13c0-7.07 5.68-12.76 12.74-12.76zM42.4 22.4c0-.36.28-.67.67-.67h14.6c.4 0 .68.31.68.67v3.85c0 .35-.29.67-.67.67H47.9v5.1h8.05a.7.7 0 0 1 .67.66v3.85a.7.7 0 0 1-.67.68H47.9v8.59a.7.7 0 0 1-.67.67h-4.16a.67.67 0 0 1-.67-.67V22.4zM0 55.05h66.41v-42.1H0v42.1z"></path>
              <path d="M68.93 13.31v19.43h6.32l1.8-10.7a.68.68 0 0 1 .63-.56h.56c.18 0 .5.15.6.36l5.6 10.45.25.45 1.12 2.09.23.43.99 1.85h.07l.99-1.85.23-.43 1.12-2.09.24-.45 5.6-10.45c.1-.21.43-.36.6-.36h.57c.28 0 .6.25.63.57l1.8 10.7h6.32V0H68.93v13.31zM135.9 37c0 5.38-4.52 9.83-10.09 9.83a9.96 9.96 0 0 1-10.02-9.83v-1.73h-8.08v19.79h36.27v-19.8h-8.08V37z"></path>
              <path d="M107.71 32.74h8.08V22.4a.7.7 0 0 1 .67-.67h4.34c.39 0 .67.31.67.67V36.7a4.32 4.32 0 0 0 4.34 4.45c2.54 0 4.41-1.97 4.41-4.45V22.4c0-.36.28-.67.67-.67h4.34a.7.7 0 0 1 .67.67v10.34h8.08V12.95h-36.27v19.8z"></path>
            </g>
          </svg>
        </div>
        <div className="header-right">
          <MockAuthStatus />
          <div className="social-links">
            <a href="https://open.spotify.com/user/933cfmu" aria-label="Spotify">
              <img src={iconSpotify} alt="Spotify" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/933cfmu" aria-label="Facebook">
              <img src={iconFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@cfmu_933" aria-label="TikTok">
              <img src={iconTiktok} alt="TikTok" className="social-icon" />
            </a>
            <a href="https://x.com/933CFMU" aria-label="X">
              <img src={iconX} alt="X" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/933cfmu" aria-label="Instagram">
              <img src={iconInstagram} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="links-section">
          <div className="main-links">
            <a href="https://cfmu.ca" className="link-block">CFMU.ca</a>
            <MockSharePointLink />
            <a href="https://cfmu.wwworks-inc.com/newreleases/newreleases.php" className="link-block">New Releases</a>
          </div>
        </div>
        
        <div className="history-section">
          <h1>Our History</h1>
          
          <p>CFMU started out as McMaster Radio in 1963 and was run by the BSB (Board of Student Broadcasting.) The studios were in the basement of Wentworth House and as Bruce Beghamer '67 recalls, 'We originally piped broadcasting to the residences. It was quite the adventure back then. We had a very small budget from the MSU, but we had huge heart and enthusiasm from our radio members.'</p>
          
          <p>In January 1978, CFMU began to broadcast to Hamilton and the surrounding community on the FM band. Since then, we have been voice of the campus and the community, a breeding ground for new talent, and a vital medium for relating ideas, news and views. CFMU 93.3 is "Redefining Radio In Your Community." We use that phrase because it re-enforces our broad relevance and reflects a revitalized commitment to our mandate. We are a public meeting place for many voiceless dimensions in our society – local cutting-edge artists and musicians, marginalized groups, multicultural families, and people with a keen social conscience. Our broadcasts stand independent of corporations, sponsors, advertisers, and political agendas. CFMU is comfortable with risky subjects that need attention – leadership in today's issues and tomorrow's art is our job. CFMU is listener-supported radio – supported by those who recognize that diversity and local programming are more crucial than ever. Yet we are more; we are also supported by those who utilize us and their community voice. Without the support of the community we serve, we will not be able to provide that community with a voice, truly the only open and independent voice in the city. A stronger CFMU is stronger voice for all of us.</p>
        </div>
      </main>
    </div>
  );
}

export default App;