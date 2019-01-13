<div class="container">
	<ArcadeCabinet />
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#faaca8, #ddd6f3);
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