<script>
import {enhance} from "$app/forms";
export let  data;
export let form;
console.log(form);
</script>

<div class="bg-gray-800 w-full">
  
  <form class="w-3/5 bg-gray-500 p-4 rounded-lg mx-auto mt-2" method="POST"
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
      <!-- {#if form?.errorMsg !== null}
        <div class="bg-red-800 text-white p-2 m-2 border-2">Title is too short</div>
      {/if} -->
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