// Augment NodeJS namespace.
// This avoids conflict with existing process declarations (e.g. from @types/node).
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
  }
}