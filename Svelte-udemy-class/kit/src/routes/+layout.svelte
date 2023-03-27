<script>
	import '../app.css';
	import '../index.css';

	const NAVIGATION_MENUS = [
		{ name: 'home', page: '/' },
		{ name: 'intro', page: '/01-intro' },
		{ name: 'base-syntax', page: '/02-base-syntax' },
		{ name: 'cond-loops', page: '/03-cond-loops' },
		{ name: 'more-on-reactivity', page: '/04-more-on-reactivity' },
		{ name: 'prj-basics', page: '/05-prj-basics' },
		{ name: 'cmp', page: '/06-cmp' },
		{ name: 'prj-cmp', page: '/07-prj-cmp' }
	];
</script>

<div class="py-2 h-12 fixed top-0 left-0 ">
	{#each NAVIGATION_MENUS as menu}
		<a class="font-bold px-3 hover:text-gray-500 leading-6 py-1 float-left border" href={menu.page}
			>{menu.name}</a
		>
	{/each}
</div>

<div class="pt-16">
	<slot />
</div>
