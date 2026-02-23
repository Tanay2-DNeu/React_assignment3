import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  return (
    <div style={styles}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ThemeToggler;