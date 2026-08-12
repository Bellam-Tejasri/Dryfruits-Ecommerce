// Next.js only ships types for `*.module.css`, so plain CSS side-effect imports
// (e.g. `import "./globals.css"`) have no declaration. TS 5.6+ flags those as ts(2882).
declare module "*.css";
