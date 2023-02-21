import { A as Article } from './dbSqlite-c6912e1d.js';
import 'sequelize';
import 'path';

async function load({ fetch }) {
  const articles = Article.findAll();
  return {
    articles
  };
}
const actions = {
  // edit: async ({request}) => {
  // const formData = await request.formData();
  // const id = formData.get('id'); 
  //   //--redirect
  //   throw redirect(307, `http://localhost/articles/${id}`);
  // }
  //--delete
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    Article.del(id);
    console.log("id", id);
    return { success: true };
  }
  /////////////////////---Actions end--////////////////////  
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-4823c9cb.js')).default;
const file = '_app/immutable/components/pages/articles/_page.svelte-368a282c.js';
const imports = ["_app/immutable/components/pages/articles/_page.svelte-368a282c.js","_app/immutable/chunks/index-0316f0bc.js","_app/immutable/chunks/forms-d6216b05.js","_app/immutable/chunks/parse-d12b0d5b.js","_app/immutable/chunks/singletons-275da48e.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=7-c5ebc105.js.map
