import { useState } from 'react';

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px' }}>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default LoginToggle;