import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false); // State to manage the toggle
  const monthlyPrice = 15;
  const yearlyPrice = 12; // (15 * 0.83) a simple calculation for 17% savings

  return (
    <div className="bg-white font-sans text-gray-900 min-h-screen p-6 md:p-10 flex flex-col items-center">
      {/* Top Bar with Back Button and Nav */}
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center mb-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="sr-only">Back to Home</span>
        </button>

        {/* Navigation Links */}
        <div className="flex items-center text-sm space-x-6 text-gray-600">
          <button onClick={() => navigate('/home/faq')} className="hover:text-gray-900 transition-colors">FAQ</button>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Simple, transparent pricing.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Pay for what you use, when you use it. No hidden fees, no complex tiers.
        </p>
      </div>
      
      {/* Pricing description and toggle */}
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="max-w-xl text-gray-600 mb-6 md:mb-0">
          <p className="text-base leading-relaxed">
            Our pricing is designed to scale with your needs. You're charged based on data points (pageviews and events) consumed each month. We'll automatically move you to a suitable tier if usage exceeds.
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end">
          <div className="flex items-center space-x-4 p-1 bg-gray-100 rounded-full mb-4">
            {/* Monthly Option */}
            <label className="flex items-center cursor-pointer" onClick={() => setIsYearly(false)}>
              <input type="radio" name="billing" className="hidden" checked={!isYearly} readOnly />
              <span
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isYearly ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:bg-gray-200'
                }`}
              >
                Monthly
              </span>
            </label>
            
            {/* Yearly Option */}
            <label className="flex items-center cursor-pointer" onClick={() => setIsYearly(true)}>
              <input type="radio" name="billing" className="hidden" checked={isYearly} readOnly />
              <span
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                  isYearly ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:bg-gray-200'
                }`}
              >
                Yearly <b className="text-green-600">(save 17%)</b>
              </span>
            </label>
          </div>
          <p className="text-sm text-gray-500">
            You'll be billed based on your data point volume each month.
          </p>
        </div>
      </div>

      {/* Main pricing card section */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Price and Call to Action */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold mb-2">
              Starts at ${isYearly ? yearlyPrice : monthlyPrice}/month
            </h2>
            <p className="text-gray-600 mb-6">
              Designed for growing teams, up to billions of data points/month.
            </p>
            
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Up to 50 sites included</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Ecommerce & custom event tracking</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Seamless integration with all CMS/frameworks</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full API access 
                  <svg className="w-4 h-4 text-gray-400 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <button className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Start your 30-day free trial
            </button>
            <div className="flex justify-center text-sm text-gray-500 mt-4 space-x-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6h-8m0 0l4 4m-4-4l4-4"></path>
                </svg>
                Change tier anytime
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
        
        {/* Right Card: Included Features */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              All accounts include:
            </h2>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Forever data retention</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>100% data ownership & privacy</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No cookie banners required</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited email reports</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited data exports</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Enterprise-grade infrastructure</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dedicated email support</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <a href="#" className="text-blue-600 font-medium hover:underline flex items-center justify-end">
              See all features 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mx-auto mt-16">
        <div className="w-full max-w-4xl mx-auto mt-16 p-6 md:p-8 bg-gray-50 rounded-xl shadow-md border border-gray-100 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Can't find the answers you're looking for? Our FAQ section has detailed information on everything you need.
          </p>
          <button
            onClick={() => navigate('/home/faq')}
            className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                       hover:bg-gray-800 transition-colors duration-300 transform "
          >
            Visit our FAQ →
          </button>
        </div>
      </div>
      
      {/* Footer text */}
      <div className="mt-12 text-xs text-gray-500 text-center max-w-xl mx-auto">
        <p>All pricing is in USD and renews automatically unless cancelled. You can purchase more sites for an additional fee.</p>
      </div>
    </div>
  );
};

export default PricingPage;