<script>
import { goto } from '$app/navigation';
import { SvelteEasyToast, toast } from 'svelte-easy-toast';
export let data;
const article = data.article;
import {enhance} from "$app/forms";
// console.log(article);


const showToast = () => {
	toast({
		type: 'success', //primary, dark, danger, success, info, warning, default, error
		position: 'bottom-right', //top-right top-left, top-center, bottom-left, bottom-right, bottom-center
		// text: 'The Article',
		title: 'Saved!',
  });
}
</script>

<h1 class="text-white text-2x ">Edit</h1>

<form class="mx-auto w-full  px-4 py-2 border rounded-lg"
method="POST"
action="?/update"

use:enhance={ async ({ form, data, action, cancel }) => {
/////////////////////////////////////////
    return async ({ result, update }) => {
    if (result.type == "success"){
    showToast();
    // await goto('http://localhost');
    }
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
    };
  }}

>

  <label for="article-title" class="text-white block font-medium text-gray-700 mb-1"> Title:</label>

  <input type="hidden" hidden  name="id" value={article.id} > 

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
<SvelteEasyToast />
<br/>
<br/>
<br/>