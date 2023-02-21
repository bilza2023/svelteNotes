
import {Article} from "../../../../../dbSqlite/dbSqlite.js";
import {ArticleSeq} from "../../../../../dbSqlite/dbSequalize.js";

//////----
export async function load({ fetch,params}) {

// const formData = await request.formData();
const id =  parseInt(params.articleId);


//  await ArticleSeq.update(
//     { title : "20202020020202", content :"20202020020202" },
//     { where: { id } }
//   );

const article = await Article.read(id);
    return {
      article 
    };
}

//////----
export const actions = {
  update: async ({request}) => {
  const formData = await request.formData();

  const id = parseInt(formData.get('id'));
  const title = formData.get('title');
  
  const content = formData.get('content');

 await ArticleSeq.update(
    { title, content },
    { where: { id } }
  );
  return {success: true};
  }

};