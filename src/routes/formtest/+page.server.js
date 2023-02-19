import {fail} from '@sveltejs/kit';


//////----
let articles = [
  {id : 1, title:"Bill", content:"These are the content :1"  },
  {id : 2, title:"Kill", content:"These are the content :2"  },
  {id : 3, title:"Mike", content:"These are the content :3"  }

];

export async function load({fetch}) {

    return { articles };
}

//////----
export const actions = {
  create: async ({request}) => {
  const formData = await request.formData();

  // console.log("formData", formData);
  
   const title = formData.get('title');
    const content = formData.get('content');
  //--validation  
    if (title.length < 2){
      return fail(400,{title,content,success:false, errorMsg : "The title is too shor."});    
    }
//--
  const id = parseInt(Math.random() * 10000);  
const item = {id,title,content}
  articles.push(item);
  return {errorMsg:null};
    // TODO log the user in
  },
//--delete
delete: async ({request}) => {
const formData = await request.formData();
const id = formData.get("id");
articles = articles.filter(article => article.id != id);
// console.log("id",id);
return {success: true};
}


};









////old wroking example
// import {City} from "../../../dbSqlite/dbSqlite.js";

//////----
// export async function load({fetch}) {
// const cities = City.findAll();
//     return {
//       title: "The Title from load function",
//       cities 
//     };
// }
