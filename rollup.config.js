import svelte from 'rollup-plugin-svelte'

const clientConfig = {
  input: 'client.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      hydratable: true,
      css: false,
    })
  ],
}
const serverConfig = {
  input: 'src/App.svelte',
  output: {
    file: 'public/build/app.js',
    format: 'cjs'
  },
  plugins: [
    svelte({
      hydratable: true,
      generate: 'ssr',
    })
  ],
}
export default [
  clientConfig,
  serverConfig,
]