<script>
import Table from "./table.svelte";
import { SvelteEasyToast, toast } from 'svelte-easy-toast';

import {enhance} from "$app/forms";
export let  data;
let articles = data.articles;
////////////////////////////////////////////
let filterToggle = false;
let searchText = "";

//////////////////////////////////////////////
function search( ) {
// toast.push('Hello world!')
// console.log('Hello world!')
showToast();
const trimmed = searchText.trim();
  if (trimmed == ""){return;}
const lower  = trimmed.toLocaleLowerCase(); 

filterToggle = true;
articles = data.articles;
  
  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes( lower);
  });
//   console.log(filteredArticles);
articles = [...filteredArticles];
}


function removeFilter(){
filterToggle = false;
searchText = "";
articles = [...data.articles];
}

function delarticle(event){
const id = parseInt(event.detail.id);
const filteredArticles = articles.filter(article => article.id !== id);

// console.log("delarticle from parent::",id);
// console.log("filteredArticles::",filteredArticles);
//--keep this compatibility
data.articles = [...filteredArticles];
articles = data.articles;
// toast.push('Hello world!');
}


 const showToast = () => {
	    toast({
		type: 'primary', // dark, danger, success, info, warning, default, error
		position: 'top-right', // top-left, top-center, bottom-left, bottom-right, bottom-center
		text: 'This Toast is from Svelte!',
		title: 'Svelte is too awesome!',
	    });
     }
</script>

<!-- <button on:click={showToast}>show Toast</button> -->

<SvelteEasyToast />
<h1 class="text-white">Articles</h1>


<div
class="bg-blue-600 flex justify-center items-center py-2"
>
 <!-- search bar form -->
<input name = "searchText" bind:value={searchText}
class="px-2 py-1 border rounded-l" type="text">

{#if filterToggle}
<button class=" px-4 py-1 m-1 bg-green-800 text-white rounded-r"
on:click={removeFilter}
>X</button>
{/if}


<button class="px-4 py-1 bg-blue-800 text-white rounded-r"
on:click|preventDefault = {search}
>Search</button>

<div class="bg-blue-800 text-white text-xl p-1 m-1">
Found : { articles.length}
</div>

</div>
<hr/>






<Table articles={ articles} on:delarticle={delarticle} />
