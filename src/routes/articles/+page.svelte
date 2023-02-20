<script>
import {enhance} from "$app/forms";
export let  data;
export let form;
console.log(form);
</script>


<h1 class="text-white">Articles</h1>


<table class="mx-auto w-full  mb-10">

<tr class="text-white p-5 bg-blue-900">
<td  class="p-2 m-2 border-2 ">id</td>
<td  class="p-2 m-2 border-2 ">Title</td>
<td  class="p-2 m-2 border-2 "> </td>
</tr> 

{#each data.articles as article }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {article.id} </td>
<td class="p-2 m-2 border-2  "> {article.title}</td> 

<td class="p-2 m-2 border-2   bg-green-800">
<form method="post" action="?/edit" use:enhance>
<input name="id" type="hidden" hidden value={article.id}>
<button>Edit</button>
</form>

</td> 

</tr>
{/each}
</table>

