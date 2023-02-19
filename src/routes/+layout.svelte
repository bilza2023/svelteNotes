<script>
	// import Header from './Header.svelte';
		import MainNav from '$lib/cmp/MainNav.svelte';
	import './styles.css';
</script>

<div class="app bg-gray-800">

<MainNav />


	<main>
		<slot />
	</main>

	<footer class="bg-gray-700">
		<p>visit <a href="/">pichub.com</a> Created By Bilal Tariq</p>
	</footer>
	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
