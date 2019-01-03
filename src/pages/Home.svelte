<GradientManager on:update="updateGradients(event)" />
<div class="container">
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
			</span> <span>for web dev</span>
		</p>
		<p>{#each socialLinks as socialLink}
			<SocialLink {...socialLink}/> {/each}
		</p>
		<div class="footer-container">
			<ColorBar gradientIndex={sharedGradient.index} />
		</div>
	</div>
</div>

<style>
  h1 {
    margin: 0;
    margin-left: -0.5rem;
  }
  .container {
    --footer-size: 1rem;
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin-bottom: var(--footer-size);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .text-container {
    max-width: 30em;
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
    width: 100vw;
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
  import SocialLink from "../components/SocialLink.svelte";

  export default {
    components: {
      PopoutText,
      ColorBar,
      GradientManager,
      SocialLink
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
      headerSize: 5,
      socialLinks: [
        {
          text: "Github",
          icon: "👨‍💻",
          link: "https://github.com/Holben888?tab=repositories",
          color: "hsla(204, 21%, 40%, 1)"
        },
        {
          text: "Twitter",
          icon: "🐦",
          link: "https://twitter.com/BHolmesDev",
          color: "hsla(203, 88%, 53%, 1)"
        },
        {
          text: "Medium",
          icon: "📖",
          link: "https://medium.com/@Holben",
          color: "hsla(164, 94%, 34%, 1)"
        }
      ]
    })
  };
</script>