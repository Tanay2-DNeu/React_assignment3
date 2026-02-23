import { useState, useMemo, useCallback } from 'react';
import useFetch from '../hooks/useFetch';

const DataDisplay = () => {
  // 1. Use our custom fetch hook
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [searchTerm, setSearchTerm] = useState('');

  // 2. useCallback: Caches the function definition between renders
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []); 

  // 3. useMemo: Caches the result of this calculation
  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]); // Only recalculate if users array or searchTerm changes

  if (loading) return <p>Loading users from API...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>API Data & Performance Hooks</h3>
      <input 
        type="text" 
        placeholder="Search users..." 
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;