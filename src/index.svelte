<GradientManager on:update="updateGradients(event)" />
<div class="background">
	<div class="content-container">
		<div class="text-container">
			<h1>
				<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="BEN" />
				<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="HOLMES" />
			</h1>
			<p>A student developer with a</p>
			<p>
				<span class="color-bar-underline">passion
					<span>
						<ColorBar gradientIndex={sharedGradient.index} />
					</span>
				</span> for web dev 👨‍💻
			</p>
		</div>
	</div>
	<div class="footer-container">
		<ColorBar gradientIndex={sharedGradient.index} />
	</div>
</div>

<style>
  .background {
    background: var(--grey-9);
    display: flex;
    justify-content: center;
  }
  .content-container {
    width: 100%;
    max-width: 80rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 0;
    margin-left: -0.5rem;
  }
  .text-container {
    max-width: 30em;
    padding: 1rem 2rem;
    overflow: scroll;
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
    height: 1rem;
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