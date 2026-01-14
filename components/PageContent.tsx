
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
  // Sécurité pour les événements
  const handleItemClick = (e: React.MouseEvent, item: MenuItem) => {
    if (!isActive || !onItemClick) return;
    e.preventDefault();
    e.stopPropagation();
    onItemClick(item);
  };

  if (type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-stone-900 relative pointer-events-none">
        <div className="absolute inset-4 border border-amber-600/10"></div>
        <div className="w-12 h-12 mb-4 border border-amber-500/30 flex items-center justify-center rotate-45 bg-stone-950/50">
          <span className="text-2xl font-serif text-amber-500 -rotate-45 italic">E</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-serif text-amber-500 tracking-[0.2em] mb-2 uppercase leading-tight">
          L'Éclat<br/><span className="text-xl md:text-2xl">d'Or</span>
        </h1>
        <div className="w-8 h-[1px] bg-amber-600/40 mb-4"></div>
        <p className="text-amber-600/60 uppercase tracking-[0.4em] text-[7px] font-medium mb-6">Menu Prestige</p>
        <div className="italic text-stone-400 text-[10px] font-light max-w-[140px] leading-relaxed">
          "L'excellence au service du goût."
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="h-full w-full flex flex-col p-5 md:p-6 bg-stone-900 relative">
        <div className="mb-4 text-center">
          <h2 className="text-lg font-serif text-amber-500 tracking-[0.1em] uppercase">
            {title} {isContinuation && <span className="text-[9px] lowercase opacity-40 italic ml-1">(suite)</span>}
          </h2>
          <div className="h-[1px] w-12 bg-amber-900/30 mx-auto mt-1"></div>
        </div>
        
        <div className="flex-1 space-y-3 overflow-y-auto no-scrollbar py-1">
          {items?.map((item) => (
            <div 
              key={item.id} 
              className={`w-full group relative ${isActive ? 'cursor-pointer pointer-events-auto' : 'pointer-events-none opacity-90'}`}
              onClick={(e) => handleItemClick(e, item)}
            >
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="text-[12px] font-serif text-amber-100 group-hover:text-amber-400 transition-colors uppercase tracking-tight flex-shrink-0 max-w-[75%]">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-stone-800 mb-1"></div>
                <span className="text-amber-500 font-serif text-[11px] whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-stone-500 text-[9px] leading-tight italic font-light line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-2 border-t border-amber-900/10 text-center">
           <span className="text-[6px] tracking-[0.4em] text-amber-900/40 uppercase font-serif">Signature Marrakech</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-stone-950 pointer-events-none">
      <div className="w-8 h-8 mb-4 border border-amber-900/30 flex items-center justify-center rotate-45">
        <span className="text-lg font-serif text-amber-900 -rotate-45">✦</span>
      </div>
      <div className="space-y-4 text-stone-600 text-[8px] tracking-[0.2em] font-light">
        <p className="text-amber-900/60 uppercase tracking-[0.3em] font-bold">L'Éclat d'Or</p>
        <p>Ouvert tous les jours de 12h à 23h</p>
      </div>
    </div>
  );
};

export default PageContent;
