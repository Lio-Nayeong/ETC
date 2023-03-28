<script>
	import CustomInput from '../../components/08-bind/CustomInput.svelte';
	import Toggle from '../../components/08-bind/Toggle.svelte';
	import { isValidEmail } from './validation.js';

	let val = 'Kim';
	let selectedOption = 1;
	let price = 0;
	let agreed;
	// let color = 'red';
	let color = ['red'];
	let singleColor = 'blue';
	let usernameInput;
	let someDiv;
	let customInput;
	let enteredEmail = '';
	let formIsValid = false;

	// $: if (enteredEmail.includes('@')) {
	$: if (isValidEmail(enteredEmail)) {
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	$: console.log('val : ', val);
	$: console.log('selectedOption : ', selectedOption);
	$: console.log('price : ', price);
	$: console.log('agreed : ', agreed);
	$: console.log('color : ', color);
	$: console.log('singleColor : ', singleColor);
	$: console.log('customInput : ', customInput);

	function setValue(event) {
		val = event.target.value;
	}

	function saveData() {
		// console.log(document.querySelector('#username').value);
		console.log(usernameInput.value);
		console.dir(usernameInput); // 전체 DOM 요소
		console.dir(someDiv);
		customInput.empty(); // CustomInput Component
	}
</script>

<h1>Bindings & Forms</h1>

<input type="text" value={val} on:input={setValue} />
<input type="text" bind:value={val} />

<!-- <CustomInput type="text" bind:val /> -->
<!-- <CustomInput bind:val /> -->
<CustomInput bind:val bind:this={customInput} />

<!-- 
	반드시 양방향 바인딩이 필요하고 확실히 알고 있는 경우만, 양방향 바인딩 사용
	<input>에 양방향 바인딩을 가장 많이 쓰지만 커스텀 요소에서 커스텀 프로퍼티에도 설정할 수 있음
-->
<Toggle />
<Toggle bind:chosenOption={selectedOption} />

<!-- <input type="number" value={price} on:input={(e) => console.log('1' + e.target.value)} /> -->
<input type="number" bind:value={price} />

<label>
	<input type="checkbox" bind:checked={agreed} />
	checkbox
</label>

<hr />

<label>
	<input type="radio" value="red" name="color" bind:group={color} />
	red
</label>
<label>
	<input type="radio" value="green" name="color" bind:group={color} />
	green
</label>
<label>
	<input type="radio" value="blue" name="color" bind:group={color} />
	blue
</label>

<hr />

<label>
	<input type="checkbox" value="red" name="color" bind:group={color} />
	red
</label>
<label>
	<input type="checkbox" value="green" name="color" bind:group={color} />
	green
</label>
<label>
	<input type="checkbox" value="blue" name="color" bind:group={color} />
	blue
</label>

<hr />

<select bind:value={singleColor}>
	<option value="red">red</option>
	<option value="green">green</option>
	<option value="blue">blue</option>
</select>

<hr />

<!-- <input type="text" id="username"  /> -->
<input type="text" bind:this={usernameInput} />
<!-- this : 전체 요소를 가리키는 포인터 -->
<button on:click={saveData}>save</button>
<div bind:this={someDiv} />

<hr />

<form on:submit|preventDefault>
	<input
		type="email"
		bind:value={enteredEmail}
		class={isValidEmail(enteredEmail) ? '' : 'invalid'}
	/>
	<button type="submit" disabled={!formIsValid}>save</button>
</form>

<style>
	label {
		float: left;
		padding: 10px;
	}

	hr {
		width: 100%;
		border-bottom: 1px solid;
	}

	input {
		width: 50%;
	}

	.invalid {
		border: 5px solid green;
	}
</style>
