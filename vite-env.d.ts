/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PLASMO_PUBLIC_GOOGLE_AI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
