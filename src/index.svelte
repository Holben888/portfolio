<GradientManager on:update="updateGradients(event)" />
<div class="content-container">
	<div class="header-container">
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="BEN" />
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="HOLMES" />
	</div>
</div>
<div class="footer-container">
	<ColorBar />
</div>

<style>
  .content-container {
    display: flex;
    width: 100%;
    height: 100%;
    background: var(--dark-9);
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
  import ColorBar from "./components/color-bar.svelte";
  import GradientManager from "./components/gradient-manager/index.svelte";

  export default {
    components: {
      PopoutText,
      ColorBar,
      GradientManager
    },
    methods: {
      updateGradients(updated) {
        this.set({
          sharedGradient: updated
        });
      }
    },
    data: () => ({
      sharedGradient: {}
    })
  };
</script>