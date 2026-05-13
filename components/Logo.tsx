import React from "react";

export const Logo = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    style={style} // <--- Added style prop here
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M100 20L169.282 60V140L100 180L30.718 140V60L100 20Z" fill="#09090B" />
    <path d="M75 65V135" stroke="#ffffff" strokeWidth="12" strokeLinecap="round"/>
    <path d="M75 65H110C123.807 65 135 76.1929 135 90C135 103.807 123.807 115 110 115H75" stroke="#ffffff" strokeWidth="12" strokeLinecap="round"/>
    <path d="M105 115L135 145" stroke="#ffffff" strokeWidth="12" strokeLinecap="round"/>
    <path d="M100 20L169.282 60V140L100 180L30.718 140V60L100 20Z" stroke="#484849" strokeWidth="2"/>
    <circle cx="100" cy="20" r="6" fill="#c8a96e" />
    <circle cx="169.282" cy="60" r="6" fill="#60a5fa" />
    <circle cx="169.282" cy="140" r="6" fill="#34d399" />
  </svg>
);