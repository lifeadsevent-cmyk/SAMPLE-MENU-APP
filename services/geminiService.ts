import { GoogleGenAI } from "@google/genai";

export const getChefRecommendation = async (dishName: string): Promise<string> => {
  try {
    // Initialize GoogleGenAI with process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `En tant que chef étoilé d'un restaurant gastronomique nommé "L'Éclat d'Or", rédige une recommandation poétique et courte (max 40 mots) pour le plat suivant : "${dishName}". Utilise un ton luxueux, élégant et mystérieux. Parle des émotions et des saveurs. Réponds uniquement avec la recommandation en français.`,
    });
    // Accessing .text as a property as per SDK documentation
    return response.text?.trim() || "Une expérience culinaire hors du temps.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "L'équilibre parfait entre tradition et modernité.";
  }
};