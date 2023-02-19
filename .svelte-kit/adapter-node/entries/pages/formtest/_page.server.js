import { f as fail } from "../../../chunks/index2.js";
let articles = [
  { id: 1, title: "Bill", content: "These are the content :1" },
  { id: 2, title: "Kill", content: "These are the content :2" },
  { id: 3, title: "Mike", content: "These are the content :3" }
];
async function load({ fetch }) {
  return { articles };
}
const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    if (title.length < 2) {
      return fail(400, { title, content, success: false, errorMsg: "The title is too shor." });
    }
    const id = parseInt(Math.random() * 1e4);
    const item = { id, title, content };
    articles = [item, ...articles];
    return { errorMsg: null };
  },
  //--delete
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    articles = articles.filter((article) => article.id != id);
    return { success: true };
  }
};
export {
  actions,
  load
};
