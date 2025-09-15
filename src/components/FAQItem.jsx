import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
      <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg">
          
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-lg font-medium text-gray-800 focus:outline-none transition-colors duration-200 hover:bg-gray-50"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-gray-500 transition-transform duration-300" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-6 pt-0">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;