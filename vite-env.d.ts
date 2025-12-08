/// <reference types="vite/client" />

// Augment NodeJS namespace to add API_KEY to process.env.
// This avoids conflict with existing process declarations (e.g. from @types/node).
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
