import { A as Article } from './dbSqlite-c6912e1d.js';
import 'sequelize';
import 'path';

async function load({ fetch, params }) {
  const id = params.articleId;
  const article = await Article.read(id);
  return {
    article
  };
}
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    Article.create({ title, content });
    return { success: true };
  }
  //   delete: async ({request}) => {
  // const formData = await request.formData();
  //   const id = formData.get('id');
  //   console.log("id",id);
  //   }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-8bffc756.js')).default;
const file = '_app/immutable/components/pages/articles/_articleId_/_page.svelte-221a44ed.js';
const imports = ["_app/immutable/components/pages/articles/_articleId_/_page.svelte-221a44ed.js","_app/immutable/chunks/index-0316f0bc.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=10-c2715b15.js.map
