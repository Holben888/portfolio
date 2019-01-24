<div class="background">
	<div class="container">
		<Nav on:pageChanged="onPageChange(event)" width={navWidth} /> {#each pages as page} {#if renderAll || currentPage===page.name}
		<content style="--navWidth: {navWidth}; display: {currentPage===page.name ? 'block' : 'none'}">
			<svelte:component this="{page.component}" />
		</content> {/if} {/each}
	</div>
	<div class="scan-line"></div>
</div>

<style>
  .container {
    max-width: var(--max-page-width);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  content {
    width: calc(100vw - var(--navWidth));
    overflow-y: scroll;
  }
  .background {
    background: linear-gradient(var(--grey-1) 75%, var(--grey-3) 75%) repeat;
    background-size: 100% 0.3rem;
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .scan-line {
    width: 100%;
    height: 1px;
    background: #888;
    opacity: 0.4;
    position: absolute;
    bottom: 0;
    animation: scan 8s linear infinite;
  }
  @keyframes scan {
    0% {
      transform: translateY(0);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0.1;
    }
  }
</style>

<script>
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import GameShelf from "./pages/GameShelf.svelte";
  import Fake from "./pages/Fake.svelte";

  const pages = [
    {
      name: "Home",
      component: Home
    },
    {
      name: "Fake",
      component: Fake
    },
    {
      name: "GameShelf",
      component: GameShelf
    }
  ];

  export default {
    data: () => ({
      pages: pages,
      currentPage: "Home",
      navWidth: "8rem"
    }),
    components: {
      Nav
    },
    methods: {
      onPageChange(page) {
        this.set({ currentPage: page });
      }
    }
  };
</script>