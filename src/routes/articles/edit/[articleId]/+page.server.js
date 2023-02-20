
import {Article} from "../../../../../dbSqlite/dbSqlite.js";

//////----
export async function load({ fetch,params}) {

// const formData = await request.formData();
const id = params.articleId;

const article = await Article.read(id);
    return {
      article 
    };
}

//////----
export const actions = {
//   create: async ({request}) => {
//   const formData = await request.formData();
//   const title = formData.get('title');
//   const content = formData.get('content');
//   // console.log("formData",formData);
//   Article.create({title , content });
//   return {success: true};
//     // TODO log the user in
//   },


  delete: async ({request}) => {
// const formData = await request.formData();
  // const id = formData.get('id');
  // console.log("id",id);
  }
};