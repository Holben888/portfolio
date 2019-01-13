<div class="container">
	<div class="cabinet-container">
		<ArcadeCabinet />
	</div>
	<div class="text-container">

	</div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text-container {
    background: var(--grey-9);
  }
</style>

<script>
  import ArcadeCabinet from "../components/ArcadeCabinet.svelte";

  export default {
    components: {
      ArcadeCabinet
    }
  };
</script>