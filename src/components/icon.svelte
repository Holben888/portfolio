<a href="" style="--size: {size}rem">
	<div class="icon icon__{name}">
	</div>
</a>

<style>
  a {
    --size: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .icon {
    height: var(--size);
    width: var(--size);
    background-repeat: no-repeat;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  a:hover .icon {
    opacity: 1;
  }
</style>

<script>
  export default {
    data: () => ({
      size: "1rem",
      name: "icon__education"
    })
  };
</script>