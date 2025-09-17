import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderKanban, Settings, LogOut, UserCircle } from 'lucide-react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

  const LoggedInNavbar = () => {
    const Navigate = useNavigate();
  
  useEffect(() => {
    fetchuser();
  }, []);
      const [user, setUser] = useState({name: ''});
    const fetchuser = async () => {
      try {
      const response = await api.get('/users/:id');
      setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
    }
  }
  

    const handleLogout = async (e) => {
      
      e.preventDefault();
      try {
          const response = await api.post('/auth/logout');
          localStorage.removeItem("token");
          response.data.message && alert(response.data.message);
          Navigate("/home");
        
      }catch (error) {
            error(error);
      }
  };

  return (
    <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">PinIt</span>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <Link onClick={() => Navigate('/dashboard')} className="text-gray-600 hover:text-gray-900 flex items-center transition-colors">
            <Home className="w-5 h-5 mr-1" />
            Dashboard
          </Link>
          <Link onClick={() => Navigate('')} className="text-gray-600 hover:text-gray-900 flex items-center transition-colors">
            <FolderKanban className="w-5 h-5 mr-1" />
            Projects
          </Link>
          <Link onClick={() => Navigate('')} className="text-gray-600 hover:text-gray-900 flex items-center transition-colors">
            <Settings className="w-5 h-5 mr-1" />
            Settings
          </Link>
        </div>

        {/* User Profile and Logout */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
         
            <span className="font-medium text-gray-800">{user.name}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 hover:text-red-700 transition-colors"
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