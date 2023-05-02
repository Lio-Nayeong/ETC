<script>
	import Button from '../../components/10-stores/Button.svelte';
	import Cart from '../../components/10-stores/Cart.svelte';
	import Products from '../../components/10-stores/Products.svelte';
	import { timer } from '../../components/10-stores/timer-store';

	let showCart = true;

	// timer.subscribe((count) => {
	// 	console.log('App:', count);
	// });
</script>

<Button
	on:click={() => {
		showCart = !showCart;
	}}
	>Toggle Cart
</Button>
{#if showCart}
	<Cart />
{/if}
<Products />

<p>Count: {$timer}</p>
