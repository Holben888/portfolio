<div class="background">
	<div class="content-container">
		<Nav on:pageChanged="onPageChange(event)" />
		<svelte:component this="{pageComponent}" />
	</div>
</div>

<style>
  .background {
    background: var(--grey-9);
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .content-container {
    --footer-size: 1rem;
    width: 100%;
    max-width: 100rem;
    height: 100%;
    max-height: 70rem;
    padding: 2rem;
    margin-bottom: var(--footer-size);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<script>
  import Nav from "./components/nav.svelte";
  import Home from "./pages/Home.svelte";
  import Fake from "./pages/Fake.svelte";
  export default {
    data: () => ({
      currentPage: "Home"
    }),
    components: {
      Nav
    },
    methods: {
      onPageChange(page) {
        this.set({ currentPage: page });
      }
    },
    computed: {
      pageComponent: ({ currentPage }) => {
        if (currentPage === "Home") return Home;
        else return Fake;
      }
    }
  };
</script>