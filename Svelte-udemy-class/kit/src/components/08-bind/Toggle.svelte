<script>
	export let chosenOption = 1;
</script>

<h2>Toggle Component</h2>

<button disabled={chosenOption === 1} on:click={() => (chosenOption = 1)}> Option 1 </button>
<button disabled={chosenOption === 2} on:click={() => (chosenOption = 2)}> Option 2 </button>
