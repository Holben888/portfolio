<p style="text-shadow: {textShadowCssString}">
	{#each words.split("") as character}
	<span>{character}</span>
	{/each}
</p>

<style>
  p {
    color: transparent;
    font-family: "Avenir-Black";
    font-size: var(--header-size);
    margin: 0.5rem;
    padding: 0 1rem 0.6rem 0.5rem;
    transition: text-shadow 0.5s ease-out;
  }

  span {
    padding: 0.3rem;
    position: relative;
    font-weight: 300;
  }
</style>

<script>
  const gradients = [
    ["#fee140", "#f1b216", "#ec908b", "#ff638d"],
    ["#85FFBD", "#C1FCB0", "#D9FBA3", "#FFFB7D"],
    ["#FFDD8D", "#EEA87D", "#E05E57", "#E9002F"],
    ["#00DBDE", "#66A0E2", "#C942F3", "#FC00FF"]
  ];

  const getUpdatedGradientValues = (gradientList, stepCount, currentGradient) => {
    const updatedGradientList = gradientList.map(
      (color, index) =>
        index - stepCount >= 0 ? currentGradient[index - stepCount] : color
    );
    const updatedCssString = updatedGradientList.reduce(
      (updatedCssString, color, index) => {
        return `${updatedCssString} ${0.2 * index}rem ${0.2 *
          index}rem 0 ${color}${
          index < updatedGradientList.length - 1 ? "," : ""
        }`;
      },
      ""
    );

    return {
      textShadowCssString: updatedCssString,
      textShadowGradientList: updatedGradientList
    };
  };

  export default {
    oncreate() {
      this.colorShift = setInterval(() => {
        const { gradientIndex, textShadowGradientList } = this.get();
        const currentGradient = gradients[gradientIndex];
        let stepCount = 4;
        this.colorStep = setInterval(() => {
          stepCount--;
          if (stepCount <= 0) {
            clearInterval(this.colorStep);
          }
          this.set(
            getUpdatedGradientValues(
              textShadowGradientList,
              stepCount,
              currentGradient
            )
          );
        }, 150);
        this.set({ gradientIndex: (gradientIndex + 1) % gradients.length });
      }, 3000);
    },
    data: () => ({
      gradientIndex: 0,
      textShadowCssString: "",
      textShadowGradientList: [
        "transparent",
        "transparent",
        "transparent",
        "transparent"
      ]
    })
  };
</script>