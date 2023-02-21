import { A as Article, a as ArticleSeq } from './dbSqlite-c6912e1d.js';
import 'sequelize';
import 'path';

async function load({ fetch, params }) {
  const id = parseInt(params.articleId);
  const article = await Article.read(id);
  return {
    article
  };
}
const actions = {
  update: async ({ request }) => {
    const formData = await request.formData();
    const id = parseInt(formData.get("id"));
    const title = formData.get("title");
    const content = formData.get("content");
    await ArticleSeq.update(
      { title, content },
      { where: { id } }
    );
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-cdacb7d5.js')).default;
const file = '_app/immutable/components/pages/articles/edit/_articleId_/_page.svelte-bcdc54cc.js';
const imports = ["_app/immutable/components/pages/articles/edit/_articleId_/_page.svelte-bcdc54cc.js","_app/immutable/chunks/index-0316f0bc.js","_app/immutable/chunks/forms-d6216b05.js","_app/immutable/chunks/parse-d12b0d5b.js","_app/immutable/chunks/singletons-275da48e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=9-6113355b.js.map
