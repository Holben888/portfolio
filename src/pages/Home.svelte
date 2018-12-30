<GradientManager on:update="updateGradients(event)" />
<div class="text-container">
	<h1>
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="BEN" size="{headerSize}" />
		<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="HOLMES" size="{headerSize}" />
	</h1>
	<p><span>A student developer with a</span>
		<span class="color-bar-underline">passion
			<span>
				<ColorBar gradientIndex={sharedGradient.index} />
			</span>
		</span> <span>for web dev 👨‍💻</span>
	</p>
	<div class="footer-container">
		<ColorBar gradientIndex={sharedGradient.index} />
	</div>
</div>

<style>
  h1 {
    margin: 0;
    margin-left: -0.5rem;
  }
  .text-container {
    max-width: 30em;
    overflow: scroll;
    padding: 2rem 1.5rem;
    text-align: right;
  }
  .text-container > * {
    padding-bottom: 1rem;
  }
  .text-container p {
    color: var(--grey-1);
    margin: 0;
    font-size: 30px;
    font-family: "Titillium Web";
    font-weight: 300;
  }
  .color-bar-underline {
    display: inline-block;
    width: auto;
  }
  .color-bar-underline > span {
    width: 100%;
    height: 0.3rem;
  }
  .footer-container {
    width: 100%;
    height: var(--footer-size);
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>

<script>
  import ColorBar from "../components/color-bar.svelte";
  import GradientManager from "../components/gradient-manager.svelte";
  import PopoutText from "../components/popout-text.svelte";

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
      sharedGradient: {},
      headerSize: 5
    })
  };
</script>