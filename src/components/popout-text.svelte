<p style="text-shadow: {textShadowCss || " "}">
	{#each words.split("") as character}
	<span>{character}</span>
	{/each}
</p>

<style>
  p {
    color: transparent;
    font-family: "Avenir-Black";
    font-size: var(--header-size);
    margin: 0;
    padding-bottom: 1rem;
    transition: text-shadow 0.5s ease-out;
  }

  span {
    padding: calc(var(--header-size) * 0.08);
    position: relative;
  }
</style>

<script>
  export default {
    data: () => ({
      textShadowCss: "",
      words: ""
    })
  };
</script>