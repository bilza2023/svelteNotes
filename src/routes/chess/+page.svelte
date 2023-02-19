<script>
export let data;
</script>



<h1>Chess Page</h1>

<h1>{data.title}</h1>


<ul>
  {#each data.cities as city}
    <li>{city.id} - ${city.name}</li>
  {/each}
</ul>