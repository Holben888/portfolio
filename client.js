import App from './src/App.svelte'

const target = document.querySelector('main')

setTimeout(() => {
  console.log("client!")
  new App({
    target,
    hydrate: true,
  });
}, 1000)