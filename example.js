var md = require('./index')

var html = md`
  # hi

  this is markdown
`

console.log(html.toString())

// set marked options

md.setOptions({
  gfm: false
})

var options = md`~~Github flavored markdown is off~~`

console.log(options.toString())
