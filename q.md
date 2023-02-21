
here is my page.server.js ==>


import {Article} from "../../../../../dbSqlite/dbSqlite.js";
import {ArticleSeq} from "../../../../../dbSqlite/dbSequalize.js";

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
  update: async ({request}) => {
  const formData = await request.formData();

  const id = parseInt(formData.get('id'));
  const title = formData.get('title');
  
  console.log("title",title);
  const content = formData.get('content');

 await ArticleSeq.update(
    { title, content },
    { where: { id } }
  );
  // console.log("rez",rez);
  // console.log("content",content);

  return {success: true};
  }

};


here is page.sevelte.js ==>

<script>
export let data;
const article = data.article;
import {enhance} from "$app/forms";
// console.log(article);
</script>

<h1 class="text-white text-2x ">Edit</h1>

<form class="mx-auto w-full   px-4 py-2 border rounded-lg"
method="POST"
action="?/update"
use:enhance 
>

  <label for="article-title" class="text-white block font-medium text-gray-700 mb-1"> Title:</label>

  <input type="text"  name="title" 
  
  class="px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
  value={article.title}
  >

  <label for=" article-content" class="text-white block font-medium text-gray-700 my-4"> Content:</label>
  <textarea   name="content" rows="8" 
  class="px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full text-lg">
  {article.content}
  </textarea>

<button class="w-full bg-green-700 text-lg text-white p-3  mt-5 mb-5">Save</button>

</form>

<br/>
<br/>
<br/>

What is the problem width edit function. The Sequalize ORM does not update the database ????
