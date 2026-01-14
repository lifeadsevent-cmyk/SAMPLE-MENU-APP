
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

  // Pagination dense : environ 10 plats par page
  const ITEMS_PER_PAGE = 10;

  const dynamicPages = useMemo(() => {
    const pages: React.ReactElement<any>[] = [];
    
    // Page de garde
    pages.push(<PageContent type="cover" />);

    // Liste des catégories ordonnées
    const categories: MenuItem['category'][] = [
      'Entrées', 'Pâtes', 'Pizzas', 'Viandes', 'Poulet', 'Poissons', 'Sandwiches', 'Desserts'
    ];

    categories.forEach(cat => {
      const catItems = MENU_ITEMS.filter(item => item.category === cat);
      if (catItems.length === 0) return;

      // Découpage automatique des catégories en plusieurs pages si nécessaire
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

    // Page finale
    pages.push(<PageContent type="back" />);

    // Assurer un nombre pair de pages pour les feuilles physiques
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
  // Décalage du livre pour qu'il s'ouvre harmonieusement
  const canvasTranslation = isBackSide ? 'translateX(50%)' : 'translateX(-50%)';

  return (
    <div className="h-screen w-screen bg-stone-950 flex flex-col items-center justify-between p-4 overflow-hidden safe-area-inset touch-none">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[150px]"></div>
      </div>

      <header className="w-full flex justify-between items-center py-2 z-[100]">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 border border-amber-600/40 flex items-center justify-center text-amber-500 font-serif text-sm bg-stone-900/50">E</div>
          <div>
            <h1 className="text-amber-500 font-serif text-xs tracking-[0.2em] uppercase leading-none mb-1">L'Éclat d'Or</h1>
            <p className="text-[7px] text-stone-500 tracking-[0.3em] uppercase">Gastronomie</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2 text-stone-500 hover:text-amber-500 transition-colors"><Share2 size={16} /></button>
          <button className="p-2 text-stone-500 hover:text-amber-500 transition-colors"><Info size={16} /></button>
        </div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center relative z-20 overflow-visible">
        {/* Navigation Tactique Zones Clivables */}
        <div className="absolute inset-0 z-[150] flex pointer-events-none">
          <div 
            className={`w-[15%] h-full pointer-events-auto cursor-pointer flex items-center justify-start pl-2 ${currentPage === 0 ? 'opacity-0' : 'opacity-100'}`}
            onClick={handlePrev}
          >
            <div className="w-8 h-8 rounded-full bg-stone-900/80 border border-amber-600/20 flex items-center justify-center text-amber-500">
              <ChevronLeft size={20} />
            </div>
          </div>
          <div className="flex-1 h-full pointer-events-none" />
          <div 
            className={`w-[15%] h-full pointer-events-auto cursor-pointer flex items-center justify-end pr-2 ${currentPage === totalLogicalPages - 1 ? 'opacity-0' : 'opacity-100'}`}
            onClick={handleNext}
          >
            <div className="w-8 h-8 rounded-full bg-stone-900/80 border border-amber-600/20 flex items-center justify-center text-amber-500">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>

        {/* Flipbook 3D */}
        <div className="book-viewport">
          <div className="book-canvas" style={{ transform: canvasTranslation }}>
            {Array.from({ length: totalSheets }).map((_, idx) => {
              const sheetIndex = idx;
              const isFlipped = currentPage > (sheetIndex * 2);
              const isCurrentlyInView = Math.floor(currentPage / 2) === sheetIndex;
              
              // Z-Index critique pour le déploiement mobile
              let zIndex = isFlipped ? sheetIndex : totalSheets - sheetIndex;
              if (isCurrentlyInView) zIndex = 200;

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

      <footer className="w-full flex flex-col items-center gap-3 pb-4 z-[100]">
        <div className="flex items-center justify-center gap-1.5 max-w-[80vw] overflow-x-auto no-scrollbar py-2">
           {Array.from({ length: totalLogicalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'w-4 bg-amber-500' : 'w-1 bg-stone-800'
                }`}
              />
            ))}
        </div>
        <div className="text-[8px] text-stone-600 tracking-[0.4em] uppercase font-light">
          L'Éclat d'Or — Page {currentPage + 1} / {totalLogicalPages}
        </div>
      </footer>

      <AIAssistant />
      <ExpandedImage item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
