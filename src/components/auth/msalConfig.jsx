// src/auth/msalConfig.js
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Azure AD Client ID
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Tenant ID
    redirectUri: 'http://localhost:3000',
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
