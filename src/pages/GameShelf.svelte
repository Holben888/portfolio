<div class="container" ref:container on:scroll="setCabinetOpacity()">
	<div class="cabinet-container-outer" ref:arcadeCabinet>
		<div class="cabinet-container-inner">
			<ArcadeCabinet image="/images/{gameInfoSet[projectIndex].image}" />
		</div>
	</div>
	<div class="text-container">
		{#each gameInfoSet as gameInfo, index}
		<div class="info-section" id="project{index}">
			<div class="info-section-content">
				<p class="title-text">
					<WordFlicker phrase={gameInfo.title} />
				</p>
				{#each Object.entries(gameInfo.content) as [label, text]}
				<p class="supporting-text">
					<WordFlicker phrase={label + ":"} customStyle="background: red" />
					<WordFlicker phrase={text} />
				</p>
				{/each}
				<a href="#project{index >= gameInfoSet.length - 1 ? 0 : index + 1}" on:click="setProjectIndex(index)">{`Next project:
					${gameInfo.next} -->`}
				</a>
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
    overflow-y: scroll;
  }
  .text-container {
    max-width: 45em;
    margin-left: 23rem;
    margin-right: 5vw;
    width: 100%;
    height: 100vh;
    position: relative;
    visibility: hidden;
    animation: fade-in 0.1s forwards;
    animation-delay: 1.5s;
  }
  .info-section {
    --fade-in-delay: 0.5s;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    padding: 2rem;
    animation: fade-out 0.5s forwards;
    animation-delay: 0.5s;
  }
  .info-section-content {
    margin: auto;
  }
  p :global(.wordFlicker) {
    opacity: 0.9;
    animation: flicker-out 0.5s forwards;
  }
  a {
    float: right;
    margin-top: 1rem;
    padding: 1rem 2rem;
    color: red;
    opacity: 0.7;
    border: 1px solid red;
    text-shadow: 0 0 2rem red;
    border-radius: 0.5rem;
  }
  a:hover {
    animation: flicker 0.3s linear forwards;
  }
  .info-section:target {
    opacity: 0;
    animation: fade-in 0.5s forwards;
    animation-delay: var(--fade-in-delay);
  }
  .info-section:target :global(.wordFlicker) {
    opacity: 0.1;
    animation: flicker 0.5s linear forwards;
    animation-delay: calc(var(--fade-in-delay) + var(--flicker-delay));
  }

  p {
    text-shadow: 0 0 2rem var(--grey-9);
    color: var(--grey-9);
  }
  .p :global(.label) {
    background: red;
  }

  .cabinet-container-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: -1;
  }

  .cabinet-container-inner {
    max-width: var(--max-page-width);
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: var(--nav-left-margin);
  }

  @media only screen and (max-width: 70em) {
    .container {
      flex-direction: column;
    }
    .cabinet-container-outer {
      position: sticky;
      padding-top: 5rem;
      --arcade-cabinet-scaling: calc(1.5vh + 1px);
    }
    .cabinet-container-inner {
      padding: 0;
      justify-content: center;
      align-items: flex-start;
    }
    .text-container {
      margin-top: -5vh;
      margin: auto;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes flicker {
    0% {
      opacity: 0.1;
    }
    10% {
      opacity: 0.9;
    }
    60% {
      opacity: 0.9;
    }
    70% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.9;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.9;
    }
  }
  @keyframes flicker-out {
    0% {
      opacity: 0.9;
    }
    10% {
      opacity: 0.1;
    }
    30% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.2;
    }
    70% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.1;
    }
  }
</style>

<script>
  import ArcadeCabinet from "../components/ArcadeCabinet.svelte";
  import WordFlicker from "../components/WordFlicker.svelte";
  import gameInfoSet from "../res/gameShelfText";

  const getProjectIndexIfValidHash = () => {
    const match = /#project?(.*)/.exec(window.location.hash);
    if (!match || parseInt(match[1]) >= gameInfoSet.length) {
      //invalid hash
      window.location.hash = "#project0";
      return 0;
    }
    return match[1];
  };

  export default {
    oncreate() {
      this.set({
        projectIndex: getProjectIndexIfValidHash()
      });
      window.onhashchange = getProjectIndexIfValidHash;
    },
    components: {
      ArcadeCabinet,
      WordFlicker
    },
    data: () => ({
      gameInfoSet: gameInfoSet,
      projectIndex: 0,
      image: gameInfoSet[0].image || ""
    }),
    methods: {
      setProjectIndex(index) {
        const nextIndex = index >= gameInfoSet.length - 1 ? 0 : index + 1;
        this.set({
          projectIndex: nextIndex
        });
      },
      setCabinetOpacity() {
        const { container, arcadeCabinet } = this.refs;
        const viewHeight = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        const opacity = 1 - (container.scrollTop / viewHeight) * 1.4;
        arcadeCabinet.style = `opacity: ${opacity}`;
      }
    }
  };
</script>