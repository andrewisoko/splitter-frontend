import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignUpPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/signup" element={<SignupPage/>}></Route>
            <Route path="/home" element={ <HomePage/>}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
