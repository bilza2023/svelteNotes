import { A as Article } from "../../../../chunks/dbSqlite.js";
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
export {
  actions,
  load
};
