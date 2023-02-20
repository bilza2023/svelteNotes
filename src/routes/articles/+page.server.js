
import {City,Article} from "../../../dbSqlite/dbSqlite.js";
import { redirect } from '@sveltejs/kit';
//////----
export async function load({fetch}) {
Article.create({title:"The Title", content:"The description"});

// City.create({name:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"});

const articles = Article.findAll();
    return {
      title: "The Title from load function",
      articles 
    };
}

//////----
export const actions = {
  edit: async ({request}) => {
  const formData = await request.formData();
  const id = formData.get('id'); 
    //--redirect
    throw redirect(307, `http://localhost/articles/${id}`);
  }
  


/////////////////////---Actions end--////////////////////  
};