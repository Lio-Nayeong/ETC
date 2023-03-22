<!-- 커스텀 이벤트를 보낼 하위 컴포넌트 -->
<script>
	// 1. 상위 컴포넌트로 커스텀 이벤트를 전달하기 위한 dispatch 생성
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let title;
	export let price;
	export let bestseller = false;

	// 2. 상위 컴포넌트로 커스텀 이벤트를 전달하는 함수(커스텀 이벤트 명, 전달할 데이터)
	function addToCart() {
		dispatch('add-to-cart', { id: 'p1' });
	}
</script>

<article>
	<h2>{title}</h2>
	<h2>: {price}</h2>

	{#if bestseller}
		<h3>BESTSELLER</h3>
	{/if}

	<!-- 3. HTML 엘리먼트에 커스텀 이벤트 처리 함수 부착 -->
	<button on:click={addToCart}>Add to Cart</button>
	<button
		on:click={() => {
			dispatch('delete', 'p1');
		}}>Delete</button
	>
	<div>----------------------------</div>
</article>
