<script>
// import { redirect } from '@sveltejs/kit';
import {enhance} from "$app/forms";
 import { createEventDispatcher } from 'svelte';
  
export let form;
export let articles;


 let dispatch = createEventDispatcher();

function edit ( )  {
    //--redirect
    console.log("Edit");
    // return redirect(302, `http://localhost/edit/1`);
     return {
                status: 302,
                redirect: "http://localhost/edit/1"
            };
}

</script>

<table class="mx-auto w-full  mb-10">

<tr class="text-white p-5 bg-blue-900">
<td  class="p-2 m-2 border-2 ">id</td>
<td  class="p-2 m-2 border-2 ">Title</td>
<td  class="p-2 m-2 border-2 "> </td>
<td  class="p-2 m-2 border-2 "> </td>
<td  class="p-2 m-2 border-2 "> </td>
</tr> 

{#each articles as article }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {article.id} </td>
<td class="p-2 m-2 border-2  "> {article.title}</td> 

<td class="p-2 m-2 border-2   bg-blue-800">
<a class="text-white" href= {`http://localhost/${article.id}`} >View</a>
</td> 


<td class="p-2 m-2 border-2   bg-red-400">
<a class="text-white" href= {`http://localhost/edit/${article.id}`} >Edit</a>
</td> 


<td class="p-2 m-2 border-2   bg-red-900">

<form method="post" action="?/delete" 


 use:enhance={ async ({ form, data, action, cancel }) => {
 const id = data.get("id");
 console.log(id);
 dispatch("delarticle" , {id});
//   const filteredArticles = articles.filter(article => article.id !== id);
//   articles = [...filteredArticles];
    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission

    return async ({ result, update }) => {
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
    };
  }}

>

<input name="id" type="hidden" hidden value={article.id}>
<button class="text-white">Delete</button>
</form>
</td> 


</tr>
{/each}
</table>
