import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className='App'>
     <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;

