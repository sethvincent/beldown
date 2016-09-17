var md = require('./index')

var html = md`
  # hi

  this is markdown
`

console.log(html.toString())

var options = md`---
  gfm: false
  ---
  
  ~~Github flavorded markdown is off~~
`

console.log(options.toString())
