import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SpidaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const SpidaLogo: React.FC<SpidaLogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true
}) => {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div 
      className={`flex items-center space-x-2 cursor-pointer ${className}`}
      onClick={handleLogoClick}
    >
      {/* Logo Symbol */}
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" className="w-full h-full">
          <path d="M 1022 152 L 976 153 L 923 158 L 865 168 L 811 182 L 752 203 L 695 230 L 659 251 L 620 278 L 578 313 L 546 345 L 511 387 L 482 430 L 459 472 L 438 521 L 423 568 L 413 612 L 408 611 L 388 576 L 358 543 L 320 515 L 278 494 L 233 479 L 177 468 L 134 464 L 58 464 L 57 686 L 112 692 L 164 706 L 204 725 L 234 747 L 263 779 L 286 819 L 302 864 L 315 930 L 553 930 L 559 885 L 574 811 L 589 755 L 607 702 L 625 659 L 647 616 L 673 575 L 704 536 L 736 504 L 762 483 L 794 462 L 834 442 L 879 426 L 922 416 L 966 410 L 1022 408 Z" fill="#09332c" stroke="none"/>
          <path d="M 57 149 L 57 178 L 63 220 L 71 255 L 80 282 L 95 313 L 108 332 L 130 355 L 143 365 L 165 378 L 186 387 L 242 402 L 323 411 L 417 413 L 415 375 L 410 338 L 395 287 L 371 245 L 348 220 L 332 207 L 288 182 L 259 171 L 226 162 L 188 155 L 141 150 Z" fill="#09332c" stroke="none"/>
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold text-foreground ${textSizeClasses[size]}`}>
          Spida
        </span>
      )}
    </div>
  );
};

export default SpidaLogo;
