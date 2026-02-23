import useAuth from '../hooks/useAuth';

const UserProfile = () => {
  const { user, loginUser, logoutUser } = useAuth();

  if (!user) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px' }}>
        <p>No user is currently authenticated globally.</p>
        <button onClick={() => loginUser({ name: "Alex Developer", email: "alex@code.com" })}>
          Simulate Global Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #4CAF50', borderRadius: '8px', marginBottom: '10px' }}>
      <h3>User Profile (Global State)</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={logoutUser}>Log Out Globally</button>
    </div>
  );
};

export default UserProfile;