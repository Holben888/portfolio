{#if gradientIndex != null}
<div class="bar" style="background-image: {backgroundCss.image}; background-size: {backgroundCss.size}; background-position: {backgroundCss.position}"></div>
{/if}

<style>
  .bar {
    width: 100%;
    height: inherit;
    background-attachment: fixed;
    transition: background-position 2s ease-in-out;
  }
</style>

<script>
  import GRADIENTS from "../res/gradients";
  export default {
    onupdate({ changed, current }) {
      if (changed.gradientIndex && current.gradientIndex != null) {
        const { backgroundCss } = this.get();
        this.set({
          backgroundCss: {
            ...backgroundCss,
            position: `${(100 / (GRADIENTS.length - 1)) * current.gradientIndex}%`
          }
        });
      }
    },
    oncreate() {
      const imageCss =
        GRADIENTS.reduce(
          (cssString, gradient) =>
            `${cssString}, ${gradient[0]}, ${gradient[gradient.length - 1]}`,
          "linear-gradient(90deg"
        ) + ")";
      this.set({
        backgroundCss: {
          image: imageCss,
          size: `${GRADIENTS.length * 200}% 100%`,
          position: "0%"
        }
      });
    },
    data: () => ({
      backgroundCss: {
        image: "",
        size: "",
        position: ""
      },
      gradientIndex: 0
    })
  };
</script>