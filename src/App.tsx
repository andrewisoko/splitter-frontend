import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import UsernameDetailsPage from './components/Modals/UsernameModal';

function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      <SignupPage/>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
