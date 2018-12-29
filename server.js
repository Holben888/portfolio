const express = require('express')
const svelteApp = require('./public/build/app.js')
const path = require('path')

const app = express()
const port = 3000
const template = ({ html, css }) => `
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/icons.css">
    <title>Ben Holmes' Portfolio</title>
  </head>
  <style>
    ${css.code}
  </style>
  <body>
    <main>${html}</main>
    <script src = "/build/bundle.js"></script>
  </body>
</html>`

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const rendered = svelteApp.render({})
  res.send(template(rendered));
})

app.listen(port, () => console.log(`Listening on port ${port}`))