
import React from 'react';

interface FlipSheetProps {
  isFlipped: boolean;
  zIndex: number;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isActive: boolean;
  currentPageSide: 'front' | 'back';
}

const FlipSheet: React.FC<FlipSheetProps> = ({ 
  isFlipped, 
  zIndex, 
  frontContent, 
  backContent,
  isActive,
  currentPageSide
}) => {
  return (
    <div 
      className={`sheet ${isFlipped ? 'flipped' : ''} ${isActive ? 'active' : ''}`}
      style={{ 
        zIndex,
        pointerEvents: isActive ? 'auto' : 'none' 
      }}
    >
      <div 
        className="sheet-front paper-texture h-full w-full"
        style={{ 
          pointerEvents: (isActive && currentPageSide === 'front') ? 'auto' : 'none',
          visibility: isFlipped ? 'hidden' : 'visible'
        }}
      >
        <div className="spine-line" />
        <div className="page-fold-shadow" />
        {frontContent}
      </div>

      <div 
        className="sheet-back paper-texture h-full w-full"
        style={{ 
          pointerEvents: (isActive && currentPageSide === 'back') ? 'auto' : 'none',
          visibility: isFlipped ? 'visible' : 'hidden'
        }}
      >
        <div className="spine-line" style={{ left: 'auto', right: 0 }} />
        <div className="page-fold-shadow" style={{ left: 'auto', right: 0, background: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 100%)' }} />
        {backContent}
      </div>
    </div>
  );
};

export default FlipSheet;
