<script>
import {enhance} from "$app/forms";
// export let  data;
export let form;
console.log(form);
</script>

<div class="bg-gray-800 h-screen">

<h1 class="text-white">Create Articles</h1>


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
      {#if form?.success == false}
        <div>Title is too short</div>
      {/if}
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
        value={form?.title ?? ""}
      ></textarea>
        <!-- value={form?.content ?? ""} -->
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto my-4 block">
      Add Article
    </button>
  </form>




</div>