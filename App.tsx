
import React, { useState, useMemo } from 'react';
import { Share2, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import PageContent from './components/PageContent';
import FlipSheet from './components/FlipSheet';
import ExpandedImage from './components/ExpandedImage';
import AIAssistant from './components/AIAssistant';
import { MenuItem } from './types';
import { MENU_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const sheets = useMemo(() => [
    {
      front: <PageContent type="cover" />,
      back: <PageContent 
        type="menu" 
        title="Entrées" 
        items={MENU_ITEMS.filter(i => i.category === 'Entrées')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Pâtes" 
        items={MENU_ITEMS.filter(i => i.category === 'Pâtes')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent 
        type="menu" 
        title="Pizzas" 
        items={MENU_ITEMS.filter(i => i.category === 'Pizzas')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Viandes" 
        items={MENU_ITEMS.filter(i => i.category === 'Viandes')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent 
        type="menu" 
        title="Poulet" 
        items={MENU_ITEMS.filter(i => i.category === 'Poulet')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Poissons" 
        items={MENU_ITEMS.filter(i => i.category === 'Poissons')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent 
        type="menu" 
        title="Sandwiches" 
        items={MENU_ITEMS.filter(i => i.category === 'Sandwiches')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Desserts" 
        items={MENU_ITEMS.filter(i => i.category === 'Desserts')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent type="back" />
    }
  ], []);

  const totalSheets = sheets.length;
  const totalLogicalPages = totalSheets * 2;

  const handleNext = () => {
    if (currentPage < totalLogicalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const isBackSide = currentPage % 2 !== 0;
  const canvasTranslation = isBackSide ? 'translateX(50%)' : 'translateX(-50%)';

  return (
    <div className="h-screen w-screen bg-stone-950 flex flex-col items-center justify-between p-4 overflow-hidden safe-area-inset touch-none">
      {/* Décoration de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/5 rounded-full blur-[120px]"></div>
      </div>

      <header className="w-full flex justify-between items-center py-2 z-[100]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 border border-amber-600/40 flex items-center justify-center text-amber-500 font-serif text-lg bg-stone-900/50 shadow-inner">E</div>
          <div>
            <h1 className="text-amber-500 font-serif text-sm tracking-[0.2em] uppercase leading-none mb-1">L'Éclat d'Or</h1>
            <p className="text-[8px] text-stone-500 tracking-[0.3em] uppercase">Marrakech</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-stone-500 hover:text-amber-500 transition-colors" aria-label="Partager"><Share2 size={20} /></button>
          <button className="p-2 text-stone-500 hover:text-amber-500 transition-colors" aria-label="Informations"><Info size={20} /></button>
        </div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center relative z-20 overflow-visible">
        {/* Zones de navigation invisibles pour le toucher */}
        <div className="absolute inset-0 z-[150] flex pointer-events-none">
          <div 
            className={`w-[25%] h-full pointer-events-auto cursor-pointer flex items-center justify-start pl-4 group transition-opacity ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation(); 
              handlePrev(); 
            }}
          >
            <div className="w-12 h-12 rounded-full bg-stone-900/90 border border-amber-600/30 flex items-center justify-center text-amber-500 shadow-2xl group-hover:bg-amber-600 group-hover:text-stone-950 transition-all duration-300">
              <ChevronLeft size={28} />
            </div>
          </div>

          <div className="flex-1 h-full pointer-events-none" />

          <div 
            className={`w-[25%] h-full pointer-events-auto cursor-pointer flex items-center justify-end pr-4 group transition-opacity ${currentPage === totalLogicalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation(); 
              handleNext(); 
            }}
          >
            <div className="w-12 h-12 rounded-full bg-stone-900/90 border border-amber-600/30 flex items-center justify-center text-amber-500 shadow-2xl group-hover:bg-amber-600 group-hover:text-stone-950 transition-all duration-300">
              <ChevronRight size={28} />
            </div>
          </div>
        </div>

        {/* Le Livre 3D */}
        <div className="book-viewport z-[50]">
          <div 
            className="book-canvas"
            style={{ transform: canvasTranslation }}
          >
            {sheets.map((sheet, idx) => {
              const isFlipped = currentPage > (idx * 2);
              const isCurrentlyInView = Math.floor(currentPage / 2) === idx;
              
              // Logique de Z-index cruciale pour éviter les clics fantômes
              let zIndex = isFlipped ? idx : totalSheets - idx;
              if (isCurrentlyInView) zIndex = 100; // Priorité maximale à la page vue

              return (
                <FlipSheet 
                  key={idx}
                  isFlipped={isFlipped}
                  isActive={isCurrentlyInView}
                  currentPageSide={isBackSide ? 'back' : 'front'}
                  zIndex={zIndex}
                  // Fix: Using React.ReactElement<any> to resolve TypeScript overload matching errors when passing custom props like 'isActive' in cloneElement
                  frontContent={React.cloneElement(sheet.front as React.ReactElement<any>, { isActive: isCurrentlyInView && !isBackSide })}
                  backContent={React.cloneElement(sheet.back as React.ReactElement<any>, { isActive: isCurrentlyInView && isBackSide })}
                />
              );
            })}
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col items-center gap-6 pb-10 z-[100]">
        <div className="flex items-center justify-center gap-4">
           {Array.from({ length: totalLogicalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentPage === idx ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-2 bg-stone-800 hover:bg-stone-600'
                }`}
                aria-label={`Aller à la page ${idx + 1}`}
              />
            ))}
        </div>
        
        <div className="text-[10px] text-stone-600 tracking-[0.5em] uppercase font-light">
          Page {currentPage + 1} sur {totalLogicalPages}
        </div>
      </footer>

      {/* Assistant IA Flottant */}
      <AIAssistant />

      {/* Modal Image Agrandie */}
      <ExpandedImage item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
