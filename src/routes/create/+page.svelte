<script>
import {enhance} from "$app/forms";
import { goto } from '$app/navigation';
// export let data;
// const article = data.article;
// console.log(article);
</script>

<h1 class="text-white text-2x ">New Article</h1>

<form class="mx-auto w-full   px-4 py-2 border rounded-lg"
method="POST"
action="?/create"

use:enhance={ async ({ form, data, action, cancel }) => {

 const title = data.get("title");
 console.log(title);

//  dispatch("delarticle" , {id});

    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission

    return async ({ result, update }) => {
    if (result.type == "success"){
    await goto('http://localhost');
    }
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
    };
  }}

>
  <label for="article-title" class="text-white block font-medium text-gray-700 mb-1"> Title:</label>

  <input type="text"  name="title" 
  
  class="px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
placeholder="Title..."
  >

  <label for=" article-content" class="text-white block font-medium text-gray-700 my-4"> Content:</label>
  <textarea id="article-content" name="content" rows="8" 
  class="px-3 py-4 placeholder-slate-300 text-slate-800 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full text-lg"
  >

  </textarea>

  <button  class="w-full bg-green-700 text-lg text-white p-3  mt-5 mb-5">Save</button>

</form>

<br/>
<br/>
<br/>