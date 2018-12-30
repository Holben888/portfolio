import svelte from 'rollup-plugin-svelte'
import commonjs from 'rollup-plugin-commonjs'

const clientConfig = {
  input: 'client.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
  },
  plugins: [
    commonjs(),
    svelte({
      hydratable: true,
      css: false,
    })
  ],
}
const appConfig = {
  input: 'src/App.svelte',
  output: {
    file: 'public/build/app.js',
    format: 'cjs',
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
  appConfig,
]