<script>
	import ContactCard from "../../components/ContactCard.svelte";

  let name = "Kim";
  let title = "";
  let image = "";
  let description = "";
  let age = 25;

  // name이 바뀔 때마다 본 표현식이 다시 실행되며
  // 새로운 값을 uppercaseName에 저장하여 출력합니다
  $: uppercaseName = name.toUpperCase();
  $: console.log(name);

  $: if (name === "Lee") {
    console.log("It runs!");
    age = 30;
  }

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Lee";
  }

  // 단방향 데이터 플로우
  function nameInput(event) {
    const enteredValue = event.target.value;
    name = enteredValue;
  }
</script>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click="{changeName}">Change Name</button>
<div>
  <!-- 단방향 데이터 플로우 -->
  <input type="text" value={name} on:input={nameInput} />
  <!-- 양방향 데이터 플로우 -->
  <input type="text" bind:value={name} />
</div>
<input type="text" bind:value={title} placeholder="title"/>
<input type="text" bind:value={image} placeholder="image"/>
<div>
  <textarea rows="3" bind:value={description} placeholder="description"/>
</div>
<ContactCard 
	userName={name} 
	jobTitle={title} 
	{description} 
	userImage={image} />

<style>
  h1 {
    color: purple;
  }
</style>
