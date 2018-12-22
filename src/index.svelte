<div class="container">
	<div class="header-container">
		<PopoutText words="BEN" />
		<PopoutText words="HOLMES" />
	</div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    background: #333;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .header-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 2rem;
  }
</style>

<script>
  import PopoutText from "./components/popout-text.svelte";

  export default {
    data: () => ({
      headerSize: "5rem"
    }),
    components: {
      PopoutText
    }
  };
</script>