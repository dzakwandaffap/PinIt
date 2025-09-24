import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, CheckCircle } from "lucide-react";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    
  })

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/', form);
      console.log('Registration successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <div className="min-h-screen bg-[#DCDCDC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Register
          </h1>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-5">
 
          {/* Username Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Username"
            />
          </div>

          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Full Name"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Email Address"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              {showPassword ? (
                <Eye
                  className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Password"
            />
          </div>

          {/* Confirm Password Field */}
         

          {/* Terms and Conditions */}
          <div className="flex items-start text-sm mt-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded mt-0.5 mr-3"
            />
            <label htmlFor="terms" className="text-gray-600 leading-relaxed">
              I agree to the{' '}
              <a href="#" className="text-gray-800 hover:text-gray-900 font-medium ">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-gray-800 hover:text-gray-900 font-medium ">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3.5 px-4 
            rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2
            transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-6"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm font-medium">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl 
            text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200 
            border border-gray-200 hover:border-gray-300 font-medium shadow-sm
            hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
                1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
                3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 
                7.28-2.66l-3.57-2.77c-.98.66-2.23 
                1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
                20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
                8.55 1 10.22 1 12s.43 3.45 1.18 
                4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 
                4.21 1.64l3.15-3.15C17.45 2.09 14.97 
                1 12 1 7.7 1 3.99 3.47 2.18 
                7.07l3.66 2.84c.87-2.6 3.3-4.53 
                6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")}
              className="text-gray-800 hover:text-gray-900 font-semibold transition-colors duration-200 "
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;