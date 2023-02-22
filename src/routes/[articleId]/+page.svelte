<script>
export let data;
const {article} = data; 
</script>



<div class="text-white">
<h1>{article.title}</h1>

<div>
{@html article.content}
</div>
</div>