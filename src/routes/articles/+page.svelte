<script>
import Table from "./table.svelte";
import {enhance} from "$app/forms";
export let  data;
const articlesAll = [...data.articles];
// export let form;
let articles = articlesAll;
let searchText = "";
// console.log(form);

// const search = ()=>{
// console.log(searchText);
// console.log(data);
// }
function search( ) {
articles = articlesAll; // reinstate all the remove items

  const filteredArticles = articles.filter(article => {
  const trimmed = searchText.trim();
  const lower  = trimmed.toLocaleLowerCase(); 
    return article.title.toLowerCase().includes( lower);
  });
//   console.log(filteredArticles);
articles = filteredArticles;
}

</script>


<h1 class="text-white">Articles</h1>


<div
class="bg-blue-600 flex justify-center items-center py-2"
>
 <!-- search bar form -->
<input name = "searchText" bind:value={searchText}
class="px-2 py-1 border rounded-l" type="text">
<button class="px-4 py-1 bg-blue-800 text-white rounded-r"
on:click|preventDefault = {search}
>Search</button>

</div>
<hr/>


<Table articles={articles} />
