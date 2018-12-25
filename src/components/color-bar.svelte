<div class="bar" style="background-image: {backgroundCss.image}; background-size: {backgroundCss.size}; background-position: {backgroundCss.position}"></div>

<style>
  .bar {
    width: 100%;
    height: 1rem;
    background-attachment: fixed;
    background-position-x: 100%;
    transition: all 2s ease-in-out;
  }
</style>

<script>
  import GRADIENTS from "./gradient-manager/gradients";
  export default {
    onupdate({ changed, current, previous }) {
      if (changed.gradientIndex && current.gradientIndex != null) {
        const { backgroundCss } = this.get();
        console.log((100 / (GRADIENTS.length - 1)) * current.gradientIndex);
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
      backgroundCss: ""
    })
  };
</script>