
import {Article} from ".././../dbSqlite/dbSqlite.js";

export async function load({fetch}) {
const articles = Article.findAll();
    return {
      articles 
    };
} 

//////----
export const actions = {
   
//--delete
delete: async ({request}) => {
const formData = await request.formData();
const id = formData.get("id");
Article.del(id);
// articles = articles.filter(article => article.id != id);
// console.log("id",id);
return {success: true};
}
/////////////////////---Actions end--////////////////////  
};

