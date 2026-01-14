
import React, { useEffect, useState } from 'react';
import { ChefHat, Sparkles, UtensilsCrossed } from 'lucide-react';
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
      className="fixed inset-0 z-[200] flex items-center justify-center animate-in fade-in duration-500 cursor-pointer"
      onClick={onClose}
    >
      {/* Background avec flou artistique intense */}
      <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-2xl" />
      
      {/* Conteneur principal - Prend tout l'écran sur mobile */}
      <div 
        className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto no-scrollbar bg-stone-950"
        onClick={(e) => {
          // Permet de cliquer sur le fond pour fermer, mais ne fait rien si on clique sur le contenu spécifique
          // Cependant, comme tout le conteneur est scrollable, on laisse le comportement global de fermeture
          // sauf sur les éléments interactifs
        }}
      >
        {/* Section Image - Immersive */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover animate-out zoom-out-110 duration-1000 fill-mode-forwards scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30"></div>
        </div>

        {/* Section Détails - Noir et Or */}
        <div 
          className="w-full md:w-1/2 min-h-[50vh] p-8 md:p-16 flex flex-col justify-center relative bg-stone-950"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic sur les détails
        >
          
          {/* Header de l'article */}
          <div className="mb-10">
            <div className="flex items-center gap-3 text-amber-600 mb-4 uppercase tracking-[0.3em] text-[10px] font-bold">
              <Sparkles className="w-4 h-4" />
              Expérience Gastronomique
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-amber-400 mb-6 uppercase tracking-wider leading-tight">
              {item.name}
            </h2>
            <p className="text-stone-400 text-lg md:text-xl italic font-light leading-relaxed max-w-lg border-l border-amber-900/40 pl-6">
              {item.description}
            </p>
          </div>

          {/* Section Composition et Prix alignés */}
          <div className="mb-12">
            <div className="flex items-end justify-between mb-6 border-b border-amber-900/20 pb-4">
              <h3 className="text-amber-600 font-serif text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4" /> Composition
              </h3>
              <div className="text-3xl md:text-4xl font-serif text-amber-500 leading-none">
                {item.price}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {item.ingredients && item.ingredients.length > 0 ? (
                item.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-amber-500/50 mr-2 text-xs">✦</span>
                    <span className="text-stone-300 text-sm md:text-base uppercase tracking-widest font-light">
                      {ing}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-stone-500 italic text-sm font-light">
                  Ingrédients sélectionnés par notre Chef selon le marché du jour.
                </div>
              )}
            </div>
          </div>

          {/* Recommandation IA du Chef */}
          <div className="mt-auto">
            <div className="p-6 bg-stone-900/50 border border-amber-600/10 rounded-sm">
              <h4 className="text-amber-500 font-serif italic text-lg mb-3 flex items-center gap-2">
                <ChefHat className="w-5 h-5" /> La Parole du Chef
              </h4>
              <div className="min-h-[40px]">
                {loading ? (
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                ) : (
                  <p className="text-stone-400 italic text-sm md:text-base leading-relaxed">
                    "{recommendation}"
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Note de fermeture */}
          <div className="mt-12 text-center md:text-left flex justify-between items-center">
            <p className="text-[9px] text-amber-700/40 uppercase tracking-[0.5em] animate-pulse">
              Glissez pour explorer
            </p>
            <button 
              onClick={onClose}
              className="text-amber-500 border border-amber-600/30 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-amber-600 hover:text-stone-950 transition-all pointer-events-auto"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedImage;
