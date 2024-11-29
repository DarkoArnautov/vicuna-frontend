import React from "react";

interface SummaryProps extends React.SVGProps<SVGSVGElement> {}

export const Bookmark: React.FC<SummaryProps> = (props) => {
  return (
    <svg
      width="40"
      height="44"
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_9_6387)">
        <path d="M4 0V36L20 32.0625L36 36V0H4Z" fill="#EBFDE8" />
      </g>
      <defs>
        <filter
          id="filter0_d_9_6387"
          x="0"
          y="0"
          width="40"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_6387"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_6387"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
