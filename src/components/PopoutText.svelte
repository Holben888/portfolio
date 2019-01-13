<p style="text-shadow: {textShadowCss || " "}; --size: {size}rem">
	{#each words.split("") as character}
	<span>{character}</span>
	{/each}
</p>

<style>
  p {
    --size: 0;
    color: transparent;
    font-family: "Avenir-Black";
    font-size: var(--size);
    margin: 0;
    padding-bottom: 1rem;
    transition: text-shadow 0.5s ease-out;
  }

  span {
    padding: calc(var(--size) * 0.08);
    position: relative;
  }
</style>

<script>
  export default {
    data: () => ({
      textShadowCss: "",
      words: "",
      size: 1
    })
  };
</script>