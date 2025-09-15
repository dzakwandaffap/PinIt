import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar - can be shared across all public pages */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <span className="ubuntu-regular text-3xl font-bold cursor-pointer" onClick={() => navigate('/')}>Pinit</span>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate('/login')} className="text-gray-600 hover:text-gray-900 transition-colors">Log in</button>
          <button onClick={() => navigate('/register')} className="text-gray-600 hover:text-gray-900 transition-colors">Register</button>
        </div>
      </nav>

      {/* This is where the nested routes will be rendered */}
      <Outlet /> 
    </div>
  );
};

export default HomeLayout;