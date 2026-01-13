
import React from 'react';
import { MenuItem } from '../types';

interface PageContentProps {
  type: 'cover' | 'menu' | 'back';
  title?: string;
  items?: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
}

const PageContent: React.FC<PageContentProps> = ({ type, title, items, onItemClick }) => {
  if (type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-stone-900 relative overflow-hidden pointer-events-none">
        <div className="absolute inset-4 border border-amber-600/10 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 mb-8 border border-amber-500/30 flex items-center justify-center rotate-45 bg-stone-950/50 backdrop-blur-sm shadow-2xl">
            <span className="text-4xl font-serif text-amber-500 -rotate-45">E</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-500 tracking-[0.2em] mb-4 uppercase leading-tight drop-shadow-lg">
            L'Éclat<br/><span className="text-3xl md:text-4xl">d'Or</span>
          </h1>
          <div className="w-16 h-[1px] bg-amber-600/40 mb-6"></div>
          <p className="text-amber-600/60 uppercase tracking-[0.4em] text-[10px] font-medium mb-10">Gastronomie Marocaine</p>
          <div className="italic text-stone-400 text-sm font-light max-w-[220px] leading-relaxed">
            "Une symphonie de saveurs, un voyage pour l'esprit."
          </div>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
           <div className="text-[9px] text-amber-700/60 uppercase tracking-[0.3em] font-medium">Ouvrir le menu</div>
           <div className="w-1 h-8 bg-gradient-to-b from-amber-600/50 to-transparent"></div>
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="h-full w-full flex flex-col p-8 md:p-12 bg-stone-900 relative overflow-hidden">
        <div className="mb-10 relative pointer-events-none">
          <h2 className="text-3xl font-serif text-amber-500 tracking-[0.1em] text-center uppercase">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-900/50"></div>
            <div className="w-2 h-2 border border-amber-700/50 rotate-45"></div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-900/50"></div>
          </div>
        </div>
        
        <div className="flex-1 space-y-10 overflow-y-auto no-scrollbar py-2 relative z-[100]">
          {items?.map((item) => (
            <button 
              key={item.id} 
              className="w-full text-left group cursor-pointer active:scale-[0.99] transition-all relative block focus:outline-none pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onItemClick) {
                  onItemClick(item);
                }
              }}
            >
              <div className="flex justify-between items-baseline gap-3 mb-2">
                <h3 className="text-xl font-serif text-amber-100 group-hover:text-amber-400 transition-colors leading-tight uppercase tracking-wide">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-amber-900/30 mb-2"></div>
                <span className="text-amber-500 font-serif text-xl whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed italic font-light pr-12 group-hover:text-stone-400 transition-colors">
                {item.description}
              </p>
            </button>
          ))}
        </div>
        
        <div className="mt-10 pt-6 flex justify-center border-t border-amber-900/10 opacity-30 pointer-events-none">
           <div className="text-[9px] tracking-[0.5em] text-amber-800/50 font-serif uppercase">L'Éclat d'Or — Menu Prestige</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12 text-center bg-stone-950 border border-amber-900/20 pointer-events-none">
      <div className="w-16 h-16 mb-10 border border-amber-900/40 flex items-center justify-center rotate-45">
        <span className="text-2xl font-serif text-amber-700 -rotate-45 italic">Fin</span>
      </div>
      <div className="space-y-8 text-stone-500 text-[11px] font-light tracking-[0.2em]">
        <div>
          <p className="text-amber-800 uppercase text-[9px] mb-3 tracking-[0.3em] font-bold">L'Adresse</p>
          <p>Angle Rue de la Liberté & Av. Mohammed V<br/>Guéliz, Marrakech</p>
        </div>
        <div className="w-12 h-[1px] bg-amber-900/30 mx-auto"></div>
        <div>
          <p className="text-amber-800 uppercase text-[9px] mb-3 tracking-[0.3em] font-bold">Le Voyage Continue</p>
          <p>Suivez-nous @EclatDOrMarrakech</p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
