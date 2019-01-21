<div class="container">
	<div class="cabinet-container">
		<ArcadeCabinet />
	</div>
	<div class="text-container">
		{#each gameInfoSet as gameInfo, index}
		<div class="info-section" id="project{index}">
			<div class="info-section-content">
				<p class="title-text">{gameInfo.title}</p>
				{#each Object.entries(gameInfo.content) as [label, text]}
				<p class="supporting-text"><span class="label">{label}:</span>{" " + text}</p>
				{/each}
				<a href="#project{index >= gameInfoSet.length - 1 ? 0 : index + 1}">{`Next project: ${gameInfo.next} -->`}</a>
			</div>
		</div>
		{/each}
	</div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .text-container {
    max-width: 50em;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .info-section {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    animation: switch-back 0.5s forwards;
  }
  .info-section-content {
    margin: auto;
  }
  a {
    float: right;
    margin-top: 1rem;
    padding: 1rem 2rem;
    color: red;
    opacity: 0.4;
    border: 1px solid red;
    text-shadow: 0 0 2rem red;
    border-radius: 0.5rem;
  }
  @keyframes switch-back {
    from {
      left: 0;
      opacity: 1;
    }
    to {
      left: -50%;
      opacity: 0;
      visibility: hidden;
    }
  }
  .info-section:target {
    animation: switch 0.5s forwards;
  }
  @keyframes switch {
    from {
      left: 50%;
      opacity: 0;
      visibility: hidden;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  p {
    text-shadow: 0 0 2rem var(--grey-9);
    color: var(--grey-9);
  }
  span.label {
    background: red;
  }

  .cabinet-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-left: var(--nav-left-margin);
    z-index: -1;
  }
</style>

<script>
  import ArcadeCabinet from "../components/ArcadeCabinet.svelte";
  import gameInfoSet from "../res/gameShelfText";

  export default {
    oncreate() {
      window.location.hash = "#project0";
    },
    components: {
      ArcadeCabinet
    },
    data: () => ({
      gameInfoSet: gameInfoSet
    })
  };
</script>