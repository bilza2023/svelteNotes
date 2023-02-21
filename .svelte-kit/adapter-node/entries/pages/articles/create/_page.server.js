import { A as Article } from "../../../../chunks/dbSqlite.js";
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    Article.create({ title, content });
    return { success: true };
  }
};
export {
  actions
};
