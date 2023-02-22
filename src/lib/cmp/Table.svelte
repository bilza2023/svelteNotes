<script>
// import { redirect } from '@sveltejs/kit';
import {enhance} from "$app/forms";
 import { createEventDispatcher } from 'svelte';
  
export let form;
export let items;
export let runFunc;

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
</tr> 

{#each items as item }
<tr class="text-white p-5">

<td class="p-2 m-2 border-2  "> {item.id} </td>
<td class="p-2 m-2 border-2  "> {item.name}</td> 


<td class="p-2 m-2 border-2   bg-red-400">
<!-- <a class="text-white" href= {`http://localhost/edit/${item.id}`} >Edit</a> -->
<button on:click={runFunc(item.id)}>Edit</button>
</td> 

<td class="p-2 m-2 border-2   bg-red-900">
<button class="text-white">Delete</button>
</td> 


</tr>
{/each}
</table>

