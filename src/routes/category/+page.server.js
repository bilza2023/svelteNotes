import {Category} from ".././../../dbSqlite/dbSqlite.js";

export async function load({fetch}) {
const categories = Category.findAll();
    return {
      categories 
    };
} 

// ////////////////////////////////////////////////////////////

export const actions = {

  update: async ({request}) => {
  console.log("delete!!!!!");
//   const formData = await request.formData();

//   const id = parseInt(formData.get('id'));
//   const title = formData.get('title');
//   const content = formData.get('content');
// //-----------------------------------------
//  await ArticleSeq.update(
//     { title, content },
//     { where: { id } }
//   );
  return {success: true};
}

};