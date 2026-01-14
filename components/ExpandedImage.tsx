
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
      setRecommendation(""); // Reset
      getChefRecommendation(item.name).then(res => {
        setRecommendation(res);
        setLoading(false);
      }).catch(() => setLoading(false));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center animate-in fade-in duration-300 cursor-pointer"
      onClick={onClose} // Fermeture globale sur TOUTE la zone
    >
      {/* Overlay sombre avec flou très prononcé */}
      <div className="absolute inset-0 bg-stone-950/98 backdrop-blur-2xl" />
      
      <div className="relative w-full h-full flex flex-col md:flex-row bg-transparent">
        {/* Section Image Immersive */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-stone-900 animate-pulse" /> {/* Placeholder pendant chargement */}
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover relative z-10 transition-opacity duration-1000"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            style={{ opacity: 0 }}
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
        </div>

        {/* Section Infos */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-20 relative bg-stone-950 md:bg-transparent">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-amber-600 mb-3 uppercase tracking-[0.3em] text-[8px] font-bold">
              <Sparkles className="w-3 h-3" />
              Signature de L'Éclat d'Or
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-amber-400 mb-4 uppercase tracking-wider leading-none">
              {item.name}
            </h2>
            <p className="text-stone-400 text-sm md:text-base italic font-light leading-relaxed border-l border-amber-900/20 pl-4">
              {item.description}
            </p>
          </div>

          <div className="mb-8 pb-4 border-b border-amber-900/10">
            <div className="flex justify-between items-center">
              <span className="text-amber-600 font-serif text-[10px] uppercase tracking-widest flex items-center gap-2">
                <UtensilsCrossed className="w-3 h-3" /> Gastronomie
              </span>
              <span className="text-2xl font-serif text-amber-500">{item.price}</span>
            </div>
          </div>

          <div className="bg-amber-950/10 border border-amber-900/20 p-5 rounded-sm">
            <h4 className="text-amber-500 font-serif italic text-sm mb-2 flex items-center gap-2">
              <ChefHat className="w-4 h-4" /> La Parole du Chef
            </h4>
            <div className="min-h-[40px]">
              {loading ? (
                <div className="flex gap-1.5 py-1">
                  <div className="w-1 h-1 bg-amber-600/50 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-amber-600/50 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-amber-600/50 rounded-full animate-bounce delay-200"></div>
                </div>
              ) : (
                <p className="text-stone-400 italic text-xs md:text-sm leading-relaxed font-light">
                  "{recommendation || "Une invitation au voyage, où chaque bouchée raconte une histoire de terroir et d'exception."}"
                </p>
              )}
            </div>
          </div>

          <div className="absolute bottom-8 right-8 md:static md:mt-10">
            <button 
              onClick={onClose}
              className="px-6 py-2 border border-amber-600/30 text-amber-500/60 uppercase text-[9px] tracking-[0.4em] hover:text-amber-500 transition-all rounded-full"
            >
              Fermer l'expérience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedImage;
