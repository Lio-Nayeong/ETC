<script>
	import { createEventDispatcher, onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	const dispatch = createEventDispatcher();

	let agreed = false;
	let autoscroll = false;

	// 항상 script 태그 내부에 있는 함수 핸들러 외부에서 호출해야 함
	onMount(() => {
		console.log('onMount');
	});
	onDestroy(() => {
		console.log('onDestroy');
	});
	beforeUpdate(() => {
		console.log('beforeUpdate');
		autoscroll = agreed;
	});
	afterUpdate(() => {
		console.log('afterUpdate');
		if (autoscroll) {
			const modal = document.querySelector('.modal');
			modal.scrollTo(0, modal.scrollHeight);
		}
	});

	console.log('Script executed!');
</script>

<div class="backdrop" on:click={() => dispatch('cancel')} />

<!-- <div class="modal">{@html content}</div> -->
<!-- <div class="modal"><slot /></div> -->
<div class="modal">
	<header>
		<slot name="header" />
	</header>
	<div class="content">
		<slot />
	</div>
	<div class="disclaimer">
		<p>약관 동의</p>
		<button on:click={() => (agreed = true)}>Agree</button>
	</div>
	<footer>
		<slot name="footer" didAgree={agreed}>
			<button on:click={() => dispatch('close')} disabled={!agreed}> Close </button>
		</slot>
	</footer>
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		padding: 1rem;
		position: fixed;
		top: 10vh;
		left: 10%;
		width: 80%;
		max-height: 15vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		overflow: scroll;
	}

	header {
		border-bottom: 1px solid #ccc;
	}
</style>
