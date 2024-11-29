import React from "react";

interface WalletProps extends React.SVGProps<SVGSVGElement> {}

export const Wallet: React.FC<WalletProps> = (props) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.6523 7.26329H18.4672C18.465 9.01437 19.1133 10.7038 20.2864 12.0039H22.0286C21.291 11.4531 20.6921 10.7377 20.2796 9.91471C19.8671 9.09174 19.6523 8.18387 19.6523 7.26329ZM25.5781 0.152348C24.2048 0.150903 22.8605 0.547565 21.7079 1.29432C20.5553 2.04107 19.6439 3.1059 19.084 4.35991C18.5241 5.61392 18.3397 7.00334 18.5531 8.35999C18.7665 9.71664 19.3685 10.9824 20.2864 12.0039C20.6883 12.4577 21.1486 12.8563 21.6552 13.1891C22.7077 13.8882 23.9277 14.2936 25.1893 14.3634C26.4509 14.4332 27.7082 14.1649 28.8314 13.5861C30.2494 12.8564 31.3809 11.6712 32.0442 10.2209C32.7075 8.77068 32.864 7.13955 32.4887 5.58961C32.1133 4.03967 31.2279 2.66089 29.9746 1.67478C28.7213 0.688673 27.1729 0.152481 25.5781 0.152348ZM28.0492 12.6439C27.2752 13.0039 26.4317 13.19 25.5781 13.1891C25.424 13.1891 25.27 13.1832 25.1218 13.1713C23.6345 13.0541 22.2459 12.3811 21.2324 11.2863C20.2188 10.1915 19.6547 8.75521 19.6523 7.26329C19.6514 6.19939 19.9368 5.15485 20.4788 4.23933C21.0207 3.3238 21.7992 2.57107 22.7324 2.06016C23.6656 1.54924 24.7191 1.29898 25.7824 1.33566C26.8457 1.37233 27.8794 1.69459 28.7752 2.26859C29.671 2.8426 30.3957 3.64718 30.8733 4.59787C31.3509 5.54855 31.5637 6.61029 31.4894 7.6716C31.4152 8.73291 31.0565 9.75465 30.4512 10.6296C29.8459 11.5045 29.0162 12.2003 28.0492 12.6439Z"
        fill="#82D1DF"
      />
      <path
        d="M29.7256 17.9297H23.7998C22.6997 17.9297 21.6446 18.3667 20.8667 19.1446C20.0888 19.9225 19.6517 20.9776 19.6517 22.0777C19.6517 23.1779 20.0888 24.2329 20.8667 25.0109C21.6446 25.7888 22.6997 26.2258 23.7998 26.2258H29.7256C29.8827 26.2258 30.0335 26.1634 30.1446 26.0522C30.2557 25.9411 30.3182 25.7904 30.3182 25.6332V18.5223C30.3182 18.3651 30.2557 18.2144 30.1446 18.1032C30.0335 17.9921 29.8827 17.9297 29.7256 17.9297ZM24.9849 23.8555C24.6333 23.8555 24.2896 23.7512 23.9973 23.5559C23.7049 23.3605 23.4771 23.0829 23.3425 22.758C23.208 22.4332 23.1728 22.0758 23.2414 21.7309C23.31 21.3861 23.4793 21.0693 23.7279 20.8207C23.9765 20.5721 24.2933 20.4028 24.6381 20.3342C24.983 20.2656 25.3404 20.3008 25.6653 20.4353C25.9901 20.5699 26.2677 20.7977 26.4631 21.0901C26.6584 21.3824 26.7627 21.7261 26.7627 22.0777C26.7613 22.5488 26.5735 23.0002 26.2404 23.3332C25.9074 23.6663 25.456 23.8541 24.9849 23.8555Z"
        fill="#82D1DF"
      />
      <path
        d="M29.1351 10.8188C28.978 10.8188 28.8272 10.7563 28.7161 10.6452C28.605 10.5341 28.5425 10.3833 28.5425 10.2262C28.5408 8.65509 27.9159 7.14885 26.805 6.03792C25.6941 4.92699 24.1878 4.30212 22.6167 4.30039C22.4596 4.30039 22.3089 4.23796 22.1977 4.12683C22.0866 4.0157 22.0242 3.86498 22.0242 3.70781C22.0242 3.55065 22.0866 3.39993 22.1977 3.2888C22.3089 3.17767 22.4596 3.11523 22.6167 3.11523C24.5021 3.11727 26.3096 3.86712 27.6427 5.20023C28.9758 6.53335 29.7257 8.34087 29.7277 10.2262C29.7277 10.3833 29.6653 10.5341 29.5541 10.6452C29.443 10.7563 29.2923 10.8188 29.1351 10.8188Z"
        fill="#82D1DF"
      />
      <path
        d="M26.7648 10.8195C26.6076 10.8195 26.4569 10.7571 26.3458 10.646C26.2347 10.5348 26.1722 10.3841 26.1722 10.227C26.1713 9.28428 25.7964 8.38048 25.1298 7.7139C24.4632 7.04732 23.5594 6.67243 22.6167 6.67149C22.4596 6.67149 22.3089 6.60905 22.1977 6.49792C22.0866 6.38679 22.0242 6.23607 22.0242 6.07891C22.0242 5.92175 22.0866 5.77102 22.1977 5.65989C22.3089 5.54876 22.4596 5.48633 22.6167 5.48633C23.8736 5.48774 25.0786 5.98765 25.9673 6.87639C26.8561 7.76512 27.356 8.9701 27.3574 10.227C27.3574 10.3841 27.2949 10.5348 27.1838 10.646C27.0727 10.7571 26.922 10.8195 26.7648 10.8195Z"
        fill="#82D1DF"
      />
      <path
        d="M24.3945 10.8184C24.2373 10.8184 24.0866 10.7559 23.9755 10.6448C23.8643 10.5337 23.8019 10.3829 23.8019 10.2258C23.8019 9.91146 23.677 9.61001 23.4548 9.38775C23.2325 9.16549 22.9311 9.04063 22.6167 9.04063C22.4596 9.04063 22.3089 8.97819 22.1977 8.86706C22.0866 8.75593 22.0242 8.60521 22.0242 8.44805C22.0242 8.29089 22.0866 8.14016 22.1977 8.02903C22.3089 7.9179 22.4596 7.85547 22.6167 7.85547C23.2454 7.85547 23.8483 8.1052 24.2928 8.54972C24.7373 8.99424 24.9871 9.59714 24.9871 10.2258C24.9871 10.3829 24.9246 10.5337 24.8135 10.6448C24.7024 10.7559 24.5516 10.8184 24.3945 10.8184Z"
        fill="#82D1DF"
      />
      <path
        d="M23.8014 16.7445H29.1346V14.8246C29.1358 14.3934 29.0321 13.9683 28.8324 13.5861C28.6427 13.2193 28.3758 12.8978 28.0502 12.6439C27.2762 13.0039 26.4327 13.19 25.5791 13.1891C25.425 13.1891 25.271 13.1831 25.1228 13.1713C24.0013 13.0862 22.9277 12.681 22.0296 12.0039H4.24627C4.04613 12.0057 3.84671 11.9798 3.65369 11.9269C3.09667 11.7813 2.61167 11.438 2.28925 10.961C1.96684 10.484 1.82906 9.90595 1.90163 9.33481C1.9742 8.76367 2.25217 8.23846 2.68363 7.85726C3.11508 7.47606 3.67054 7.26493 4.24627 7.26328H19.6533C19.6531 6.86526 19.6928 6.46822 19.7718 6.07812H4.24627C3.3033 6.07812 2.39895 6.45272 1.73217 7.1195C1.06539 7.78628 0.690796 8.69063 0.690796 9.6336V29.7813C0.692672 30.4094 0.943003 31.0112 1.38712 31.4553C1.83123 31.8994 2.43304 32.1497 3.06111 32.1516H26.1717C26.9382 32.169 27.6804 31.8819 28.2357 31.3532C28.791 30.8245 29.1142 30.0974 29.1346 29.3309V27.411H23.9916C22.6167 27.4292 21.2855 26.9281 20.264 26.0078C19.2424 25.0875 18.6055 23.8157 18.4806 22.4463C18.4311 21.7169 18.5319 20.985 18.7768 20.2961C19.0217 19.6072 19.4055 18.9759 19.9043 18.4414C20.4031 17.9069 21.0064 17.4804 21.6767 17.1885C22.3471 16.8967 23.0702 16.7455 23.8014 16.7445Z"
        fill="#82D1DF"
      />
    </svg>
  );
};