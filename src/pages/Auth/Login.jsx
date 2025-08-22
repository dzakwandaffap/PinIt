import { Mail, Lock, Eye } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 backdrop-blur-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
              transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Email Address"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
              transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 
              hover:text-gray-600 transition-colors duration-200"
            >
              <Eye className="h-5 w-5" />
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 
            rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 
            transform hover:scale-105 mt-4"
          >
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-xs">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="mt-4">
          <button
            className="w-full flex items-center justify-center px-4 py-3 rounded-lg 
            text-black bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
                1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
                3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 
                7.28-2.66l-3.57-2.77c-.98.66-2.23 
                1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
                20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
                8.55 1 10.22 1 12s.43 3.45 1.18 
                4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
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

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
