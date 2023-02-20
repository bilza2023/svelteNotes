<script>
import {enhance} from "$app/forms";
export let articles;
</script>

<table class="mx-auto w-full  mb-10">

<tr class="text-white p-5 bg-blue-900">
<td  class="p-2 m-2 border-2 ">id</td>
<td  class="p-2 m-2 border-2 ">Title</td>
<td  class="p-2 m-2 border-2 "> </td>
</tr> 

{#each articles as article }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {article.id} </td>
<td class="p-2 m-2 border-2  "> {article.title}</td> 

<td class="p-2 m-2 border-2   bg-blue-800">
<form method="post" action="?/edit" use:enhance>
<input name="id" type="hidden" hidden value={article.id}>
<button>View</button>
</form>

</td> 

</tr>
{/each}
</table>

