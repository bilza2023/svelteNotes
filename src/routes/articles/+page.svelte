
 
<script>

import Table from "./table.svelte";
import {enhance} from "$app/forms";
export let  data;

let filterToggle = false;
let searchText = "";
// export let form;
let articles =  [...data.articles];

function search( ) {
  const trimmed = searchText.trim();
  if (trimmed == ""){return;}
const lower  = trimmed.toLocaleLowerCase(); 

filterToggle = true;
articles = articlesAll; // reinstate all the remove items
  
  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes( lower);
  });
//   console.log(filteredArticles);
articles = filteredArticles;
}


function removeFilter(){
filterToggle = false;
searchText = "";
articles = [...articlesAll];
}

function delarticle(event){
const id = parseInt(event.detail.id);
const filteredArticles = articles.filter(article => article.id !== id);

// console.log("delarticle from parent::",id);
// console.log("filteredArticles::",filteredArticles);
articles = [...filteredArticles];
}

</script>


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
Found : {articles.length}
</div>

</div>
<hr/>


<Table articles={articles} on:delarticle={delarticle} />
