<script>
import {enhance} from "$app/forms";
export let  data;
export let form;
console.log(form);
</script>


<h1 class="text-white">Articles</h1>


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

