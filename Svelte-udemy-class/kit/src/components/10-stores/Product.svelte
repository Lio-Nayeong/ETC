<script>
	import cartItems from './cart-store.js';
	import Button from './Button.svelte';

	export let id;
	export let title;
	export let price;
	export let description;

	function addToCart() {
		// set()
		// 기존의 저장소 데이터를 새로운 데이터로 덮어 씌움
		// cartItems.set([]); // 빈 배열로 덮어쓰기
		// cartItems.update((items) => {
		// 	return [
		// 		...items,
		// 		{
		// 			id: id,
		// 			title: title,
		// 			price: price
		// 		}
		// 	];
		// });
		cartItems.addItem({
			id: id,
			title: title,
			price: price
		});
	}
</script>

<div class="product">
	<div>
		<h1>{title}</h1>
		<h2>{price}</h2>
		<p>{description}</p>
	</div>
	<div>
		<Button on:click={addToCart}>Add to Cart</Button>
	</div>
</div>

<style>
	.product {
		background: white;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		margin: 1rem 0;
	}

	h1 {
		font-size: 1.25rem;
		font-family: 'Roboto Slab', serif;
		margin: 0;
	}

	h2 {
		font-size: 1rem;
		margin: 0;
		color: #494949;
	}

	p {
		margin: 0;
	}
</style>
