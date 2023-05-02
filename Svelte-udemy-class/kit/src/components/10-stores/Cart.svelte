<script>
	import { onDestroy } from 'svelte';
	import cartItems from './cart-store.js';
	import CartItem from './CartItem.svelte';
	import { timer } from '../../components/10-stores/timer-store';

	const unsubscribe = timer.subscribe((count) => {
		console.log('Card:', count);
	});
	// subscribe()
	// 저장소에 저장된 데이터에 일어날 수 있는 데이터 변화를 알려주는 구독 기능
	// 데이터가 바뀔 때 실행할 함수

	// let items;

	// const unsubscribe = cartItems.subscribe((its) => {
	// 	items = its;
	// 	// console.log('items : ', items);
	// });

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	// cartItems.subscribe((its) => {
	// 	items = its;
	// 	console.log('items : ', items);
	// });

	//   export let items = [
	//     {
	//       id: "p1",
	//       title: "Test",
	//       price: 9.99
	//     },
	//     {
	//       id: "p2",
	//       title: "Test",
	//       price: 9.99
	//     }
	//   ];
</script>

<section>
	<h1>Cart</h1>
	<ul>
		<!-- Svelte는 $로 시작하는 변수를 저장소로 이해 -->
		{#each $cartItems as item (item.id)}
			<CartItem id={item.id} title={item.title} price={item.price} />
		{:else}
			<p>No items in cart yet!</p>
		{/each}
	</ul>
</section>

<style>
	section {
		width: 30rem;
		max-width: 90%;
		margin: 2rem auto;
		border-bottom: 2px solid #ccc;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
