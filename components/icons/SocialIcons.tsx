
import React from 'react';

// Fix: Explicitly type iconProps to satisfy SVG property types for strokeLinecap and strokeLinejoin.
const iconProps: React.SVGProps<SVGSVGElement> = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const VimeoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M2.57 6.32a6.46 6.46 0 0 1 5.03-3.08 7.33 7.33 0 0 1 7.23 2.15 11.23 11.23 0 0 1 2.3 5.48c.18 2.3-1.22 4.4-2.82 5.56-1.8 1.3-4.12 1.9-6.32 1.6-2.5-.3-4.9-1.5-6.6-3.2a5.7 5.7 0 0 1-1.3-2.18c-.4-1.3-.2-2.8.5-4.04.7-1.3 1.8-2.3 3.1-2.9z"></path>
    <path d="M14.46 16.68a2.6 2.6 0 0 0-2.08-1.72c-1.5-.2-2.8-.7-4.2-1.2-.5-.1-1-.3-1.5-.4-.3-.1-.6 0-.7.3-.1.4 0 .8.2 1.1.5 1.1 1.2 2 2.1 2.8.5.5 1.1.9 1.8 1.1a3.4 3.4 0 0 0 2.8-.3c1-.6 1.7-1.5 2-2.5a2.4 2.4 0 0 0 .3-1.2z"></path>
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
