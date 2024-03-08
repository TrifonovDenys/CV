// <reference types="vite/client" />

interface ImportMetaEnv { 
  readonly VITE_APP_VAR1: string 
  readonly VITE_APP_VAR2: string 
}

interface ImportMeta { 
  readonly env: ImportMetaEnv 
}