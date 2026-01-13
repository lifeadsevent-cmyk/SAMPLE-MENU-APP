import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ChefHat } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Bienvenue à L'Éclat d'Or. Je suis votre concierge gastronomique. Comment puis-je vous accompagner dans votre voyage culinaire aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Initialize GoogleGenAI with process.env.API_KEY directly as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })).concat({ role: 'user', parts: [{ text: userMessage }] }),
        config: {
          systemInstruction: "Tu es l'assistant de prestige du restaurant 'L'Éclat d'Or' à Marrakech. Ton ton est extrêmement poli, luxueux et passionné par la gastronomie marocaine. Aide les clients à choisir leurs plats, explique les ingrédients si nécessaire, et suggère des accords mets-vins ou boissons. Reste concis et élégant.",
        }
      });

      // Accessing .text as a property as per SDK documentation
      const aiText = response.text || "Je vous prie de m'excuser, une légère perturbation dans mes pensées. Comment puis-je vous aider ?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Je rencontre une difficulté technique, mais mes recommandations restent à votre disposition dans le menu." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[300]">
      {/* Bouton Flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-stone-900 border border-amber-600/50 text-amber-500 shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'rotate-90' : ''}`}
      >
        <div className="absolute inset-0 rounded-full bg-amber-600/10 animate-pulse group-hover:bg-amber-600/20"></div>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute right-full mr-4 px-3 py-1 bg-stone-900/90 border border-amber-600/30 text-amber-500 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap rounded-sm backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Assistant Gastronomique
          </span>
        )}
      </button>

      {/* Fenêtre de Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[85vw] max-w-[360px] h-[500px] bg-stone-950 border border-amber-600/20 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-4 bg-stone-900 border-b border-amber-600/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center bg-stone-950">
              <ChefHat size={20} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-amber-500 font-serif text-sm tracking-widest uppercase">Concierge IA</h3>
              <p className="text-[9px] text-stone-500 uppercase tracking-tighter">Votre guide culinaire personnel</p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amber-600/10 border border-amber-600/20 text-amber-200' 
                    : 'bg-stone-900/50 border border-stone-800 text-stone-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-900/50 border border-stone-800 p-3 rounded-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-stone-900 border-t border-amber-600/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-stone-950 border border-amber-900/40 rounded-sm px-3 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-amber-600 text-stone-950 rounded-sm hover:bg-amber-500 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;