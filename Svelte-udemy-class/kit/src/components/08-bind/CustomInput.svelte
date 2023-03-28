<script>
	export let val;
	// export let type;

	export function empty() {
		val = '';
	}
</script>

<h2>CustomInput Component</h2>

<!-- 'type' attribute cannot be dynamic if input uses two-way binding -->
<!-- <input type={type} bind:value={val} /> -->

<input type="text" bind:value={val} />

<style>
	input {
		width: 50%;
	}
</style>
