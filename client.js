import App from './src/App.svelte'
import { matchingRoute } from "./src/pages/routes.js";

// setTimeout(() => {
new App({
  target: document.querySelector('main'),
  hydrate: true,
  data: {
    currentPage: matchingRoute(window.location.pathname).component
  }
});
// }, 1000)