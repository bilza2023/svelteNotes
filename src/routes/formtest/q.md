i have a javascript array of objects "articles"

the objects are of shape { id:1 , "title" : "ddd" , content" "fff"}

write a function that delete the object based on some "id"



















This is my Sveltekit app. I am creating Articles PAge Component. 
here is +page.svelte 
<script>
import {enhance} from "$app/forms";
export let  data;
export let form;
console.log(form);
</script>

<div class="bg-gray-800 w-full">
  
  <form class="w-3/5 bg-gray-500 p-4 rounded-lg mx-auto mt-2" 
  method="POST"
  action="?/create"
  use:enhance
  >
    <div class="p-4">
      <label class="block font-bold mb-2" for="title">
        Title:
      </label>
      <input 
        class="w-full p-2 rounded-md border-gray-400"
        type="text"
        id="title"
        name="title"
        value={form?.title ?? ""}
      />
      {#if form?.errorMsg !== null}
        <div class="bg-red-800 text-white p-2 m-2 border-2">Title is too short</div>
      {/if}
    </div>
    <div class="p-4">
      <label class="block font-bold mb-2" for="lastName">
        Content:
      </label>
      <textarea
        class="w-full p-2 rounded-md border-gray-400"
        type="text"
        id="content"
        name="content"
        rows="2"
        value={form?.content ?? ""}
      ></textarea>
        <!-- value={form?.content ?? ""} -->
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto my-4 block">
      Add Article
    </button>
  </form>


<br/>
<hr/>
<br/>

<table class="mx-auto w-3/5 mb-10">

<tr class="text-white p-5 bg-green-900">
<td  class="p-2 m-2 border-2 ">id</td>
<td  class="p-2 m-2 border-2 ">Title</td>
<td  class="p-2 m-2 border-2 ">Content</td>
<td  class="p-2 m-2 border-2 "> </td>
<td  class="p-2 m-2 border-2 "> </td>
</tr>

{#each data.articles as article }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {article.id} </td>
<td class="p-2 m-2 border-2  "> {article.title}</td> 
<td class="p-2 m-2 border-2  "> {article.content}</td> 
<td class="p-2 m-2 border-2   bg-green-700">Edit</td> 
<td class="p-2 m-2 border-2   bg-red-800">

<form method="post" action="?/delete" use:enhance>
<input name="id" type="hidden" hidden value={article.id}>
<button>Delete</button>
</form>
</td> 

</tr>
{/each}
</table>

</div>
and there is +page.server.js
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
  // articles.push(item);
  articles = [item, ...articles];
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

I am successfuly deleting Articles from the table displayed on the page. how even now I want to take action if the delete action goes well and return "true". How to do that?  I think we have to add soem code to use:enchance of delete form. if true then please explain and write that code for me. DO NOT OUTPUT THE ENTIRE FILES BACK JUST THE NEW CODE WITH ONE TOP AND ONE BOTTOM LINE REPEATED FROM MY CODE SO THAT I KNOW WHERE TO INSERT IT.