// src/pages/Client/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Users, Star } from 'lucide-react';
import PinItIllustration from '../../components/PinItIllustration'; // Import komponen ilustrasi

const Dashboard = () => {
  const navigate = useNavigate();

    return (
      
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            
      <div className="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-20 md:mb-32">
          <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Your home for ideas.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
              Welcome back to your creative space. Discover, collect, and share the inspirations that define your vision.
            </p>
            <button
              onClick={() => navigate('/create-pin')}
              className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 "
            >
              Start Creating →
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {/* Ganti placeholder dengan komponen ilustrasi */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden flex items-center justify-center">
              <PinItIllustration />
            </div>
          </div>
        </div>
        
        {/* Why PinIt Section */}
        <div className="w-full max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why you'll love it here.
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            PinIt is designed to make your creative journey seamless, collaborative, and inspiring.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-20 md:mt-32">

    {/* Featured Card: Central Idea */}
    <div className="md:col-span-2 lg:col-span-1 p-8 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 ">
        <div className="text-center mb-6">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                <Star className="w-10 h-10 text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Be Inspired.</h3>
            <p className="text-base text-gray-600 leading-relaxed">
                Find endless ideas tailored to your interests, from design trends to new recipes, all in one place.
            </p>
        </div>
        <div className="text-center">
            <button
                onClick={() => navigate('/discover')}
                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
                Start Discovering
            </button>
        </div>
    </div>

    {/* Secondary Card 1: Collaboration */}
    <div className="md:col-span-1 lg:col-span-1 p-8 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 p-3 rounded-full bg-gray-100">
            <Users className="w-8 h-8 text-gray-800" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Connect & Collaborate.</h3>
        <p className="text-base text-gray-600 leading-relaxed">
            Share creations and build your community.
        </p>
    </div>

    {/* Secondary Card 2: Tools */}
    <div className="md:col-span-1 lg:col-span-1 p-8 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 p-3 rounded-full bg-gray-100">
            <Pencil className="w-8 h-8 text-gray-800" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Organize Your Ideas.</h3>
        <p className="text-base text-gray-600 leading-relaxed">
            Access simple tools to manage your boards.
        </p>
    </div>

</div>

{/* Call to Action Section (no change) */}
<div className="mt-20 md:mt-32 w-full max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Ready to get started?
    </h2>
    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Start pinning your first idea and take your creative journey to the next level.
    </p>
    <button
        onClick={() => navigate('/create-pin')}
        className="inline-flex items-center justify-center bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg  transition-colors duration-300"
    >
        Create Your First Pin →
    </button>
</div>

      </div>
    </div>
  );
};

export default Dashboard;