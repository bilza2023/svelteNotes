
import {Article} from "../../../../dbSqlite/dbSqlite.js";

//////----
// export async function load({fetch}) {
// // const articles = Article.findAll();
// //     return {
// //       title: "The Title from load function",
// //       articles 
// //     };
// }

//////----
export const actions = {
  create: async ({request}) => {
  const formData = await request.formData();
  const title = formData.get('title');
  const content = formData.get('content');
  console.log("formData",formData);
  Article.create({title , content });
  return {success: true};
    // TODO log the user in
  }
};