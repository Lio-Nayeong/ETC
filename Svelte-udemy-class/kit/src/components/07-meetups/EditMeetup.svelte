<script>
	import { createEventDispatcher } from 'svelte';
	import TextInput from './ui/TextInput.svelte';
	import Button from './ui/Button.svelte';
	import Modal from './ui/Modal.svelte';

	let title = '';
	let subtitle = '';
	let address = '';
	let email = '';
	let description = '';
	let imageUrl = '';

	const dispatch = createEventDispatcher();

	function submitForm() {
		dispatch('save', {
			title,
			subtitle,
			address,
			email,
			description,
			imageUrl
		});
	}

	function cancel() {
		dispatch('cancel');
	}
</script>

<Modal title="Edit Meetup Data" on:cancel>
	<form on:submit|preventDefault={submitForm}>
		<TextInput
			id="title"
			label="Title"
			value={title}
			on:input={(event) => (title = event.target.value)}
		/>
		<TextInput
			id="subtitle"
			label="Subtitle"
			value={subtitle}
			on:input={(event) => (subtitle = event.target.value)}
		/>
		<TextInput
			id="address"
			label="Address"
			value={address}
			on:input={(event) => (address = event.target.value)}
		/>
		<TextInput
			id="imageUrl"
			label="Image URL"
			value={imageUrl}
			on:input={(event) => (imageUrl = event.target.value)}
		/>
		<TextInput
			id="email"
			label="E-Mail"
			type="email"
			value={email}
			on:input={(event) => (email = event.target.value)}
		/>
		<TextInput
			id="description"
			label="Description"
			controlType="textarea"
			value={description}
			on:input={(event) => (description = event.target.value)}
		/>
		<!-- <Button type="submit" caption="Save" /> -->
		<!-- <Button type="submit">Save</Button> -->
	</form>
	<div slot="footer">
		<Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
		<Button type="button" on:click={submitForm}>Save</Button>
	</div>
</Modal>

<style>
	form {
		width: 100%;
	}
</style>
