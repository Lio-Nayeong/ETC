<script>
	let name = 'Kim';
	let age = 25;

	function incrementAge() {
		age += 1;
	}
</script>

<h1>Hello {name}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>

<style>
	h1 {
		color: purple;
	}
</style>
