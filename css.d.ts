// Ambient declarations for side-effect stylesheet imports, e.g. `import "./globals.css"`.
// TypeScript's "bundler" module resolution otherwise reports "Cannot find module or
// type declarations for side-effect import" for these non-code assets; Next.js handles
// the actual bundling at build time.
declare module "*.css";
