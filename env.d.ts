
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}

// Support pour l'injection directe de process via Vite define
declare var process: {
  env: NodeJS.ProcessEnv;
};

export {};
