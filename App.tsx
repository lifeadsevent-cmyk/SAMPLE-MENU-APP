
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

  // Pagination dynamique : environ 8 plats par page pour garder de l'air
  const ITEMS_PER_PAGE = 8;

  const dynamicPages = useMemo(() => {
    const pages: React.ReactElement<any>[] = [];
    
    // Page de garde
    pages.push(<PageContent type="cover" />);

    // Groupement par catégories
    const categories: MenuItem['category'][] = [
      'Entrées', 'Pâtes', 'Pizzas', 'Viandes', 'Poulet', 'Poissons', 'Sandwiches', 'Desserts'
    ];

    categories.forEach(cat => {
      const catItems = MENU_ITEMS.filter(item => item.category === cat);
      if (catItems.length === 0) return;

      // Découpage en sous-pages pour cette catégorie
      for (let i = 0; i < catItems.length; i += ITEMS_PER_PAGE) {
        const chunk = catItems.slice(i, i + ITEMS_PER_PAGE);
        pages.push(
          <PageContent 
            type="menu" 
            title={cat} 
            items={chunk} 
            onItemClick={setSelectedItem} 
            isContinuation={i > 0}
          />
        );
      }
    });

    // Page de fin
    pages.push(<PageContent type="back" />);

    // On s'assure d'avoir un nombre pair de pages (pour compléter les feuilles)
    if (pages.length % 2 !== 0) {
      pages.push(<PageContent type="back" />);
    }

    return pages;
  }, [setSelectedItem]);

  const totalLogicalPages = dynamicPages.length;
  const totalSheets = totalLogicalPages / 2;

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
        {/* Navigation tactique invisible */}
        <div className="absolute inset-0 z-[150] flex pointer-events-none">
          <div 
            className={`w-[20%] h-full pointer-events-auto cursor-pointer flex items-center justify-start pl-4 group transition-opacity ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePrev(); }}
          >
            <div className="w-10 h-10 rounded-full bg-stone-900/90 border border-amber-600/30 flex items-center justify-center text-amber-500 shadow-2xl group-hover:bg-amber-600 group-hover:text-stone-950 transition-all">
              <ChevronLeft size={24} />
            </div>
          </div>
          <div className="flex-1 h-full pointer-events-none" />
          <div 
            className={`w-[20%] h-full pointer-events-auto cursor-pointer flex items-center justify-end pr-4 group transition-opacity ${currentPage === totalLogicalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}
          >
            <div className="w-10 h-10 rounded-full bg-stone-900/90 border border-amber-600/30 flex items-center justify-center text-amber-500 shadow-2xl group-hover:bg-amber-600 group-hover:text-stone-950 transition-all">
              <ChevronRight size={24} />
            </div>
          </div>
        </div>

        {/* Le Livre 3D */}
        <div className="book-viewport z-[50]">
          <div className="book-canvas" style={{ transform: canvasTranslation }}>
            {Array.from({ length: totalSheets }).map((_, idx) => {
              const isFlipped = currentPage > (idx * 2);
              const isCurrentlyInView = Math.floor(currentPage / 2) === idx;
              
              let zIndex = isFlipped ? idx : totalSheets - idx;
              if (isCurrentlyInView) zIndex = 100;

              return (
                <FlipSheet 
                  key={idx}
                  isFlipped={isFlipped}
                  isActive={isCurrentlyInView}
                  currentPageSide={isBackSide ? 'back' : 'front'}
                  zIndex={zIndex}
                  frontContent={React.cloneElement(dynamicPages[idx * 2], { isActive: isCurrentlyInView && !isBackSide })}
                  backContent={React.cloneElement(dynamicPages[idx * 2 + 1], { isActive: isCurrentlyInView && isBackSide })}
                />
              );
            })}
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col items-center gap-4 pb-6 z-[100]">
        <div className="flex items-center justify-center gap-2 max-w-full overflow-x-auto no-scrollbar px-4">
           {Array.from({ length: totalLogicalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-stone-800'
                }`}
              />
            ))}
        </div>
        <div className="text-[9px] text-stone-600 tracking-[0.4em] uppercase font-light">
          Menu Prestige — Page {currentPage + 1}
        </div>
      </footer>

      <AIAssistant />
      <ExpandedImage item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
