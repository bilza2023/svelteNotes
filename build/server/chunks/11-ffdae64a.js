async function load({ fetch }) {
  const resp = await fetch("http://localhost:3000/api/get_cities");
  const cities = await resp.json();
  return {
    title: "The Title from load function",
    cities
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-bce7322d.js')).default;
const file = '_app/immutable/components/pages/chess/_page.svelte-a62d78aa.js';
const imports = ["_app/immutable/components/pages/chess/_page.svelte-a62d78aa.js","_app/immutable/chunks/index-0316f0bc.js","_app/immutable/modules/pages/chess/_page.js-348e8f75.js","_app/immutable/chunks/_page-6b32ce51.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=11-ffdae64a.js.map
