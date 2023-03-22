<!-- 커스텀 이벤트를 받을 상위 컴포넌트 -->
<script>
	// 보통 이벤트를 처리하는 곳에서 데이터를 추출
	import Product1 from '../../components/06-cmp/Product-1.svelte';
	import Product2 from '../../components/06-cmp/Product-2.svelte';
	import Product3 from '../../components/06-cmp/Product-3.svelte';
	import Modal1 from '../../components/06-cmp/Modal-1.svelte';
	import Modal2 from '../../components/06-cmp/Modal-2.svelte';

	import { tick } from 'svelte';
	let text =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus alias repudiandae laudantium. Nostrum enim eveniet at tenetur dolor, nemo numquam nisi cupiditate cum a ab inventore nihil vitae laudantium veniam.';

	let products = [
		{
			id: 'p1',
			title: 'A book - 3',
			price: 9.99
		},
		{
			id: 'p2',
			title: 'A book - 3',
			price: 12.99
		}
	];

	let showModal1 = false;
	let showModal2 = false;
	let closeable = false;

	// 4. 하위 컴포넌트가 보내온 이벤트를 처리하는 함수
	function addToCart(event) {
		console.log(event);
	}
	function deleteProduct(event) {
		console.log(event.detail);
	}

	function transform(e) {
		if (e.which !== 9) {
			// 9 : Tap 키
			return;
		}
		e.preventDefault();

		const selectionStart = e.target.selectionStart;
		const selectionEnd = e.target.selectionEnd;
		const value = e.target.value;

		text =
			value.slice(0, selectionStart) +
			value.slice(selectionStart, selectionEnd).toUpperCase() +
			value.slice(selectionEnd);

		tick().then(() => {
			//코드 내 어디서든 예정된 작업이 실행된 곳을 연결 가능
			// tick은 항상 업데이트 완료 이후에 코드를 실행할 수 있는 프로미스를 제공
			e.target.selectionStart = selectionStart;
			e.target.selectionEnd = selectionEnd;
		});

		// // Will not work!
		// e.target.selectionStart = selectionStart;
		// e.target.selectionEnd = selectionEnd;
	}
</script>

<Product1 productTitle="A Book - 1" on:click={() => alert('clicked!')} />
<Product2 productTitle="A Book - 2" on:add-to-cart={addToCart} on:delete={deleteProduct} />
<Product3 title="A Book - 3" price={10000} on:add-to-cart={addToCart} on:delete={deleteProduct} />

{#each products as product}
	<!-- <Product3
		title={product.title}
		price={product.price}
		on:add-to-cart={addToCart}
		on:delete={deleteProduct}
	/> -->
	<Product3 {...product} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal1 = true)}>Show Modal - 1</button>
<button on:click={() => (showModal2 = true)}>Show Modal - 2</button>

{#if showModal1}
	<!-- <Modal1 content="<h1>Modal</h1>" /> -->
	<Modal1
		on:cancel={() => (showModal1 = false)}
		on:close={() => (showModal1 = false)}
		let:didAgree={closeable}
		><h1 slot="header">Hello!</h1>
		<p>This works!</p>
		<button slot="footer" on:click={() => (showModal1 = false)} disabled={!closeable}
			>Confirm</button
		>
	</Modal1>
{/if}

{#if showModal2}
	<Modal2
		on:cancel={() => (showModal2 = false)}
		on:close={() => (showModal2 = false)}
		let:didAgree={closeable}
		><h1 slot="header">Hello!</h1>
		<p>This works!</p>
		<button slot="footer" on:click={() => (showModal2 = false)} disabled={!closeable}
			>Confirm</button
		>
	</Modal2>
{/if}

<textarea value={text} rows="5" cols="5" on:keydown={transform} />
