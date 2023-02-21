import { A as Article } from "../../../chunks/dbSqlite.js";
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
export {
  actions,
  load
};
