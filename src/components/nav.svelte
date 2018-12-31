<nav>
	{#each routes as route}
	<a class="navItem" on:click="goTo(event, route)" href="{route.path}" style="--size: {iconSize}rem">
		<div class="icon__{route.icon}">
		</div>
	</a>
	{/each}
</nav>

<style>
  nav {
    padding: 1rem;
    height: 100%;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .navItem {
    --size: 0;
    width: 100%;
    height: var(--size);
    display: flex;
    justify-content: center;
  }
  .navItem > div {
    height: var(--size);
    width: var(--size);
    background-repeat: no-repeat;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
</style>

<script>
  import * as routes from "../pages/routes.js";

  export default {
    oncreate() {
      console.log(this.get());
    },
    data: () => ({
      routes: routes.default || [],
      iconSize: 3
    }),
    methods: {
      goTo(event, route) {
        event.preventDefault();
        history.pushState({}, "", route.path);
        this.fire("pageChanged", route.component);
      }
    }
  };
</script>