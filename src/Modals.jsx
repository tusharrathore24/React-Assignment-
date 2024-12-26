import React, { useState } from "react";

const Modals = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="modal-container">
      <div>
        <h2>Modal Login Form</h2>
        <button className="open-modal-btn" onClick={() => setIsLoginModalOpen(true)}>
          Open Modal
        </button>
      </div>

      <div>
        <h2>Modal Registration Form</h2>
        <button
          className="open-modal-btn"
          onClick={() => setIsRegistrationModalOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setIsLoginModalOpen(false)}
            >
              &times;
            </button>
            <h2>Login to My Account</h2>
            <form>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me On This Computer</label>
              </div>
              <button className="login-btn" type="submit">
                LOGIN
              </button>
            </form>
            <div className="modal-footer">
              <a href="#">Forgot Your Password?</a>
              <a href="#">Create A New Account</a>
            </div>
          </div>
        </div>
      )}

      {isRegistrationModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setIsRegistrationModalOpen(false)}
            >
              &times;
            </button>
            <h2>Register a New Account</h2>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <button className="register-btn" type="submit">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
