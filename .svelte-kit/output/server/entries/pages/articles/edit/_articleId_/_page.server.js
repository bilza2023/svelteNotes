import { A as Article, a as ArticleSeq } from "../../../../../chunks/dbSqlite.js";
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
export {
  actions,
  load
};
