var md = require('./index')

var html = md`
  # hi

  this is markdown
`

console.log(html.toString())
