import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/signup" element={<SignupPage/>}></Route>
              <Route path="/home" element={ <HomePage/>}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
  );
}

export default App;
