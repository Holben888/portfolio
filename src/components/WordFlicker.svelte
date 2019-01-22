{#each splitPhrase as word}
<span class="wordFlicker" style="{customStyle + " ; "} --flicker-delay: { 0.5 + Math.floor(Math.random() * 4) * 0.2}s">{word}</span>
{/each}

<script>
  export default {
    computed: {
      splitPhrase: ({ phrase }) => {
        const splitPhrase = phrase.split(" ");
        return splitPhrase.map(
          (word, index) => word + (index >= splitPhrase.length - 1 ? "" : " ")
        );
      }
    },
    data: () => ({
      customStyle: ""
    })
  };
</script>