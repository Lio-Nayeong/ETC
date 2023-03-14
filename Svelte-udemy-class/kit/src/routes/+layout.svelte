<script>
	import '../app.css';
	import '../index.css';

	const NAVIGATION_MENUS = [
		{ name: 'home', page: '/' },
		{ name: 'intro', page: '/01-intro' },
		{ name: 'base-syntax', page: '/02-base-syntax' },
		{ name: 'cond-loops', page: '/03-cond-loops' },
		{ name: 'more-on-reactivity', page: '/04-more-on-reactivity' }
	];
</script>

<div class="py-3">
	{#each NAVIGATION_MENUS as menu}
		<a class="font-bold pr-3 hover:text-gray-500" href={menu.page}>{menu.name}</a>
	{/each}
</div>

<slot />
