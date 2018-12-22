<p>
	{#each words.split("") as character}
	<span data-character="{character}" class="character">{character}</span>
	{/each}
</p>

<style>
  p {
    color: var(--dark-9);
    font-family: "Avenir-Black";
    font-size: var(--header-size);
    margin: 0.5rem;
    padding: 0 0.5rem;
    background: var(--primary);
  }
  .character {
    position: relative;
    display: inline-block;
    padding: 0 0.3rem;
    -webkit-font-smoothing: antialiased;
  }
  .character::before,
  .character::after {
    content: attr(data-character);
    position: absolute;
    top: 0;
    left: 0.3rem;
    transform-origin: left top;
    transition: all ease-out 0.3s;
  }
  .character::before {
    color: hsla(0, 0%, 10%, 0.2);
    animation: skew-shadow 0.2s linear forwards;
    animation-delay: 0.5s;
  }
  .character::after {
    color: var(--primary);
    content: attr(data-character);
    animation: pop-out 0.2s ease-in-out forwards;
    animation-delay: 0.5s;
  }
  .character:hover::before {
    transform: scale(1, 1) skew(0deg, 0deg);
  }

  @keyframes pop-out {
    from {
      text-shadow: transparent;
      left: 0;
    }
    to {
      transform: rotate3d(0, 1, 0, 30deg);
      color: var(--primary);
      text-shadow: 0.1rem 0 1rem #c9af20;
      left: 0;
    }
  }

  @keyframes skew-shadow {
    from {
      transform: scale(1, 1) skew(0deg, 0deg);
    }
    to {
      transform: scale(1.2, 1) skew(0deg, 10deg);
    }
  }
</style>

<script>
  export default {};
</script>