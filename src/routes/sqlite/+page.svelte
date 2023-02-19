<script>
export let data;
export let form;
console.log(form);
</script>




<h1>Testing Sqlite</h1>
<p>This data is being obtained in the self contained sqlite database</p>

<ul>
  {#each data.cities as city}
    <li>{city.id} - ${city.name}</li>
  {/each}
</ul>

