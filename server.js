const express = require('express')
const path = require('path')
const svelteApp = require('./public/build/app.js')
const { matchingRoute } = require('./src/pages/routes')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  const match = matchingRoute(req.originalUrl);
  if (match) {
    var currentPage = match.component
  } else {
    var currentPage = 'Home'
  }
  const { html, css } = svelteApp.render({ renderAll: true, currentPage: currentPage })
  res.send(`
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
  </html>`);
})

app.listen(port, () => console.log(`Listening on port ${port}`))