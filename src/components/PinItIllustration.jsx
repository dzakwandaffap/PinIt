import React from 'react';

const PinItIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full max-w-[600px] max-h-[450px]"
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Board */}
        <rect width="600" height="450" rx="24" fill="#959595ff"/>
        <rect x="50" y="50" width="500" height="350" rx="16" fill="#dde3e9ff" stroke="#CBD5E1" strokeWidth="2"/>

        {/* --- Sticky Notes (hanya 2: Merah & Kuning) --- */}
        <g id="task-1">
          <rect x="80" y="80" width="150" height="100" rx="8" fill="#FDE68A"/> {/* Pink */}
          <path d="M96 110L214 110" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M96 130L170 130" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M96 150L200 150" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M190 80L190 70C190 64.4772 194.477 60 200 60C205.523 60 210 64.4772 210 70V80H190Z" fill="#F06292"/>
        </g>

        <g id="task-2">
          <rect x="80" y="210" width="150" height="100" rx="8" fill="#FDE68A"/> {/* Kuning */}
          <path d="M96 240L214 240" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M96 260L170 260" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M96 280L200 280" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <path d="M190 210L190 200C190 194.477 194.477 190 200 190C205.523 190 210 194.477 210 200V210H190Z" fill="#717171ff"/>
        </g>
        
        {/* Pins (existing) */}
        <circle cx="200" cy="70" r="10" fill="#e85c8bff"/>
        <circle cx="200" cy="200" r="10" fill="#717171ff"/>
        

        {/* --- Calendar Timeline Section --- */}
        <g id="calendar-timeline-new">
          {/* Calendar Header */}
          <rect x="290" y="80" width="220" height="40" rx="8" fill="#ffffffff" className="shadow-sm"/>
          <text x="380" y="105" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#64748B">2025</text>
          
          {/* Calendar Grid & Events */}
          <g transform="translate(290, 130)">
            {/* Horizontal timeline bar */}
            <rect x="0" y="0" width="220" height="150" fill="#FFFFFF" rx="8"/>
            {/* Days of the week */}
            <text x="15" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Mon</text>
            <text x="45" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Tue</text>
            <text x="75" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Wed</text>
            <text x="105" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Thu</text>
            <text x="135" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Fri</text>
            <text x="165" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Sat</text>
            <text x="195" y="20" fontFamily="Arial" fontSize="10" fill="#64748B">Sun</text>

            {/* Event lines and circles */}
            <rect x="0" y="25" width="220" height="1" fill="#E2E8F0"/>
            {/* Event 1 - Pink Note */}
            <rect x="15" y="35" width="70" height="10" rx="4" fill="#e76db2ff"/>
            <text x="17" y="43" fontFamily="Arial" fontSize="8" fill="#333333"></text>
            {/* Event 2 - Yellow Note */}
            <rect x="120" y="50" width="60" height="10" rx="4" fill="#efd87eff"/>
            <text x="122" y="58" fontFamily="Arial" fontSize="8" fill="#333333"></text>
            {/* Event 3 - Pink Note */}
            <rect x="50" y="70" width="80" height="10" rx="4" fill="#f06c00ff"/>
            <text x="52" y="78" fontFamily="Arial" fontSize="8" fill="#333333"></text>
            {/* Event 4 - Yellow Note */}
            <rect x="10" y="110" width="50" height="10" rx="4" fill="#2cbbf8ff" />
            {/* Event 4 - Yellow Note */}
            <rect x="130" y="90" width="50" height="10" rx="4" fill="#06ab3dff" />
            
            <rect x="70" y="125" width="50" height="10" rx="4" fill="#1555eaff"/>
            
          </g>
        </g>
        
      </svg>
    </div>
  );
};

export default PinItIllustration;