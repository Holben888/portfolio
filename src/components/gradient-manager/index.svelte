<script>
  import GRADIENTS from "./gradients";

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
      textShadowList: updatedGradientList
    };
  };

  export default {
    oncreate() {
      const colorShiftCallback = () => {
        const { index, textShadowCssString, textShadowList } = this.get();
        const newIndex = (index + 1) % GRADIENTS.length;
        const currentGradient = GRADIENTS[newIndex];
        let stepCount = 4;
        this.colorStep = setInterval(() => {
          stepCount--;
          if (stepCount <= 0) {
            clearInterval(this.colorStep);
          }
          const newState = {
            index: newIndex,
            gradientStart: GRADIENTS[newIndex][0],
            gradientEnd: GRADIENTS[newIndex][GRADIENTS[newIndex].length - 1],
            ...getUpdatedGradientValues(
              textShadowList,
              stepCount,
              currentGradient
            )
          };
          this.set(newState);
          this.fire("update", newState);
        }, 150);
      };
      colorShiftCallback();
      this.colorShift = setInterval(colorShiftCallback, 5000);
    },
    data: () => ({
      index: -1,
      textShadowCssString: "",
      textShadowList: ["transparent", "transparent", "transparent", "transparent"]
    })
  };
</script>