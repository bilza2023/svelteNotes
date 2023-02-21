import { A as Article, C as City } from "../../../chunks/dbSqlite.js";
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
export {
  actions,
  load
};
