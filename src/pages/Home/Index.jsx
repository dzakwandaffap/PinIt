import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          {/* Logo Mobbin */}
        
          <span className="ubuntu-regular text-3xl font-bold" style={{letterSpacing: '0.03em'}}>Pinit</span>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate('/register')} className="text-gray-600 hover:text-gray-900 transition-colors">Register </button>
          <button onClick={() => navigate('/login')} className="text-gray-600 hover:text-gray-900 transition-colors">Log in</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center p-8 pt-16 md:pt-40 max-w-4xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
          PinIt 
        </h1>
        
        {/* Sub-headline / Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Discover, save, and share your favorite ideas in one place. 
          <br className="hidden md:inline "/> Organize your inspirations effortlessly with PinIt.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button 
            onClick={() => navigate('/home/pricing')} 
            className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow-lg ">
            see our pricing plan &rarr;
          </button>
          <button onClick={() => navigate('/register')} className="bg-transparent text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-300 hover:bg-gray-50 transition-colors duration-300">
            Register for free &rarr;
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="absolute bottom-8 left-0 right-0 text-center px-4">
        <p className="text-gray-500 text-sm mb-4">Trusted by design teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {/* Ganti dengan logo SVG atau gambar asli */}
          <span className="text-gray-400 text-lg font-bold">Uber</span>
          <span className="text-gray-400 text-lg font-bold">headspace</span>
          <span className="text-gray-400 text-lg font-bold">Meta</span>
          <span className="text-gray-400 text-lg font-bold">airbnb</span>
          <span className="text-gray-400 text-lg font-bold">Revolut</span>
          <span className="text-gray-400 text-lg font-bold">Metalab</span>
          <span className="text-gray-400 text-lg font-bold">Pinterest</span>
        </div>
      </div>
    </div>
  );
};

export default Home;