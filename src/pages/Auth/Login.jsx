import React, { useState } from "react";
import {User  ,Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";

// Assume these imports are in your project

// import google_icon from "../../../assets/google-icon.svg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "", 
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Panggil API login dari backend Anda
      const response = await api.post('/auth/login', form);
      
      // Simpan token ke local storage atau context/state management
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#DCDCDC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your workspace</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* username Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            {/* Lock Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>

            {/* Eye Icon */}
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

            {/* Password Input */}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-gray-50 border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
              transition-all duration-200 placeholder-gray-500 text-gray-800"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3.5 px-4 
            rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2
            transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
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
            {/* Anda bisa menggunakan komponen SVG di sini jika ada */}
            {/* <img src={google_icon} alt="Google Icon" className="w-5 h-5 mr-3" /> */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <button 
              onClick={() => navigate("/register")}
              className="text-gray-800 hover:text-gray-900 font-semibold transition-colors duration-200 "
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
