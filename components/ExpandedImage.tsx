
import React, { useEffect, useState } from 'react';
import { ChefHat, Sparkles, UtensilsCrossed, X } from 'lucide-react';
import { MenuItem } from '../types';
import { getChefRecommendation } from '../services/geminiService';

interface ExpandedImageProps {
  item: MenuItem | null;
  onClose: () => void;
}

const ExpandedImage: React.FC<ExpandedImageProps> = ({ item, onClose }) => {
  const [recommendation, setRecommendation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setLoading(true);
      getChefRecommendation(item.name).then(res => {
        setRecommendation(res);
        setLoading(false);
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-[500] flex items-center justify-center animate-in fade-in duration-500 cursor-pointer"
      onClick={onClose} // Ferme au clic n'importe où sur l'overlay
    >
      {/* Background sombre et flou */}
      <div className="absolute inset-0 bg-stone-950/98 backdrop-blur-xl" />
      
      {/* Conteneur principal */}
      <div className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto no-scrollbar bg-transparent">
        
        {/* Section Image - 50% de l'écran */}
        <div className="w-full md:w-1/2 h-[45vh] md:h-screen relative overflow-hidden shrink-0 pointer-events-none">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover scale-105 animate-in zoom-in-110 duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
        </div>

        {/* Section Détails - 50% de l'écran */}
        <div className="w-full md:w-1/2 min-h-[55vh] md:h-screen p-8 md:p-16 flex flex-col justify-center relative bg-stone-950 md:bg-transparent">
          
          <button 
            className="absolute top-8 right-8 text-amber-500/50 hover:text-amber-500 transition-colors hidden md:block"
            onClick={onClose}
          >
            <X size={32} />
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-amber-600 mb-4 uppercase tracking-[0.3em] text-[9px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Sélection du Chef
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-amber-400 mb-6 uppercase tracking-wider leading-tight">
              {item.name}
            </h2>
            <p className="text-stone-400 text-base md:text-lg italic font-light leading-relaxed border-l border-amber-900/30 pl-6">
              {item.description}
            </p>
          </div>

          {/* Composition et Prix */}
          <div className="mb-10">
            <div className="flex items-end justify-between mb-6 border-b border-amber-900/20 pb-4">
              <h3 className="text-amber-600 font-serif text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                <UtensilsCrossed className="w-3.5 h-3.5" /> Composition
              </h3>
              <div className="text-2xl md:text-3xl font-serif text-amber-500 leading-none">
                {item.price}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <div className="text-stone-300 text-xs md:text-sm uppercase tracking-widest font-light opacity-80">
                Ingrédients frais sélectionnés ce matin au Marché de Guéliz.
              </div>
            </div>
          </div>

          {/* Parole du Chef (IA) */}
          <div className="mt-6">
            <div className="p-5 bg-amber-950/10 border border-amber-900/20 rounded-sm">
              <h4 className="text-amber-500 font-serif italic text-base mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4" /> La Parole du Chef
              </h4>
              <div className="min-h-[40px]">
                {loading ? (
                  <div className="flex gap-1.5 py-2">
                    <div className="w-1 h-1 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                ) : (
                  <p className="text-stone-400 italic text-sm md:text-base leading-relaxed font-light">
                    "{recommendation}"
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center md:text-left flex justify-between items-center opacity-40">
            <p className="text-[8px] text-amber-700 uppercase tracking-[0.5em] animate-pulse">
              Cliquer n'importe où pour revenir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedImage;
