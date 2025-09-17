import React from "react";
import Navbar from "../components/Navbar";

const TemplateNav = ({ children }) => {
    return (
       <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </div>
    )
}

export default TemplateNav;