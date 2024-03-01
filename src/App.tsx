import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import { AuthContext } from './context/AuthContext';

const App: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Define the root route */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

        {/* Define the login route */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />

        {/* Define the dashboard route */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
