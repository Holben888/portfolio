<div class="nav">
	{#each icons as icon}
	<Icon name="{icon}" size="{iconSize}" /> {/each}
</div>

<style>
  .nav {
    width: 10rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>

<script>
  import Icon from "./icon.svelte";
  export default {
    data: () => ({
      icons: ["education", "projects", "game-shelf", "about"],
      iconSize: 3
    }),
    components: {
      Icon
    }
  };
</script>