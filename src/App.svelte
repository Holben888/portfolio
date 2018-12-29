<GradientManager on:update="updateGradients(event)" />
<div class="background">
	<div class="content-container">
		<Nav />
		<div class="text-container">
			<h1>
				<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="BEN" size="{headerSize}" />
				<PopoutText textShadowCss={sharedGradient.textShadowCssString} words="HOLMES" size="{headerSize}" />
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
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    --footer-size: 1rem;
  }
  .content-container {
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
  import {
    ColorBar,
    GradientManager,
    Nav,
    PopoutText
  } from "./components/index.js";

  export default {
    components: {
      PopoutText,
      ColorBar,
      Nav,
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