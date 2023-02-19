const articles = [
  { id: 1, title: "Bill", content: "These are the content :1" },
  { id: 2, title: "Kill", content: "These are the content :2" },
  { id: 3, title: "Mike", content: "These are the content :3" }
];
async function load({ fetch }) {
  return { articles };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-9e760c81.js')).default;
const file = '_app/immutable/components/pages/articles/_page.svelte-7e188afa.js';
const imports = ["_app/immutable/components/pages/articles/_page.svelte-7e188afa.js","_app/immutable/chunks/index-0b5a1c33.js","_app/immutable/chunks/forms-52496a3d.js","_app/immutable/chunks/parse-d12b0d5b.js","_app/immutable/chunks/singletons-0cf6cf67.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=7-85feb434.js.map
