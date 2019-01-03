<div class="background">
	<div class="container">
		<Nav on:pageChanged="onPageChange(event)" width={navWidth} /> {#each pages as page} {#if renderAll || currentPage===page.name}
		<content style="--navWidth: {navWidth}; display: {currentPage===page.name ? 'block' : 'none'}">
			<svelte:component this="{page.component}" />
		</content> {/if} {/each}
	</div>
</div>

<style>
  .container {
    max-width: 100rem;
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
    background: var(--grey-9);
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>

<script>
  import Nav from "./components/nav.svelte";
  import Home from "./pages/Home.svelte";
  import Fake from "./pages/Fake.svelte";

  const pages = [
    {
      name: "Home",
      component: Home
    },
    {
      name: "Fake",
      component: Fake
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