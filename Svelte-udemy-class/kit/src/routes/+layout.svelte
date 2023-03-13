<script>
	import '../app.css';

	const NAVIGATION_MENUS = [
		{ name: 'home', page: '/' },
		{ name: 'intro', page: '/01-intro' },
		{ name: 'base-syntax', page: '/02-base-syntax' },
		{ name: 'cond-loops', page: '/03-cond-loops' }
	];
</script>

<div>
	<a href="/">home</a>
	<a href="/01-intro">intro</a>
	<a href="/02-base-syntax">base-syntax</a>
	<a href="/03-cond-loops">cond-loops</a>
</div>

<slot />
