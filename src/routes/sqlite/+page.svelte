<script>
export let data;
export let form;
console.log(form);
</script>




<h1 class="text-yellow-200">Testing Sqlite</h1>
<p class="text-yellow-200">This data is being obtained in the self contained sqlite database</p>

<ul >
  {#each data.cities as city}
    <li class="text-yellow-200">{city.id} ==== {city.name}</li>
  {/each}
</ul>

