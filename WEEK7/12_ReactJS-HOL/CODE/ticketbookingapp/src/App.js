import React, { useState } from 'react';
import './App.css';

// Guest Greeting Component
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// User Greeting Component
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Login Button Component 
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component 
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Greeting Component (handles conditional rendering of UserGreeting/GuestGreeting) 
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />; // [cite: 121]
  }
  return <GuestGreeting />; // [cite: 122]
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;