// src/components/Login.js
import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().then((response) => {
      console.log('Logged in:', response);
    }).catch((error) => {
      console.error('Login error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in with Microsoft</button>
    </div>
  );
};

export default Login;
