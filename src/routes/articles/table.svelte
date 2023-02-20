<script>
import { redirect } from '@sveltejs/kit';
// import {enhance} from "$app/forms";
export let articles;

function edit ( )  {
    //--redirect
    console.log("Edit");
    // return redirect(302, `http://localhost/articles/edit/1`);
     return {
                status: 302,
                redirect: "http://localhost/articles/edit/1"
            };
}

</script>

<table class="mx-auto w-full  mb-10">

<tr class="text-white p-5 bg-blue-900">
<td  class="p-2 m-2 border-2 ">id</td>
<td  class="p-2 m-2 border-2 ">Title</td>
<td  class="p-2 m-2 border-2 "> </td>
<td  class="p-2 m-2 border-2 "> </td>
</tr> 

{#each articles as article }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {article.id} </td>
<td class="p-2 m-2 border-2  "> {article.title}</td> 

<td class="p-2 m-2 border-2   bg-blue-800">
<a class="text-white" href= {`http://localhost/articles/${article.id}`} >View</a>
</td> 


<td class="p-2 m-2 border-2   bg-red-800">
<a class="text-white" href= {`http://localhost/articles/edit/${article.id}`} >Edit</a>
</td> 


</tr>
{/each}
</table>

