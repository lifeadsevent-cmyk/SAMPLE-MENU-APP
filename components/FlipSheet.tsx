
import React from 'react';

interface FlipSheetProps {
  isFlipped: boolean;
  zIndex: number;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isActive: boolean;
}

const FlipSheet: React.FC<FlipSheetProps> = ({ 
  isFlipped, 
  zIndex, 
  frontContent, 
  backContent,
  isActive
}) => {
  return (
    <div 
      className={`sheet ${isFlipped ? 'flipped' : ''} ${isActive ? 'active' : ''}`}
      style={{ 
        zIndex,
        pointerEvents: isActive ? 'auto' : 'none' 
      }}
    >
      <div className="sheet-front paper-texture h-full w-full">
        <div className="spine-line" />
        <div className="page-fold-shadow" />
        {frontContent}
      </div>

      <div className="sheet-back paper-texture h-full w-full">
        {/* Pour le verso, la reliure et l'ombre sont à droite car la page est retournée */}
        <div className="spine-line" style={{ left: 'auto', right: 0 }} />
        <div className="page-fold-shadow" style={{ left: 'auto', right: 0, background: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 100%)' }} />
        {backContent}
      </div>
    </div>
  );
};

export default FlipSheet;
