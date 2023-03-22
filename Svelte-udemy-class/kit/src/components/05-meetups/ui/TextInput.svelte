<script>
	export let controlType;
	export let id;
	export let label;
	export let rows;
	export let value;
	export let type;
</script>

<div class="form-control">
	<label for={id}>{label}</label>
	{#if controlType === 'textarea'}
		<!-- <textarea rows={rows} id={id} bind:value={description} /> -->
		<!-- bind:value는 캡슐화된 컴포넌트에서 사용할 수 없음 -->
		<!-- 다른 컴포넌트에 사용할 때 이 bind 구문은 컴포넌트 전역에서 작동하지 않음 -->
		<textarea {rows} {id} {value} on:input />
	{:else}
		<input {type} {id} {value} on:input />
	{/if}
</div>

<style>
	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: none;
		border-bottom: 2px solid #ccc;
		border-radius: 3px 3px 0 0;
		background: white;
		padding: 0.15rem 0.25rem;
		transition: border-color 0.1s ease-out;
	}

	input:focus,
	textarea:focus {
		border-color: #e40763;
		outline: none;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		width: 100%;
	}

	.form-control {
		padding: 0.5rem 0;
		width: 100%;
		margin: 0.25rem 0;
	}
</style>
