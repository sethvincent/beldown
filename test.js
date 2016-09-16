var test = require('tape')
var md = require('./index')

test('hi', function (t) {
  var html = md`hi`
  t.equal(html.toString(), `<div>\n<p>hi</p>\n</div>`)
  t.end()
})
