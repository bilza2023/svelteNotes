import { f as fail } from './index2-00b9b687.js';

let articles = [
  { id: 1, title: "Bill", content: "These are the content :1" },
  { id: 2, title: "Kill", content: "These are the content :2" },
  { id: 3, title: "Mike", content: "These are the content :3" }
];
async function load({ fetch }) {
  return { articles };
}
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    if (title.length < 2) {
      return fail(400, { title, content, success: false, errorMsg: "The title is too shor." });
    }
    const id = parseInt(Math.random() * 1e4);
    const item = { id, title, content };
    articles = [item, ...articles];
    return { errorMsg: null };
  },
  //--delete
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    articles = articles.filter((article) => article.id != id);
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
const component = async () => (await import('./_page.svelte-280dca1c.js')).default;
const file = '_app/immutable/components/pages/formtest/_page.svelte-ed2447a6.js';
const imports = ["_app/immutable/components/pages/formtest/_page.svelte-ed2447a6.js","_app/immutable/chunks/index-0b5a1c33.js","_app/immutable/chunks/forms-52496a3d.js","_app/immutable/chunks/parse-d12b0d5b.js","_app/immutable/chunks/singletons-0cf6cf67.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=12-022d4d39.js.map
