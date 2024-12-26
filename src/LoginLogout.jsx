import React, { useState } from "react";

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      <div className="navigation">
        <span>Navigation</span>
        {isLoggedIn ? (
          <button className="auth-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="auth-button" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
      <div className="content">
        {isLoggedIn ? <h2>Private Views</h2> : <h2>Public Views</h2>}
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default LoginLogout;
