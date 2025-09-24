import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderKanban, Settings, LogOut, UserCircle } from 'lucide-react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';


const LoggedInNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();



  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/logout');
      localStorage.removeItem("token");
      response.data.message && alert(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  // Function to check if current path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to get link classes based on active state
  const getLinkClasses = (path) => {
    const baseClasses = "flex items-center transition-colors font-medium";
    return isActive(path) 
      ? `${baseClasses} text-gray-900 font-semibold`
      : `${baseClasses} text-gray-600 hover:text-gray-900`;
  };

  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">PinIt</span>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => navigate('/dashboard')} 
            className={getLinkClasses('/dashboard')}
          >
            <Home className={`w-5 h-5 mr-2 ${isActive('/dashboard') ? 'text-black' : 'text-gray-600'}`} />
            Dashboard
          </button>
          
          <button 
            onClick={() => navigate('/projects')} 
            className={getLinkClasses('/projects')}
          >
            <FolderKanban className={`w-5 h-5 mr-2 ${isActive('/projects') ? 'text-black' : 'text-gray-600'}`} />
            Projects
          </button>
          
          <button 
            onClick={() => navigate('/settings')} 
            className={getLinkClasses('/settings')}
          >
            <Settings className={`w-5 h-5 mr-2 ${isActive('/settings') ? 'text-black' : 'text-gray-600'}`} />
            Settings
          </button>
        </div>

        {/* User Profile and Logout */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/profile')} >
              <UserCircle className="w-6 h-6 text-gray-600" />
              </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5 mr-1" />
            <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;