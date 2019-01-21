<span class="bar" style="background-image: {backgroundImage}; --index: {gradientIndex}; --length: {gradientLength}"></span>

<style>
  .bar {
    --index: 0;
    --length: 0;
    display: block;
    width: 100%;
    height: inherit;
    background-attachment: fixed;
    background-size: calc(var(--length) * 200%) 100%;
    background-position: calc((100 / (var(--length) - 1)) * var(--index) * 1%);
    transition: background-position 2s ease-in-out;
  }
</style>

<script>
  import GRADIENTS from "../res/gradients";
  export default {
    data: () => ({
      backgroundImage:
        GRADIENTS.reduce(
          (cssString, gradient) =>
            `${cssString}, ${gradient[0]}, ${gradient[gradient.length - 1]}`,
          "linear-gradient(90deg"
        ) + ")",
      gradientLength: GRADIENTS.length,
      gradientIndex: 0
    })
  };
</script>