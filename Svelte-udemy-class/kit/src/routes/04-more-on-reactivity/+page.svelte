<script>
	import ContactCard from '../../components/ContactCard.svelte';

	let name = 'Kim';
	let title = '';
	let image = '';
	let description = '';
	let formState = 'empty';

	let createdContacts = [];

	function addContact() {
		// event.preventDefault();
		if (
			name.trim().length == 0 ||
			title.trim().length == 0 ||
			image.trim().length == 0 ||
			description.trim().length == 0
		) {
			formState = 'invalid';
			return;
		}

		createdContacts = [
			...createdContacts,
			{
				id: Math.random(),
				name: name,
				jobTitle: title,
				imageUrl: image,
				desc: description
			}
		];
		formState = 'done';
	}

	// function deleteFirst() {
	// 	createdContacts = createdContacts.slice(1);
	// }

	function deleteLast() {
		createdContacts = createdContacts.slice(0, -1);
	}
</script>

<form id="form">
	<div class="form-control">
		<label for="userName">User Name</label>
		<input type="text" bind:value={name} id="userName" />
	</div>
	<div class="form-control">
		<label for="jobTitle">Job Title</label>
		<input type="text" bind:value={title} id="jobTitle" />
	</div>
	<div class="form-control">
		<label for="image">Image URL</label>
		<input type="text" bind:value={image} id="image" />
	</div>
	<div class="form-control">
		<label for="desc">Description</label>
		<textarea rows="3" bind:value={description} id="desc" />
	</div>
	<!-- Svelte의 수식어(modifier) -->
	<!-- |once 한 번만 실행, |passive 스크롤 성능 향상, |capture 캡처 단계에서 이벤트 핸들러가 작동, |stopPropagation 이벤트 전파를 멈춤, |preventDefault 태그의 기본 동작을 막음 -->
	<button on:click|preventDefault={addContact} type="submit">Add Contact Card</button>
</form>

<button on:click={(event) => (createdContacts = createdContacts.slice(1))}> Delete First </button>
<button on:click={deleteLast}>Delete Last</button>

{#if formState === 'invalid'}
	<p>Invalid input.</p>
{:else}
	<p>Please enter some data and hit the button!</p>
{/if}

{#each createdContacts as contact, i (contact.id)}
	<h2># {i + 1}</h2>
	<ContactCard
		userName={contact.name}
		jobTitle={contact.jobTitle}
		description={contact.desc}
		userImage={contact.imageUrl}
	/>
{:else}
	<p>Please start adding some contacts, we found none!</p>
{/each}

<style>
	#form {
		width: 30rem;
		max-width: 100%;
		margin: 1rem 0;
	}
</style>
