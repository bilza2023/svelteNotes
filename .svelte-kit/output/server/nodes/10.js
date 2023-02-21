import * as server from '../entries/pages/articles/_articleId_/_page.server.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/articles/_articleId_/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/articles/_articleId_/_page.svelte-221a44ed.js';
export { server };
export const imports = ["_app/immutable/components/pages/articles/_articleId_/_page.svelte-221a44ed.js","_app/immutable/chunks/index-0316f0bc.js"];
export const stylesheets = [];
export const fonts = [];
