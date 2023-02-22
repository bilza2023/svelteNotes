<script>
import Table from "../../lib/cmp/Table.svelte";
export let data;

const runFunc = (id)=>{
console.log("runFunc",id);

}
</script>


<h1 class="text-white">Categories</h1>

<Table items={data.categories} runFunc={runFunc} />