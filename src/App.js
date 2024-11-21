import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/Login.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx"; // Import the RegisterPage component
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes */}
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
          <Route path="/register" element={<RegisterPage />} /> {/* Register page route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
