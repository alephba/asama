
import React from 'react';

interface AsamaLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'light' | 'dark';
}

const AsamaLogo: React.FC<AsamaLogoProps> = ({ variant = 'light', ...props }) => {
  const color = variant === 'light' ? 'currentColor' : '#0a0a0a';

  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Asama Logo"
      {...props}
    >
      <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="2" />
      <path 
        d="M5 20C10 10, 15 10, 20 20S30 30, 35 20" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default AsamaLogo;
