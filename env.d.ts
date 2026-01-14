
/**
 * Déclaration globale pour l'objet 'process' utilisé par le SDK Gemini.
 * Vite remplace 'process.env.API_KEY' à la compilation via la config 'define'.
 * Nous augmentons le namespace NodeJS pour ajouter la propriété API_KEY à process.env sans entrer en conflit avec d'autres déclarations de 'process'.
 */
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}

interface ImportMetaEnv {
  readonly VITE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
