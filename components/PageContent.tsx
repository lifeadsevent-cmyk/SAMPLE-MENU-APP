
import React from 'react';
import { MenuItem } from '../types';

interface PageContentProps {
  type: 'cover' | 'menu' | 'back';
  title?: string;
  items?: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
  isActive?: boolean;
  isContinuation?: boolean;
}

const PageContent: React.FC<PageContentProps> = ({ 
  type, 
  title, 
  items, 
  onItemClick, 
  isActive = true,
  isContinuation = false
}) => {
  if (type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-stone-900 relative overflow-hidden pointer-events-none">
        <div className="absolute inset-4 border border-amber-600/10 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 mb-6 border border-amber-500/30 flex items-center justify-center rotate-45 bg-stone-950/50 backdrop-blur-sm shadow-2xl">
            <span className="text-3xl font-serif text-amber-500 -rotate-45">E</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-amber-500 tracking-[0.2em] mb-3 uppercase leading-tight drop-shadow-lg">
            L'Éclat<br/><span className="text-2xl md:text-3xl">d'Or</span>
          </h1>
          <div className="w-12 h-[1px] bg-amber-600/40 mb-4"></div>
          <p className="text-amber-600/60 uppercase tracking-[0.4em] text-[8px] font-medium mb-8">Gastronomie & Excellence</p>
          <div className="italic text-stone-400 text-xs font-light max-w-[180px] leading-relaxed">
            "Une symphonie de saveurs, un voyage pour l'esprit."
          </div>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
           <div className="text-[8px] text-amber-700/60 uppercase tracking-[0.3em] font-medium">Ouvrir le menu</div>
           <div className="w-[1px] h-6 bg-gradient-to-b from-amber-600/50 to-transparent"></div>
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="h-full w-full flex flex-col p-6 md:p-8 bg-stone-900 relative overflow-hidden">
        <div className="mb-6 relative pointer-events-none">
          <h2 className="text-xl font-serif text-amber-500 tracking-[0.15em] text-center uppercase">
            {title} {isContinuation && <span className="text-[10px] lowercase italic opacity-50 ml-2">(suite)</span>}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-900/50"></div>
            <div className="w-1.5 h-1.5 border border-amber-700/50 rotate-45"></div>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-900/50"></div>
          </div>
        </div>
        
        <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar py-1 relative z-[100]">
          {items?.map((item) => (
            <button 
              key={item.id} 
              disabled={!isActive}
              className={`w-full text-left group transition-all relative block focus:outline-none ${isActive ? 'cursor-pointer active:scale-[0.98] pointer-events-auto' : 'pointer-events-none'}`}
              onClick={(e) => {
                if (!isActive) return;
                e.preventDefault();
                e.stopPropagation();
                if (onItemClick) onItemClick(item);
              }}
            >
              <div className="flex justify-between items-baseline gap-2 mb-0.5">
                <h3 className="text-sm font-serif text-amber-50/90 group-hover:text-amber-400 transition-colors uppercase tracking-wide leading-tight flex-shrink-0 max-w-[70%]">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-amber-900/20 mb-1"></div>
                <span className="text-amber-500 font-serif text-sm whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-stone-500 text-[10px] md:text-[11px] leading-tight italic font-light pr-4 group-hover:text-stone-400 transition-colors">
                {item.description}
              </p>
            </button>
          ))}
        </div>
        
        <div className="mt-4 pt-4 flex justify-center border-t border-amber-900/10 opacity-30 pointer-events-none">
           <div className="text-[7px] tracking-[0.5em] text-amber-800/50 font-serif uppercase">L'Éclat d'Or</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-stone-950 border border-amber-900/20 pointer-events-none">
      <div className="w-12 h-12 mb-8 border border-amber-900/40 flex items-center justify-center rotate-45">
        <span className="text-xl font-serif text-amber-700 -rotate-45 italic">Fin</span>
      </div>
      <div className="space-y-6 text-stone-500 text-[9px] font-light tracking-[0.2em]">
        <div>
          <p className="text-amber-800 uppercase text-[8px] mb-2 tracking-[0.3em] font-bold">L'Adresse</p>
          <p>Angle Rue de la Liberté & Av. Mohammed V<br/>Guéliz, Marrakech</p>
        </div>
        <div className="w-8 h-[1px] bg-amber-900/30 mx-auto"></div>
        <div>
          <p className="text-amber-800 uppercase text-[8px] mb-2 tracking-[0.3em] font-bold">Réservations</p>
          <p>+212 (0) 5 24 XX XX XX</p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
