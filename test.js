var test = require('tape')
var md = require('./index')

test('hi', function (t) {
  var html = md`hi`
  t.equal(html.toString(), `<div>\n<p>hi</p>\n</div>`)
  t.end()
})

test('options', function (t) {
  md.setOptions({
    gfm: false
  })
  
  var html = md`~~cool~~`
  
  t.equal(html.toString(), '<div>\n<p>~~cool~~</p>\n</div>')
  t.end()
})
