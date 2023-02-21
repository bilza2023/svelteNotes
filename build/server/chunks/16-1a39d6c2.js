import { A as Article, C as City } from './dbSqlite-c6912e1d.js';
import 'sequelize';
import 'path';

async function load({ fetch }) {
  Article.create({ title: "The Title", content: "The description" });
  const cities = City.findAll();
  return {
    title: "The Title from load function",
    cities
  };
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log("formData", formData);
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 16;
const component = async () => (await import('./_page.svelte-0bc89eca.js')).default;
const file = '_app/immutable/components/pages/sqlite/_page.svelte-a7c03e07.js';
const imports = ["_app/immutable/components/pages/sqlite/_page.svelte-a7c03e07.js","_app/immutable/chunks/index-0316f0bc.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=16-1a39d6c2.js.map
