import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

import ThemeToggler from './components/ThemeToggler';
import LoginToggle from './components/LoginToggle';
import UserProfile from './components/UserProfile';
import DataDisplay from './components/DataDisplay';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
          <h1>React Assignment</h1>
          <ThemeToggler />
          <LoginToggle />
          <UserProfile />
          <DataDisplay />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;