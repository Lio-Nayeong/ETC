<script>
	import ContactCard from '../../components/ContactCard.svelte';

	let name = 'Kim';
	let title = '';
	let image = '';
	let description = '';
	// let done = false;
	let formState = 'empty';
	let createdContacts = [];

	function addContact() {
		// done = true;
		if (
			// trim() 메서드: 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
			name.trim().length == 0 ||
			title.trim().length == 0 ||
			image.trim().length == 0 ||
			description.trim().length == 0
		) {
			formState = 'invalid';
			return;
		}
		// push, pop 등 작동하지 않음
		createdContacts = [
			...createdContacts,
			{ id: Math.random(), name: name, jobTitle: title, imageUrl: image, desc: description }
		];
		formState = 'done';
	}

	function deleteFirst() {
		createdContacts = createdContacts.slice(1);
	}
	function deleteLast() {
		createdContacts = createdContacts.slice(0, -1);
	}
</script>

<div id="form">
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
</div>

<button on:click={addContact}>연락처 추가</button>
<button on:click={deleteFirst}>첫요소 삭제</button>
<button on:click={deleteLast}>끝요소 삭제</button>

{#if formState === 'invalid'}
	<p>유효하지 않은 입력입니다.</p>
{:else}
	<p>데이터를 입력해주세요.</p>
{/if}

{#each createdContacts as createdContact, i (createdContact.id)}
	<h2># {i + 1}</h2>
	<ContactCard
		userName={createdContact.name}
		jobTitle={createdContact.jobTitle}
		description={createdContact.desc}
		userImage={createdContact.image}
	/>
{:else}
	<p>연락처를 추가하세요.</p>
{/each}

<style>
	#form {
		width: 30rem;
		max-width: 100%;
	}
</style>
