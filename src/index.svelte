<GradientManager on:update="updateGradients(event)" />
<div class="content-container">
	<div class="text-container">
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="BEN" />
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="HOLMES" />
	</div>
	<div class="footer-container">
		<ColorBar gradientIndex={sharedGradient.index} />
	</div>
</div>

<style>
  .content-container {
    width: 100%;
    height: 100%;
    background: var(--dark-9);
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 2rem;
  }
  .footer-container {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
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
        console.log(updated);
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