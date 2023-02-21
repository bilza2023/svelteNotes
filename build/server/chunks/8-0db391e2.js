import { A as Article } from './dbSqlite-c6912e1d.js';
import 'sequelize';
import 'path';

const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    Article.create({ title, content });
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
const component = async () => (await import('./_page.svelte-e8fa310d.js')).default;
const file = '_app/immutable/components/pages/articles/create/_page.svelte-6f74dfbd.js';
const imports = ["_app/immutable/components/pages/articles/create/_page.svelte-6f74dfbd.js","_app/immutable/chunks/index-0316f0bc.js","_app/immutable/chunks/forms-d6216b05.js","_app/immutable/chunks/parse-d12b0d5b.js","_app/immutable/chunks/singletons-275da48e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=8-0db391e2.js.map
