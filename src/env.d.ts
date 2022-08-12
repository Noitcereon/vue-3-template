/// <reference types="vite/client" />

interface ImportMetaEnv { // eslint-disable-line
    readonly VITE_BASE_PUBLIC_PATH: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  