async function load({ fetch }) {
  const resp = await fetch("http://localhost:3000/api/get_cities");
  const cities = await resp.json();
  return {
    cities
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
const component = async () => (await import('./_page.svelte-a0ea2500.js')).default;
const file = '_app/immutable/components/pages/manage/_page.svelte-f04e0c58.js';
const imports = ["_app/immutable/components/pages/manage/_page.svelte-f04e0c58.js","_app/immutable/chunks/index-0b5a1c33.js","_app/immutable/modules/pages/manage/_page.js-72bd1eb2.js","_app/immutable/chunks/_page-d50f1c08.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=13-3942ad8c.js.map
