
import {Article} from "../../../dbSqlite/dbSqlite.js";

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
  
  
};