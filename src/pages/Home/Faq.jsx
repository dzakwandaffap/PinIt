import React from 'react';
import FAQItem from '../../components/FAQItem';
import { useNavigate } from 'react-router-dom';


const faqs = [
  {
    question: 'How do I book a trip with PinIt?',
    answer: 'Booking with PinIt is simple! Just select your destination, choose your travel dates, pick from our recommended flights and hotels, and complete your booking in just a few clicks. Our smart recommendation system will help you find the best deals tailored to your preferences.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept a wide range of payment methods, including major credit cards (Visa, Mastercard, American Express), debit cards, and online payment services like PayPal. You can choose your preferred method at checkout.',
  },
  {
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can. Cancellation and modification policies depend on the specific airline, hotel, or car rental service. Please refer to the terms and conditions of your booking for detailed information on how to proceed.',
  },
  {
    question: 'How does your Best Price Guarantee work?',
    answer: 'Our Best Price Guarantee ensures you get the lowest price available. If you find a lower price for the same flight or hotel within 24 hours of your booking, we will match that price and refund the difference.',
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Absolutely. We use industry-standard encryption and security protocols to protect your personal information. Your data is handled with the utmost care and is never shared with third parties without your consent.',
  },
];



const FAQ = () => {
    const navigate = useNavigate();
  return (
      <div className="min-h-screen bg-white py-16 px-4 md:px-8 flex flex-col items-center">
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center mb-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/home/pricing')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="sr-only">Back to Home</span>
        </button>

        {/* Navigation Links */}
        
      </div>
      <div className="w-full max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          Get quick answers to the most common questions about PinIt.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;